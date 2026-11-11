import { getObjectText, listKeys, type StorageConfig } from "./storage";

export type ApplicationRecord = {
  id: string;
  /** The YYYY-MM-DD folder the application is stored under. */
  date: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  resumeFileName: string;
  resumeSizeBytes: number;
};

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ID_PATTERN = /^[0-9a-f-]{36}$/;
const MAX_APPLICATIONS = 500;
const CONCURRENCY = 10;

/** Guards against path tricks: only exact date and UUID segments are accepted. */
export function isValidApplicationRef(date: string, id: string): boolean {
  return DATE_PATTERN.test(date) && ID_PATTERN.test(id);
}

export function resumeKey(date: string, id: string) {
  return `applications/${date}/${id}/resume.pdf`;
}

export function detailsKey(date: string, id: string) {
  return `applications/${date}/${id}/details.json`;
}

export async function readApplication(
  storage: StorageConfig,
  date: string,
  id: string,
): Promise<ApplicationRecord | null> {
  const text = await getObjectText(storage, detailsKey(date, id));
  if (!text) return null;

  try {
    const data = JSON.parse(text) as Partial<ApplicationRecord>;
    return {
      id,
      date,
      submittedAt: String(data.submittedAt ?? ""),
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      phone: String(data.phone ?? ""),
      role: String(data.role ?? ""),
      resumeFileName: String(data.resumeFileName ?? ""),
      resumeSizeBytes: Number(data.resumeSizeBytes ?? 0),
    };
  } catch {
    return null;
  }
}

/** Newest applications first, capped at MAX_APPLICATIONS. */
export async function listApplications(storage: StorageConfig): Promise<{
  applications: ApplicationRecord[];
  truncated: boolean;
}> {
  const keys = await listKeys(storage, "applications/");
  const refs = keys
    .map((key) => key.match(/^applications\/(\d{4}-\d{2}-\d{2})\/([0-9a-f-]{36})\/details\.json$/))
    .filter((match): match is RegExpMatchArray => match !== null)
    .map((match) => ({ date: match[1], id: match[2] }))
    .sort((a, b) => b.date.localeCompare(a.date));

  const truncated = refs.length > MAX_APPLICATIONS;
  const selected = refs.slice(0, MAX_APPLICATIONS);

  const results: (ApplicationRecord | null)[] = new Array(selected.length).fill(null);
  let next = 0;

  async function worker() {
    while (next < selected.length) {
      const index = next++;
      const { date, id } = selected[index];
      results[index] = await readApplication(storage, date, id).catch(() => null);
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, selected.length) }, worker));

  const applications = results
    .filter((record): record is ApplicationRecord => record !== null)
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));

  return { applications, truncated };
}
