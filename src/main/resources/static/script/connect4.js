const hasWon = (player) => {
    //Check if last move was a winning move
};

const makeMove = (player) => {
    //make a move for the player
}

const setupGame = () => {
    //Create new empty game board of 7 columns × 6 rows
}

function clickIcon(e) {
    const gameArea = document.createElement("div");
    console.log("create game area");
    gameArea.classList.add("connect4Area");
    gameArea.classList.add("gameArea")

    console.log(e.pageX + " : " + e.pageY);
    gameArea.style.left = e.pageX + "px";
    gameArea.style.top = e.pageY + "px";

    const mainElement = document.getElementById("main");
    mainElement.appendChild(gameArea);

    gameArea.style.width = mainElement.offsetWidth + "px";
    gameArea.style.height = mainElement.offsetHeight + "px";
    gameArea.style.top = mainElement.offsetTop + "px";
    gameArea.style.left = mainElement.offsetLeft + "px";
}

function connect4Init() {
    const head = document.getElementsByTagName('HEAD')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style/connect4.css';

    // Append link element to HTML head
    head.appendChild(link);

    addApplication("Connect4", "icon bi bi-joystick", "Connect 4", clickIcon);
}

connect4Init();