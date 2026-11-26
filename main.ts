// The Moon Gets One Star — make.fun bounty entry ($2).
//
// Writes a single one-star review of the Moon to entry.txt inside
// the output directory. The grader reads that file and judges the
// review two at a time against other entries.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when it is set,
// otherwise /output. Only the file is written; the directory itself
// is created if missing and never removed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, picked by a head-to-head ammo-model judge from
// 10 candidates against the competition's own criteria: a specific,
// surprising grievance — the Moon's tides flooding a sandcastle,
// with no apology. 104 characters, one line, no trailing newline,
// inside the gate's 1-120 character window.
const LINE =
  "1 star. The Moon controls my tides twice a day and has never once apologised for flooding my sandcastle.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line = LINE.trim();
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry line must be 1-120 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
