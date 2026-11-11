export const POSITION_TYPES = ["Full-time", "Part-time", "Contract", "Internship"] as const;
export const POSITION_STATUSES = ["open", "closed"] as const;

export type PositionType = (typeof POSITION_TYPES)[number];
export type PositionStatus = (typeof POSITION_STATUSES)[number];

export type Position = {
  id: string;
  title: string;
  location: string;
  type: PositionType;
  description: string;
  status: PositionStatus;
  createdAt: string;
  updatedAt: string;
};

export type PositionInput = Pick<
  Position,
  "title" | "location" | "type" | "description" | "status"
>;

export const GENERAL_APPLICATION = "General application";

/** Validates untrusted input. Returns the cleaned value or an error message. */
export function parsePositionInput(
  raw: unknown,
): { ok: true; value: PositionInput } | { ok: false; error: string } {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, error: "Invalid position data." };
  }
  const data = raw as Record<string, unknown>;
  const str = (key: string) => (typeof data[key] === "string" ? (data[key] as string).trim() : "");

  const title = str("title");
  const location = str("location");
  const description = str("description");
  const type = str("type") as PositionType;
  const status = str("status") as PositionStatus;

  if (title.length < 2 || title.length > 100) {
    return { ok: false, error: "Title must be 2-100 characters." };
  }
  if (title.toLowerCase() === GENERAL_APPLICATION.toLowerCase()) {
    return { ok: false, error: `"${GENERAL_APPLICATION}" is reserved. Choose another title.` };
  }
  if (location.length < 2 || location.length > 100) {
    return { ok: false, error: "Location must be 2-100 characters." };
  }
  if (!POSITION_TYPES.includes(type)) {
    return { ok: false, error: "Choose a valid employment type." };
  }
  if (!POSITION_STATUSES.includes(status)) {
    return { ok: false, error: "Choose a valid status." };
  }
  if (description.length > 4000) {
    return { ok: false, error: "Description must be 4000 characters or fewer." };
  }

  return { ok: true, value: { title, location, type, description, status } };
}
