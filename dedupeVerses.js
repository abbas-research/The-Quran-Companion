const fs = require("fs");
const path = require("path");

const versesPath = path.join(__dirname, "Data_New", "verses.js");
const backupPath = path.join(
    __dirname,
    "Data_New",
    `verses.backup.${new Date().toISOString().replace(/[:.]/g, "-")}.js`
);

const VERSES = require("./Data_New/verses");

// Create backup
fs.copyFileSync(versesPath, backupPath);

console.log("========================================");
console.log("Backup created:");
console.log(path.basename(backupPath));
console.log("========================================");

const seen = new Map();
const cleaned = [];
const removed = [];

for (const verse of VERSES) {

    const existing = seen.get(verse.reference);

    if (!existing) {

        seen.set(verse.reference, verse);
        cleaned.push(verse);
        continue;

    }

    if (JSON.stringify(existing) !== JSON.stringify(verse)) {

        console.log("");
        console.log("❌ Duplicate with different content found.");
        console.log(`Reference: ${verse.reference}`);
        console.log("Cleanup aborted.");
        process.exit(1);

    }

    removed.push(verse.reference);

}

const output =
`const VERSES = ${JSON.stringify(cleaned, null, 4)};

module.exports = VERSES;
`;

fs.writeFileSync(versesPath, output);

console.log("");
console.log("========================================");
console.log("Duplicate Cleanup Complete");
console.log("========================================");

if (removed.length === 0) {

    console.log("No duplicate verses found.");

} else {

    removed.forEach(ref => console.log(ref));

}

console.log("----------------------------------------");
console.log(`Removed : ${removed.length}`);
console.log(`Remaining: ${cleaned.length}`);
console.log("========================================");