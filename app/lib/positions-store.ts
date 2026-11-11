import { getObjectText, putObject, type StorageConfig } from "./storage";
import type { Position } from "./positions";

const POSITIONS_KEY = "positions/positions.json";

export async function readPositions(storage: StorageConfig): Promise<Position[]> {
  const text = await getObjectText(storage, POSITIONS_KEY);
  if (!text) return [];
  const parsed: unknown = JSON.parse(text);
  return Array.isArray(parsed) ? (parsed as Position[]) : [];
}

export async function writePositions(storage: StorageConfig, positions: Position[]) {
  await putObject(storage, POSITIONS_KEY, JSON.stringify(positions, null, 2), "application/json");
}
