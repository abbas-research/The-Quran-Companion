const fs = require("fs");
const path = require("path");

const versesPath = path.join(__dirname, "Data_New", "verses.js");
const backupPath = path.join(
    __dirname,
    "Data_New",
    `verses.backup.${new Date().toISOString().replace(/[:.]/g, "-")}.js`
);

const VERSES = require("./Data_New/verses");

fs.copyFileSync(versesPath, backupPath);

const KEEP = {
    "3:134": 1,
    "3:154": 2,
    "16:43": 1,
    "17:7": 2,
    "21:83-84": 1,
    "25:63": 1,
    "26:80": 1,
    "91:7-10": 2
};

const grouped = new Map();

for (const verse of VERSES) {

    if (!grouped.has(verse.reference)) {
        grouped.set(verse.reference, []);
    }

    grouped.get(verse.reference).push(verse);

}

const cleaned = [];

for (const [reference, list] of grouped.entries()) {

    if (list.length === 1) {

        cleaned.push(list[0]);
        continue;

    }

    const first = list[0];
    const identical = list.every(
        v => JSON.stringify(v) === JSON.stringify(first)
    );

    if (identical) {

        cleaned.push(first);
        continue;

    }

    if (!(reference in KEEP)) {

        console.log(`Missing KEEP rule for ${reference}`);
        process.exit(1);

    }

    cleaned.push(list[KEEP[reference] - 1]);

}

const output =
`const VERSES = ${JSON.stringify(cleaned, null, 4)};

module.exports = VERSES;
`;

fs.writeFileSync(versesPath, output);

console.log("✅ Cleanup complete.");
console.log(`Remaining verses: ${cleaned.length}`);
console.log(`Backup: ${path.basename(backupPath)}`);