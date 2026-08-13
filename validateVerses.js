const VERSES = require("./Data_New/verses");

const required = [
    "reference",
    "surahNumber",
    "surahName",
    "ayahStart",
    "ayahEnd",
    "translation"
];

let errors = 0;

for (const verse of VERSES) {

    for (const field of required) {

        if (
            verse[field] === undefined ||
            verse[field] === null ||
            verse[field] === ""
        ) {

            console.log(`${verse.reference} -> Missing ${field}`);
            errors++;

        }

    }

}

console.log("========================================");

if (errors === 0) {

    console.log("✅ All verse objects are complete.");

} else {

    console.log(`❌ Total Missing Fields: ${errors}`);

}

console.log("========================================");