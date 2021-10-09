const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// document.getElementById("MyElement").classList.toggle('MyClass');
const grassThemeSwitcher = document.getElementById("grass-theme")
grassThemeSwitcher.onclick = function () {
    document.getElementById("body").classList.remove('wars');
    document.getElementById("body").classList.remove('stars');
    document.getElementById("body").classList.remove('clouds');
    document.getElementById("body").classList.remove('starwars');
    document.getElementById("body").classList.add('grass');
}

const starsThemeSwitcher = document.getElementById("stars-theme")
starsThemeSwitcher.onclick = function () {
    document.getElementById("body").classList.remove('grass');
    document.getElementById("body").classList.remove('clouds');
    document.getElementById("body").classList.add('stars');
    if ( document.getElementById("body").classList.contains('wars') ) {
        document.getElementById("body").classList.remove('wars');
        document.getElementById("body").classList.remove('stars');
        document.getElementById("body").classList.add('starwars');
    }
}

const cloudsThemeSwitcher = document.getElementById("clouds-theme")
cloudsThemeSwitcher.onclick = function () {
    document.getElementById("body").classList.remove('wars');
    document.getElementById("body").classList.remove('stars');
    document.getElementById("body").classList.remove('grass');
    document.getElementById("body").classList.remove('starwars');
    document.getElementById("body").classList.add('clouds');
}

const warsThemeSwitcher = document.getElementById("wars-theme")
warsThemeSwitcher.onclick = function () {
    document.getElementById("body").classList.remove('clouds');
    document.getElementById("body").classList.remove('grass');
    document.getElementById("body").classList.add('wars');
    if ( document.getElementById("body").classList.contains('stars') ) {
        document.getElementById("body").classList.remove('stars');
        document.getElementById("body").classList.remove('wars');
        document.getElementById("body").classList.add('starwars');
    }
}