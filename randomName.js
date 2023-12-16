export function getRandomName(words) {
    const maxIndex = words.length;
    const minIndex = 0;

    const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex) + minIndex);
    const randomName = words[randomIndex].toUpperCase();

    return randomName;
}

function availableRandomName(word) {
    // if the word are already played, the next are the other words
}