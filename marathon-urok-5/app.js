const startBtn = document.querySelector('#start');
// console.log(startBtn);
const screens = document.querySelectorAll('.screen');
// console.log(screens);
const timeList = document.querySelector('#time-list');
// console.log(timeBtn);

const board = document.querySelector('#board');

const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC'];

// время игры (3-й экран)
let timeEl = document.querySelector('#time');
// время игры из атрибута "data-time"
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
    } else if (event.target.classList.contains('custom')) {
        let tmp = +prompt('Введите количество секунд: ');
        if (tmp <= 0) {
            timeEl.parentNode.classList.add('hide');
            time = 0;
        }
        else if (tmp < 10) time = `0${tmp}`
        else time = tmp
    }
    startGame();
    screens[1].classList.add('up');
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        // удаляем кружок
        event.target.remove();
        // создаем новый кружок
        createRandomCircle();
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    if (time > 0) {
        createRandomCircle();
    }
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current);
    }
}

// чтобы не дублировать код в функции startGame и decreaseTime
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    board.append(circle);

    // генерируем размер кружка
    const size = getRandomNumber(10, 60);

    // получаем размеры доски
    const {width, height} = board.getBoundingClientRect();

    // размер кружка
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    //положение кружка
    circle.style.top = `${getRandomNumber(0, height - size)}px`;
    circle.style.left = `${getRandomNumber(0, width - size)}px`;

    // цвета кружков
    circle.style.background = `${colors[getRandomNumber(0, colors.length)]}`
}

// для геренрации рандомных чисел в диапазоне от min до max
function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}