export class SignedOutError extends Error {
  constructor() {
    super("Please sign in again.");
  }
}

/** Calls an admin API route. Throws SignedOutError on 401 and Error(message) on failures. */
export async function adminFetch<T extends Record<string, unknown>>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(url, { cache: "no-store", ...init });
  if (response.status === 401) throw new SignedOutError();

  const result = (await response.json().catch(() => null)) as
    | ({ ok: boolean; error?: string } & T)
    | null;
  if (!response.ok || !result?.ok) throw new Error(result?.error ?? "Something went wrong.");
  return result;
}
