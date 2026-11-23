import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v2.4.1: Fixed the brain replaying your most embarrassing moment from 2014 at 3 AM nightly; cringe cache now clears on shutdown.";

const lines = ENTRY.split("\n");
if (lines.length !== 1 || ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry must be exactly 1 line, 1-160 chars (got ${lines.length} lines, ${ENTRY.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
