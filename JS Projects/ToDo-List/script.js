/*
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must have to write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.appendChild(list);

    let aSpan = document.createElement("span");
    aSpan.innerHTML = "\u00d7";
    list.appendChild(aSpan);
  }
  inputBox.value = "";
  saveProgress();
}

listContainer.addEventListener("click", function (element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
    saveProgress();
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove();
    saveProgress();
  }
});

function saveProgress() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showProgress() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showProgress();
*/

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must have to write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listContainer.append(list);

    let aSpan = document.createElement("span");
    aSpan.innerHTML = "\u00d7";
    list.appendChild(aSpan);
  }
  inputBox.value = "";
  saveProgress();
}

listContainer.addEventListener("click", (element) => {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
    saveProgress();
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove();
    saveProgress();
  }
});

function saveProgress() {
  localStorage.setItem("Your Tasks", listContainer.innerHTML);
}

function showProgress() {
  listContainer.innerHTML = localStorage.getItem("Your Tasks");
}
showProgress();
