// Front page: "Saturday 21 November 2026" — a 35-story, seven-region global edition.
// Leads: COP31 climate summit deadlock, Houthi missiles downed over Saudi Arabia,
// and a magnitude 6.7 quake shaking central Peru. Mid-page carries a numbered
// brief grid and a "Where it happened" world map; the footer's "Date check"
// corrects items originally filed under Friday, 20 November.
import { mkdirSync, copyFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
const destination = join(outDir, 'entry.png');

function describeOutput(outDir, size) {
  process.stderr.write(`Published news front page to ${outDir}/entry.png (${size} bytes)\n`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

const { size } = statSync(destination);
describeOutput(outDir, size);
