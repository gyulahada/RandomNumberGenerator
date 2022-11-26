"use strict";

document.querySelector(".button").addEventListener("click", function () {
  const a = Number(document.querySelector(".max").value);
  const b = Number(document.querySelector(".min").value);
  const x = Math.floor(Math.random() * (a - b + 1) + b);

  document.querySelector(".result").textContent = x;
});
