const handSign = [
    { name: 'paper', sign: '🖐' },
    { name: 'rock', sign: '👊' },
    { name: 'scissor', sign: '✌🏻' }
];

function generateHandSign() {
    const sign1 = Math.floor(Math.random() * 3);
    const sign2 = Math.floor(Math.random() * 3);
    getSign(sign1, sign2);
}

function getSign(sign1, sign2) {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');

    const value1 = handSign[sign1].sign;
    const value2 = handSign[sign2].sign;

    player1.textContent = value1;
    player2.textContent = value2;

    const name1 = handSign[sign1].name;
    const name2 = handSign[sign2].name;

    const winner = document.getElementById('winner');

    if (name1 === name2) {
        winner.textContent = `Draw`;
        winner.classList.remove('win');
        winner.classList.add('draw');
    } else if (
        (name1 === 'rock' && name2 === 'scissor') ||
        (name1 === 'paper' && name2 === 'rock') ||
        (name1 === 'scissor' && name2 === 'paper')
    ) {
        winner.textContent = `${name1} beats ${name2}`;
        winner.classList.remove('draw');
        winner.classList.add('win');
    } else {
        winner.textContent = `${name2} beats ${name1}`;
        winner.classList.remove('draw');
        winner.classList.add('win');
    }
}

function startGame() {
    generateHandSign();
}