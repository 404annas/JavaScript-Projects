const counter = document.getElementById("counter");
const decreaseCounter = document.getElementById("decrease");
const resetCounter = document.getElementById("reset");
const increaseCounter = document.getElementById("increase");

let initialCounter = localStorage.getItem("Counts") || 0;
counter.innerText = initialCounter;

increaseCounter.addEventListener("click", () => {
  initialCounter++;
  counter.innerText = initialCounter;
  localStorage.setItem("Counts", initialCounter);
});

decreaseCounter.addEventListener("click", () => {
  initialCounter--;
  counter.innerText = initialCounter;
  localStorage.setItem("Counts", initialCounter);
});

resetCounter.addEventListener("click", () => {
  initialCounter = 0;
  counter.innerText = initialCounter;
  localStorage.setItem("Counts", initialCounter);
});
