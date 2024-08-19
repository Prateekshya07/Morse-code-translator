// src/morseCode.js
const morseCodeMap = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
    G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
    M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
    S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
    Y: "-.--", Z: "--..", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
    5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----",
    " ": " "
};

const reverseMorseCodeMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([letter, morse]) => [morse, letter])
);

export const translateToMorse = (text) =>
    text
        .toUpperCase()
        .split("")
        .map((char) => morseCodeMap[char] || char)
        .join(" ");

export const translateToEnglish = (morse) =>
    morse
        .split(" ")
        .map((code) => reverseMorseCodeMap[code] || code)
        .join("");
