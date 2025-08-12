
let randomNum = Math.floor(1 + Math.random() * 100);

const maxAttempts = 10;

let submit = document.querySelector(".input");
const inputbox = document.getElementById("guessInput");
let msg = document.getElementById("message");
let attempts = document.getElementById("attempts");
let score = document.getElementById("score");
let history = document.getElementById("guessList");
const resetBtn = document.getElementById("reset");
let scorevalue = 100;
score.textContent = scorevalue;
attempts.textContent = 0;

submit.addEventListener("click", () => {
    let guessValue = inputbox.value.trim();


    if (guessValue === "" || isNaN(guessValue)) {
        msg.textContent = "Please enter a number";
        msg.style.color = "red";

        return;
    }

    let guess = Number(guessValue);
    let attempts1 = attempts.textContent = parseInt(attempts.textContent) + 1;

    if (guess === randomNum) {
        msg.textContent = "You Win";
        msg.style.color = "green";
        submit.disabled = true;
        resetBtn.classList.remove("hidden");
        document.getElementById("winSound").play();

    }
    else if (attempts1 >= maxAttempts) {
        msg.textContent = `You Lose! Number was ${randomNum}`;
        msg.style.color = "red";
        submit.disabled = true;
        resetBtn.classList.remove("hidden");
        document.getElementById("loseSound").play();
    }
    else {
        scorevalue -= 10;
        score.textContent = scorevalue;
        msg.textContent = "Try again";
        msg.style.color = "red";
        setTimeout(() => {
            msg.textContent = "";
        }, 2000);
    }

    history.appendChild(addlistitem(guessValue));
});

function addlistitem(text) {
    let li = document.createElement("li")
    li.textContent = text;
    return li;
}

resetBtn.addEventListener("click", () => {
    randomNum = Math.floor(1 + Math.random() * 100);
    scorevalue = 100;
    score.textContent = scorevalue;
    attempts.textContent = 0;
    msg.textContent = "";
    msg.style.color = "black";
    history.innerHTML = "";
    submit.disabled = false;
    inputbox.value = "";
    resetBtn.classList.add("hidden");
});
