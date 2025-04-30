"use strict";

let targetNumber = Math.trunc(Math.random() * 20) + 1;
let heighScore = 0;
let currentScore = 0;

const displayCurrentState = function (message) {
  document.querySelector(".State").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let yourInput = document.querySelector(".myGuess").value;
  let num = Number(yourInput);
  if (yourInput == "") {
    displayCurrentState("⛔️ There is No Input");
  } else if (num === 0) {
    displayCurrentState("⛔️ Invalid must be (1->20)");
  } else if (num === targetNumber) {
    displayCurrentState("🎉 Correct Number!");
    document.querySelector(".qu").textContent = num;
    document.querySelector(".qu").style.color = "black";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (heighScore == 0) {
      heighScore = currentScore;
      document.querySelector(".bestScoreNumber").textContent = heighScore;
    }
    if (heighScore > currentScore) {
      heighScore = currentScore;
      document.querySelector(".bestScoreNumber").textContent = heighScore;
    }
  } else {
    if (currentScore < 9) {
      if (targetNumber < num) {
        displayCurrentState("📈 high!");
      } else {
        displayCurrentState("📉 low!");
      }
      currentScore++;
      document.querySelector(".scoreNumber").textContent = currentScore;
    } else {
      displayCurrentState("💥 You lost the game!");
      document.querySelector("body").style.backgroundColor = "rgb(255, 47, 47)";
      document.querySelector(".scoreNumber").textContent = 0;
    }
  }
});

document.querySelector(".Again").addEventListener("click", function () {
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 0;
  displayCurrentState("Start guessing.....");
  document.querySelector(".scoreNumber").textContent = 0;
  document.querySelector(".qu").textContent = "?";
  document.querySelector(".myGuess").value = "";
  document.querySelector(".qu").style.color = "rgb(10, 194, 133)";
  document.querySelector("body").style.backgroundColor = "bisque";
});

const HideWindow = function () {
  document.querySelector(".hideWindow").classList.add("hidden");
  document.querySelector(".Box").classList.add("hidden");
};
const displayWindow = function () {
  document.querySelector(".hideWindow").classList.remove("hidden");
  document.querySelector(".Box").classList.remove("hidden");
};
document.querySelector(".close").addEventListener("click", HideWindow);
document.querySelector(".hideWindow").addEventListener("click", HideWindow);
document.querySelector(".btnHelp").addEventListener("click", displayWindow);
