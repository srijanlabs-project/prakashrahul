import { randomUUID } from "node:crypto";
import { requireAdmin } from "@/app/lib/admin-auth";
import { parsePositionInput, type Position } from "@/app/lib/positions";
import { readPositions, writePositions } from "@/app/lib/positions-store";
import { getStorage } from "@/app/lib/storage";

function unavailable() {
  return Response.json({ ok: false, error: "Storage is not configured." }, { status: 503 });
}

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) return unavailable();

  try {
    return Response.json({ ok: true, positions: await readPositions(storage) });
  } catch (error) {
    console.error("Admin: failed to read positions.", error);
    return Response.json({ ok: false, error: "Could not load positions." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) return unavailable();

  const parsed = parsePositionInput(await request.json().catch(() => null));
  if (!parsed.ok) return Response.json({ ok: false, error: parsed.error }, { status: 400 });

  try {
    const now = new Date().toISOString();
    const position: Position = {
      id: randomUUID().slice(0, 8),
      ...parsed.value,
      createdAt: now,
      updatedAt: now,
    };
    const positions = await readPositions(storage);
    await writePositions(storage, [...positions, position]);
    return Response.json({ ok: true, position }, { status: 201 });
  } catch (error) {
    console.error("Admin: failed to create position.", error);
    return Response.json({ ok: false, error: "Could not save the position." }, { status: 500 });
  }
}
