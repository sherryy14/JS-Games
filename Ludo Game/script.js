let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let dice = document.getElementById('dice');
let btnRoll = document.getElementById('btn--roll');
let btnHold = document.getElementById('btnHold');


score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden')
let currentScore = 0;
let activePlayer = 0;
let playerScores = [0,0];
let playing = true;

btnRoll.addEventListener('click',()=>{

    if(playing){
        let randomDice = Math.trunc(Math.random() * 6 + 1);

        dice.classList.remove('hidden');
    
        dice.src = `dice-${randomDice}.png`
        if(randomDice !== 1){
            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        }else{
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            activePlayer = activePlayer ? 0 : 1;
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
        }
    }
})

btnHold.addEventListener('click',()=>{

    playerScores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer];

    if(playerScores[activePlayer] >= 30){
        playing = false;

        dice.classList.add('hidden')

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById('winner--img').style.display = 'block';
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        activePlayer = activePlayer ? 0 : 1;
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
    }
})


