/**
 * Generate both Facilitator and Participant HTML versions
 */

import { generateTabletopHTML } from './generate-pdf.ts';

const args = Bun.argv.slice(2);
const dataPath = args[0] || '../exercises/lapsus-breach/exercise-data.json';

// Load data
const data = JSON.parse(await Bun.file(dataPath).text());

// Generate Facilitator version (full)
const facilitatorHTML = generateTabletopHTML(data, 'facilitator');
const facilitatorPath = dataPath.replace('exercise-data.json', 'LAPSUS-Breach-facilitator.html');
await Bun.write(facilitatorPath, facilitatorHTML);
console.log('✅ Facilitator version:', facilitatorPath);

// Generate Participant version (no spoilers)
const participantHTML = generateTabletopHTML(data, 'participant');
const participantPath = dataPath.replace('exercise-data.json', 'LAPSUS-Breach-participant.html');
await Bun.write(participantPath, participantHTML);
console.log('✅ Participant version:', participantPath);
