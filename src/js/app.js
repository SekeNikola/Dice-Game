let scores, roundScore, activePlayer, gameOn

init()

// ROLL
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameOn) {
        let dice = document.querySelector('.dice');
        let random = Math.floor(Math.random() * 6) + 1
        dice.style.display = 'block'
        dice.src = `src/img/dice-${random}.png`


        if (random !== 1) {
            roundScore += random;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
})


// HOLD
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameOn) {
        scores[activePlayer] += roundScore
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        let input = document.getElementById('final-score').value;
        let winingScore;

        if(input){
            winingScore = input
        }else{
            winingScore = 100
        }
        if (scores[activePlayer] >= winingScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameOn = false
        } else {
            nextPlayer();
        }
    }
})

// Next Player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

}


// NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameOn = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



