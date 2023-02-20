'use strict'

const todoCon = document.querySelector(".todo-list");
const inputText = document.querySelector(".input-text")
const submitBtn = document.querySelector(".btn")

let array = []

function renderTodoList() {
  todoCon.innerHTML = ""
  array.forEach((todo, i) => {
    let item = document.createElement("li")
    let p = document.createElement("p");
    let delBtn = document.createElement("button");
    let modBtn = document.createElement("button")
    delBtn.innerText = "delete"
    modBtn.innerText = "modify"
    p.innerText = todo.title;
    if (!!todo.done) {
      p.style.textDecoration = "line-through"
    }
    p.appendChild(delBtn)
    p.appendChild(modBtn)
    delBtn.addEventListener("click", () => {
      deleteTodo(i);
    })
    modBtn.addEventListener("click", () => {
      modifyTodo(i);
    })
    item.appendChild(p);
    todoCon.appendChild(item)
  })
}

function deleteTodo(index) {
  if (index > -1) {
    array.splice(index, 1);
  }
  renderTodoList();
}

function modifyTodo(index) {
  array[index].done = true;
  renderTodoList();
  console.log(array);
  console.log(array[index]);

}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  array.push({ title: inputText.value, done: false })
  renderTodoList();
  inputText.value = ""
})

