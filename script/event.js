function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function hideEliment(elements) {
    const element = document.getElementById('home-screen');
    element.classList.add('hidden')
}
function showElement(elements) {
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
}
function getRandomAlphaber() {
    const alphabetString = 'abcdefghijklmnopqrstuvwx';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(alphabet, index)
    return alphabet;
}
