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

    /*const connect4 = document.createElement("div");
    connect4.classList.add("connect4");

    const connect4Icon = document.createElement("i");
    connect4Icon.classList.add("icon");
    connect4Icon.classList.add("bi");
    connect4Icon.classList.add("bi-joystick");
    /*connect4Icon.addEventListener("click", (e) => {
        const gameArea = document.createElement("div");
        console.log("create game area");
        gameArea.classList.add("connect4Area");

        console.log(e.pageX + " : " + e.pageY);
        gameArea.style.left = e.pageX + "px";
        gameArea.style.top = e.pageY + "px";
        /*gameArea.style.width = "0";
        gameArea.style.height = "0";
        gameArea.style.transition = "2s";
        gameArea.style.background = "white";
        gameArea.style.zIndex = "1";
        gameArea.style.position = "fixed";*

        const mainElement = document.getElementById("main");
        mainElement.appendChild(gameArea);

        console.log("Set new with and height");
        console.log(mainElement.offsetWidth + " : " + mainElement.offsetWidth);
        gameArea.style.width = mainElement.offsetWidth + "px";
        gameArea.style.height = mainElement.offsetHeight + "px";
        gameArea.style.top = mainElement.offsetTop + "px";
        gameArea.style.left = mainElement.offsetLeft + "px";
    });*

    const connect4Label = document.createElement("span");
    connect4Label.appendChild(document.createTextNode("Connect 4"));
    connect4Label.classList.add("label")

    connect4.appendChild(connect4Icon);
    connect4.appendChild(connect4Label);

    const mainElement = document.getElementById("main");
    mainElement.appendChild(connect4);*/
}

connect4Init();