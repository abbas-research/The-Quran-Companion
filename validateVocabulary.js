import { VOCABULARY } from "./Data_New/vocabulary.js";

console.log("=================================");
console.log("TQC VOCABULARY VALIDATION");
console.log("=================================\n");

let duplicateKeys = 0;
let emptyKeys = 0;
let emptyDefinitions = 0;
let whitespaceIssues = 0;
let invalidCharacters = 0;

const seen = new Set();
const validKey = /^[A-Za-z0-9\s'-]+$/;

for (const [word, definition] of Object.entries(VOCABULARY)) {

    // Duplicate keys
    const key = word.toLowerCase();

    if (seen.has(key)) {
        duplicateKeys++;
    }

    seen.add(key);

    // Empty key
    if (!word.trim()) {
        emptyKeys++;
    }

    // Empty definition
    if (!definition.trim()) {
        emptyDefinitions++;
    }

    // Whitespace
    if (
        word !== word.trim() ||
        definition !== definition.trim() ||
        word.includes("  ") ||
        definition.includes("  ")
    ) {
        whitespaceIssues++;
    }

    // Invalid characters
    if (!validKey.test(word)) {
        invalidCharacters++;
    }
}

console.log(`Entries................. ${Object.keys(VOCABULARY).length}`);
console.log("");

console.log(`Duplicate keys.......... ${duplicateKeys === 0 ? "PASS" : "FAIL"}`);
console.log(`Empty keys.............. ${emptyKeys === 0 ? "PASS" : "FAIL"}`);
console.log(`Empty definitions....... ${emptyDefinitions === 0 ? "PASS" : "FAIL"}`);
console.log(`Whitespace.............. ${whitespaceIssues === 0 ? "PASS" : "FAIL"}`);
console.log(`Invalid characters...... ${invalidCharacters === 0 ? "PASS" : "FAIL"}`);

const passed =
    duplicateKeys === 0 &&
    emptyKeys === 0 &&
    emptyDefinitions === 0 &&
    whitespaceIssues === 0 &&
    invalidCharacters === 0;

console.log("");

if (passed) {
    console.log("✅ VOCABULARY VALIDATION PASSED");
} else {
    console.log("❌ VOCABULARY VALIDATION FAILED");
}