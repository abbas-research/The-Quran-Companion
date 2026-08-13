const VERSES = require("./Data_New/verses");

const REVIEW = [
    "3:134",
    "3:154",
    "16:43",
    "17:7",
    "21:83-84",
    "25:63",
    "26:80",
    "91:7-10"
];

for (const reference of REVIEW) {

    const matches = VERSES.filter(v => v.reference === reference);

    console.log("\n==================================================");
    console.log(`Reference: ${reference}`);
    console.log("==================================================");

    matches.forEach((verse, index) => {

        console.log(`\n--------------- COPY ${index + 1} ---------------`);
        console.dir(verse, { depth: null });

    });

}