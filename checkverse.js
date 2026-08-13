const VERSES = require("./Data_New/verses");
const JOURNEY_MAP = require("./Data_New/journeyMap");

// --------------------------------------------------
// Build verse lookup and classify duplicates
// --------------------------------------------------

const verseSet = new Set();
const seen = new Map();

const identicalDuplicates = [];
const conflictingDuplicates = [];

for (const verse of VERSES) {

    if (seen.has(verse.reference)) {

        const original = seen.get(verse.reference);

        if (JSON.stringify(original) === JSON.stringify(verse)) {

            identicalDuplicates.push(verse.reference);

        } else {

            conflictingDuplicates.push(verse.reference);

        }

    } else {

        seen.set(verse.reference, verse);

    }

    verseSet.add(verse.reference);

}

// --------------------------------------------------
// Validate journey references
// --------------------------------------------------

const missing = new Set();
const usedReferences = new Set();

for (const journey of JOURNEY_MAP) {

    for (const reference of journey.primaryVerses) {

        usedReferences.add(reference);

        if (!verseSet.has(reference)) {
            missing.add(reference);
        }

    }

    for (const reference of journey.otherVerses) {

        usedReferences.add(reference);

        if (!verseSet.has(reference)) {
            missing.add(reference);
        }

    }

}

// --------------------------------------------------
// Duplicate report
// --------------------------------------------------

console.log("========================================");
console.log("Duplicate Audit");
console.log("========================================");

if (identicalDuplicates.length === 0 && conflictingDuplicates.length === 0) {

    console.log("✅ No duplicate verse objects.");

} else {

    if (identicalDuplicates.length) {

        console.log("\nSAFE TO REMOVE");

        [...new Set(identicalDuplicates)]
            .sort()
            .forEach(ref => console.log(ref));

    }

    if (conflictingDuplicates.length) {

        console.log("\nREVIEW REQUIRED");

        [...new Set(conflictingDuplicates)]
            .sort()
            .forEach(ref => console.log(ref));

    }

    console.log("----------------------------------------");
    console.log(`Safe   : ${[...new Set(identicalDuplicates)].length}`);
    console.log(`Review : ${[...new Set(conflictingDuplicates)].length}`);

}

// --------------------------------------------------
// Missing references
// --------------------------------------------------

console.log("\n========================================");

if (missing.size === 0) {

    console.log("✅ All journey references exist.");

} else {

    console.log("❌ Missing References");

    [...missing]
        .sort((a, b) => {

            const [sa, aa] = a.split(":");
            const [sb, ab] = b.split(":");

            if (+sa !== +sb) {
                return +sa - +sb;
            }

            return aa.localeCompare(ab, undefined, { numeric: true });

        })
        .forEach(ref => console.log(ref));

    console.log("----------------------------------------");
    console.log(`Total Missing: ${missing.size}`);

}

console.log("========================================");

// --------------------------------------------------
// Unused verses
// --------------------------------------------------

const unused = VERSES
    .map(v => v.reference)
    .filter(ref => !usedReferences.has(ref));

console.log("\n========================================");
console.log("Unused Verse References");
console.log("========================================");

if (unused.length === 0) {

    console.log("✅ No unused verses.");

} else {

    unused
        .sort((a, b) => {

            const [sa, aa] = a.split(":");
            const [sb, ab] = b.split(":");

            if (+sa !== +sb) {
                return +sa - +sb;
            }

            return aa.localeCompare(ab, undefined, { numeric: true });

        })
        .forEach(ref => console.log(ref));

    console.log("----------------------------------------");
    console.log(`Total Unused: ${unused.length}`);

}

console.log("========================================");