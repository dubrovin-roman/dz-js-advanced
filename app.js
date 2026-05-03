"use strict";

let count = 0;
const countBox = document.querySelector(".count-box");
const btnBox = document.querySelector(".btns-box");

btnBox.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("push-btn")) {
    count++;
    countBox.innerText = count;
    for (const btn of btnBox.children) {
      btn.innerText = "Нажми меня";
    }
    ev.target.innerText = "Нажата!";
  }
});
