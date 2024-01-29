let move;
let compInput;
let playerScore=0;
let compScore=0;

let textBox = document.querySelector(".text");
let turn = document.querySelector(".turn");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let playerSelec = document.querySelector(".playerSelec");
let compSelec = document.querySelector(".compSelec");

let rock = document.querySelector("#rock");
let scissors = document.querySelector("#scissors");
let paper = document.querySelector("#paper");

let arr = [rock, paper, scissors];

let audio = new Audio('mouse-click.mp3');

const score=()=>{
    you.innerText = playerScore;
    comp.innerText = compScore;
}

function defaultCss(re) {
    turn.classList.remove(re);
    turn.classList.add("pick");
    textBox.innerText = "Pick Your Move";
}

const drawCss = () => {
    textBox.innerText = "Draw !!";
}

const winCss = () => {
    turn.classList.remove("pick");
    turn.classList.add("win");
    textBox.innerText = "You won !";
    score();
}

const lostCss = () => {
    turn.classList.remove("pick");
    turn.classList.add("lost");
    textBox.innerText = "You Lost !";
    score();
}

const screenCleaner=()=>{
    playerSelec.innerHTML ="";
    compSelec.innerHTML ="";
}

const playerMove=(move1)=>{
    playerSelec.innerHTML= move1.innerHTML;
    setTimeout(() => screenCleaner(), 1000);
}

const computerMove=(move2)=>{
    compSelec.innerHTML= move2.innerHTML;
    // setTimeout(() => screenCleaner(), 1000);
}

const checker = () => {
    if (move === arr[compInput]) {
        drawCss();   
        setTimeout(() => defaultCss("pick"), 1000);
    }

    else if ((move === rock && arr[compInput] == paper) || (move === paper && arr[compInput] === scissors) || (move === scissors && arr[compInput] === rock)) {
        compScore=compScore+1;
        lostCss();
        setTimeout(() => defaultCss("lost"), 1000);
    }

    else {
        playerScore=playerScore+1;
        winCss();
        setTimeout(() => defaultCss("win"), 1000);
    }
}

rock.addEventListener("click", () => {
    audio.play();
    move = rock;
    compInput = Math.floor(Math.random() * 3);
    computerMove(arr[compInput]);
    playerMove(rock);
    checker();
})

paper.addEventListener("click", () => {
    audio.play();
    move = paper;
    compInput = Math.floor(Math.random() * 3);
    computerMove(arr[compInput]);
    playerMove(paper);
    checker();
})

scissors.addEventListener("click", () => {
    audio.play();
    move = scissors;
    compInput = Math.floor(Math.random() * 3);
    computerMove(arr[compInput]);
    playerMove(scissors) 
    checker();
})
