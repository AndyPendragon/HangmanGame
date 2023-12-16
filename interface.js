var drawingHangman = `+-----+\n|     |\n|     O\n|    /|\\\n|    / \\\n|  |̅̅ ̅̅ ̅̅ ̅̅ ̅̅ ̅̅|\n`

export function interfaceGuessingWord(word, life) {
    console.log(drawingHangman);
    console.log(lifeNumberStatus(life));
    console.log(wordToGuessStatus(word));
}

function lifeNumberStatus(life) {
    return `You are allowed ${life} mistakes`;
}

export function wordToGuessStatus(wordToGuess) {
    function generateUnderscores(word) {
        return " _".repeat(word.length).trim();
    }

    return `The word is : ${generateUnderscores(wordToGuess)} (${wordToGuess.length})`;
}