let body = document.querySelector("body");
let numRiddle = 0;
let data = [
    {
        question: "Цифра девять",
        matrix: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ],
        size: "5X5",
    },
    {
        question: "Буква Х",
        matrix: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 0, 0, 0, 1],
        ],
        size: "5X5",
    },
    {
        question: "Буква W",
        matrix: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
        ],
        size: "5X5",
    },
    {
        question: "Символ ?",
        matrix: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
        ],
        size: "5X5",
    },
    {
        question: "Символ бесконечность",
        matrix: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 0, 0, 1],
        ],
        size: "5X5",
    },
    {
        question: "Batman",
        matrix: [
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        ],
        size: "10X10",
    },
    {
        question: "Буква B",
        matrix: [
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        ],
        size: "10X10",
    },
    {
        question: "Точка в центре",
        matrix: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        size: "10X10",
    },
    {
        question: "Цифра 1",
        matrix: [
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ],
        size: "10X10",
    },
    {
        question: "Спираль",
        matrix: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        size: "10X10",
    },
    {
        question: "Буква Т",
        matrix: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        size: "15X15",
    },
    {
        question: "Рамка толщина 1",
        matrix: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        size: "15X15",
    },
    {
        question: "Рамка толщина 2",
        matrix: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        size: "15X15",
    },
    {
        question: "Рамка толщина 3",
        matrix: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        size: "15X15",
    },
    {
        question: "5 точек",
        matrix: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        size: "15X15",
    },
];

function getNumRowsMatrix(matrix) {
    return matrix.length;
}

function getNumbColumnsMatrix(matrix) {
    return matrix[0].length;
}

function getMatrixRow(matrix, numRow) {
    return matrix[numRow];
}

function getMatrixColumn(matrix, numColumn) {
    let result = [];
    matrix.forEach((itemOfMatrix) => {
        result.push(itemOfMatrix[numColumn]);
    });
    return result;
}

function getSequences(arr) {
    let copyArr = new Array(...arr, null);
    let result = [];
    let lineArr = [];
    let itemOfArr = null;
    while (copyArr.length) {
        itemOfArr = copyArr.shift();
        if (itemOfArr) {
            lineArr.push(itemOfArr);
        } else {
            if (lineArr.length) {
                result.push(lineArr.length);
                lineArr = [];
            }
        }
    }
    return result;
}

function startGame() {
    createMainPanel();
    createPlayingField();
    createLeftBar();
    createTopBar();
    createMenuWindow();
    createPanelWithSize();
    createPanelWithRiddle();
}

function removeGame() {
    while (body.children.length > 1) {
        if (body.children[0].tagName !== "SCRIPT") {
            body.children[0].remove();
        }
    }
}

function restartGame() {
    removeGame();
    startGame();
}

// ----------------------------------------

function createMainPanel() {
    function resizePlayingField() {
        nonogramsPanel.style.gridTemplateRows = `repeat(${getNumRowsMatrix(data[numRiddle].matrix)}, 1fr)`;
        nonogramsPanel.style.gridTemplateColumns = `repeat(${getNumbColumnsMatrix(data[numRiddle].matrix)}, 1fr)`;
    }

    let mainDiv = document.createElement("main");
    mainDiv.classList.add("main");
    body.prepend(mainDiv);

    mainDiv.style.height = `${mainDiv.clientWidth}px`;
    window.addEventListener("resize", () => {
        mainDiv.style.height = `${mainDiv.clientWidth}px`;
    });

    let topPanelWithTips = document.createElement("div");
    topPanelWithTips.classList.add("main__top-panel");
    mainDiv.append(topPanelWithTips);

    let leftPanelWithTips = document.createElement("div");
    leftPanelWithTips.classList.add("main__left-panel");
    mainDiv.append(leftPanelWithTips);

    let nonogramsPanel = document.createElement("div");
    nonogramsPanel.classList.add("main__nonograms");
    mainDiv.append(nonogramsPanel);

    resizePlayingField();
}

function createVictoryWindow() {
    let victoryWindow = document.querySelector(".victory-window");
    if (!victoryWindow) {
        victoryWindow = document.createElement("div");
        victoryWindow.classList.add("victory-window");

        victoryWindow.addEventListener("click", () => {
            victoryWindow.remove();
        });
        victoryWindow.textContent = "Победа!!"
        alert("Победа!!");
        body.prepend(victoryWindow);
    }
}

