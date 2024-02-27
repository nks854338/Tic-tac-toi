let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".restart");
let newGameBtn = document.querySelector(".won");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let turn0 = true;
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxs();
    msgContainer.classList.add("hide");
}

boxes.forEach(box => {
    resetBtn.onclick = () => {
        console.log("clicked!");
        box.innerText = "";
    };
    box.addEventListener("click", () => {
        if (turn0 == true) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        cheakWinner();

    });


});

const enableBoxs = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxs = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const ShowWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} won the game `;
    msgContainer.classList.remove("hide");
}

const playGame = () => {
    newGameBtn.classList.add("hide");
    enableBoxs();
}




const cheakWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                ShowWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);









