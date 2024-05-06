
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
// let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("Notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("Notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", true);
  img.src = "delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage()
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});