function createPlayingField() {
    function leftClickOnElement(event) {
        if (!event.target.classList.contains("main__nonograms__item-block")) {

            // add sound when pressed -->>
            let blackBlock = new Audio("audio/black-block.mp3");
            let whiteBlock = new Audio("audio/white-block.mp3");
            if (event.target.classList.contains("main__nonograms__item-active")) {
                whiteBlock.play();
            } else {
                blackBlock.play();
            }
            // <<--

            event.target.classList.toggle("main__nonograms__item-active");
            let nonogramsPanel = document.querySelector(".main__nonograms");
            let result = true;
            for (child of nonogramsPanel.children) {
                if (child.textContent === "0") {
                    if (child.classList.contains("main__nonograms__item-active")) {
                        result = false;
                        break;
                    }
                }
                if (child.textContent === "1") {
                    if (!child.classList.contains("main__nonograms__item-active")) {
                        result = false;
                        break;
                    }
                }
            }

            if (result) {
                createVictoryWindow();

                // add sound when pressed -->>
                let victoryAudio = new Audio("audio/K-O.mp3");
                victoryAudio.play();
                // <<--
            }
        }
    }

    function rightClickOnElement(event) {
        if (
            event
            && event.type === "contextmenu"
        ) {
            event.preventDefault();
        }
        event.target.classList.remove("main__nonograms__item-active");
        event.target.classList.toggle("main__nonograms__item-block");

        // add sound when pressed -->>
        let redBlock = new Audio("audio/red-block.mp3");
        redBlock.play();
        // <<--
    }

    let nonogramsPanel = document.querySelector(".main__nonograms");

    data[numRiddle].matrix.forEach((itemOfMatrix) => {
        itemOfMatrix.forEach((item__OfItemOfMatrix) => {

            let itemOfNonogramsPanel = document.createElement("div");
            itemOfNonogramsPanel.classList.add("main__nonograms__item");
            nonogramsPanel.append(itemOfNonogramsPanel);
            itemOfNonogramsPanel.innerHTML = item__OfItemOfMatrix;

            itemOfNonogramsPanel.addEventListener("click", leftClickOnElement);
            itemOfNonogramsPanel.addEventListener("contextmenu", rightClickOnElement);

        });
    });
}

function createTopBar() {
    function resizeTopBar() {
        topPanelWithTips.style.gridTemplateColumns = `repeat(${getNumbColumnsMatrix(data[numRiddle].matrix)}, 1fr)`;
    }
    let topPanelWithTips = document.querySelector(".main__top-panel");
    for (let i = 0; i < getNumbColumnsMatrix(data[numRiddle].matrix); i += 1) {
        let itemOfMainTopPanel = document.createElement("div");
        itemOfMainTopPanel.textContent = getSequences(getMatrixColumn(data[numRiddle].matrix, i)).join("-");
        itemOfMainTopPanel.classList.add("main__top-panel__item");
        topPanelWithTips.append(itemOfMainTopPanel);
    }

    resizeTopBar();
}

function createLeftBar() {
    function resizeLeftBar() {
        leftPanelWithTips.style.gridTemplateRows = `repeat(${getNumRowsMatrix(data[numRiddle].matrix)}, 1fr)`;
    }

    let leftPanelWithTips = document.querySelector(".main__left-panel");
    for (let i = 0; i < getNumRowsMatrix(data[numRiddle].matrix); i += 1) {
        let itemOfMainLeftPanel = document.createElement("div");
        itemOfMainLeftPanel.textContent = getSequences(getMatrixRow(data[numRiddle].matrix, i)).join(" - ");
        itemOfMainLeftPanel.classList.add("main__left-panel__item");
        leftPanelWithTips.append(itemOfMainLeftPanel);
    }
    resizeLeftBar();
}

function createMenuWindow() {
    let menuGame = document.createElement("div");
    menuGame.classList.add("menu-game");
    body.prepend(menuGame);
}

function createPanelWithSize() {
    let label__riddleSize = document.createElement("label");
    label__riddleSize.textContent = "Размер: ";
    let menuGame = document.querySelector(".menu-game");
    menuGame.append(label__riddleSize);

    let riddleSize = document.createElement("select");
    riddleSize.classList.add("riddle-size");
    label__riddleSize.append(riddleSize);

    let opt1 = document.createElement("option");
    opt1.textContent = "5X5";
    opt1.setAttribute("value", "5X5");
    let opt2 = document.createElement("option");
    opt2.textContent = "10X10";
    opt2.setAttribute("value", "10X10");
    let opt3 = document.createElement("option");
    opt3.textContent = "15X15";
    opt3.setAttribute("value", "15X15");

    riddleSize.append(opt1);
    riddleSize.append(opt2);
    riddleSize.append(opt3);

    riddleSize.addEventListener("click", (event) => {
        addDataInPanelRiddle(event.target.value);
    });
}

