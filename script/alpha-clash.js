// function play() {
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection);
//     homeSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handelkeybordPresed(event) {
    const playerPrassed = event.key;
    console.log('player pressed', playerPrassed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPrassed , expectedAlphabet);
    if (playerPrassed === expectedAlphabet) {
        console.log('you wine')
        continueGame()
    }else{
        console.log('You lost a life')
    }
}
document.addEventListener('keyup', handelkeybordPresed);

function continueGame() {
    const alphabet = getRandomAlphaber();
    console.log('Your alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColor(alphabet)
}

function play() {
    hideEliment('home-screen');
    showElement('play-ground');
    continueGame()
}