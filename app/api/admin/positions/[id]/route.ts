import { requireAdmin } from "@/app/lib/admin-auth";
import { parsePositionInput } from "@/app/lib/positions";
import { readPositions, writePositions } from "@/app/lib/positions-store";
import { getStorage } from "@/app/lib/storage";

export async function PUT(request: Request, ctx: RouteContext<"/api/admin/positions/[id]">) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) {
    return Response.json({ ok: false, error: "Storage is not configured." }, { status: 503 });
  }

  const { id } = await ctx.params;
  const parsed = parsePositionInput(await request.json().catch(() => null));
  if (!parsed.ok) return Response.json({ ok: false, error: parsed.error }, { status: 400 });

  try {
    const positions = await readPositions(storage);
    const index = positions.findIndex((position) => position.id === id);
    if (index === -1) {
      return Response.json({ ok: false, error: "Position not found." }, { status: 404 });
    }

    const updated = { ...positions[index], ...parsed.value, updatedAt: new Date().toISOString() };
    positions[index] = updated;
    await writePositions(storage, positions);
    return Response.json({ ok: true, position: updated });
  } catch (error) {
    console.error("Admin: failed to update position.", error);
    return Response.json({ ok: false, error: "Could not save the position." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, ctx: RouteContext<"/api/admin/positions/[id]">) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) {
    return Response.json({ ok: false, error: "Storage is not configured." }, { status: 503 });
  }

  const { id } = await ctx.params;

  try {
    const positions = await readPositions(storage);
    const remaining = positions.filter((position) => position.id !== id);
    if (remaining.length === positions.length) {
      return Response.json({ ok: false, error: "Position not found." }, { status: 404 });
    }
    await writePositions(storage, remaining);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Admin: failed to delete position.", error);
    return Response.json({ ok: false, error: "Could not delete the position." }, { status: 500 });
  }
}