function createPanelWithRiddle() {
    let menuGame = document.querySelector(".menu-game");

    let label__riddle = document.createElement("label");
    label__riddle.textContent = "Загадка: ";
    menuGame.append(label__riddle);

    let riddle__question = document.createElement("select");
    riddle__question.classList.add("riddle-question");
    label__riddle.append(riddle__question);

    let btnStartGame = document.createElement("div");
    btnStartGame.classList.add("btn-start-game");
    btnStartGame.textContent = "Новая игра!!";
    menuGame.append(btnStartGame);
    btnStartGame.addEventListener("click", () => {
        let riddle__question = document.querySelector(".riddle-question");
        if (riddle__question.value) {
            numRiddle = riddle__question.value;
            restartGame();
        } else {
            alert("Выберете размер и загадку!!");
        }
    });

    let btnRestartGame = document.createElement("div");
    btnRestartGame.textContent = "Перезапустить игру!!";
    btnRestartGame.classList.add("btn-restart-game");
    menuGame.append(btnRestartGame);
    btnRestartGame.addEventListener("click", () => {
        restartGame();
    });

    let btnRandomGame = document.createElement("div");
    btnRandomGame.textContent = "Случайная игра!!";
    btnRandomGame.classList.add("btn-random-game");
    menuGame.append(btnRandomGame);
    btnRandomGame.addEventListener("click", () => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        numRiddle = getRandomInt(0, data.length - 1);
        restartGame();
    });

    let bltShowAnswer = document.createElement("div");
    bltShowAnswer.textContent = "Показать ответ!!";
    bltShowAnswer.classList.add("blt-show-answer");
    menuGame.append(bltShowAnswer);

    bltShowAnswer.addEventListener("click", () => {
        let mainNonograms = document.querySelector(".main__nonograms");
        for (item of mainNonograms.children) {
            item.classList.remove("main__nonograms__item-active");
            item.classList.remove("main__nonograms__item-block");

            if (item.textContent === "1") {
                item.classList.add("main__nonograms__item-active");
            } else {
                item.classList.add("main__nonograms__item-block");
            }
        }
    });


    let btnLightTheme = document.createElement("div");
    btnLightTheme.textContent = "Светлая тема!!";
    btnLightTheme.classList.add("btn-light-theme");
    menuGame.append(btnLightTheme);
    btnLightTheme.addEventListener("click", () => {
        document.documentElement.style.setProperty('--Collor_1', 'darkblue');
        document.documentElement.style.setProperty('--Collor_2', 'gray');
        document.documentElement.style.setProperty('--Collor_3', 'lightsteelblue');
        document.documentElement.style.setProperty('--Collor_4', 'blue');
    });

    let btnDarkTheme = document.createElement("div");
    btnDarkTheme.textContent = "Темная тема!!";
    btnDarkTheme.classList.add("btn-dark-theme");
    menuGame.append(btnDarkTheme);
    btnDarkTheme.addEventListener("click", () => {
        document.documentElement.style.setProperty('--Collor_1', 'white');
        document.documentElement.style.setProperty('--Collor_2', 'black');
        document.documentElement.style.setProperty('--Collor_3', 'darkslategray');
        document.documentElement.style.setProperty('--Collor_4', 'green');
    });

    let btnDefaultTheme = document.createElement("div");
    btnDefaultTheme.textContent = "Тема по умолчанию";
    btnDefaultTheme.classList.add("btn-default-theme");
    menuGame.append(btnDefaultTheme);
    btnDefaultTheme.addEventListener("click", () => {
        document.documentElement.style.setProperty('--Collor_1', 'white');
        document.documentElement.style.setProperty('--Collor_2', 'black');
        document.documentElement.style.setProperty('--Collor_3', '#3a4e66');
        document.documentElement.style.setProperty('--Collor_4', '#7482ff');
    });

    let textLabel = document.createElement("label");
    textLabel.textContent = `Размер игрового поля: ${data[numRiddle].size} Загадка: ${data[numRiddle].question}`;
    menuGame.append(textLabel);
}

function addDataInPanelRiddle(size) {
    function dropDataInPanelRiddle() {
        let riddle__question = document.querySelector(".riddle-question");
        while (riddle__question.children.length) {
            riddle__question.children[0].remove();
        }
    }
    dropDataInPanelRiddle();

    let riddle__question = document.querySelector(".riddle-question");
    data.forEach((data__item, index) => {
        if (data__item.size === size) {
            let opt = document.createElement("option");
            opt.textContent = data__item.question;
            opt.setAttribute("value", index);
            riddle__question.append(opt);
        }
    });
}

startGame();