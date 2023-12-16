import { interfaceGuessingWord } from "./interface.js";
import { getRandomName } from "./randomName.js";
import { wordSet } from "./wordSet.js";

export function session() {
    var wordToGuess = getRandomName(wordSet);
    let life = 3;

    interfaceGuessingWord(wordToGuess, life);
}