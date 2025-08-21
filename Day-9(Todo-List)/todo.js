console.log("Todo List Javascript Loaded");

const addBtn = document.querySelector("#add-todo");
const addBar = document.querySelector(".add-bar");
const todoList = document.querySelector(".todo-list");
const cancelBtn = document.getElementById("cancelAddBtn");
const saveBtn = document.getElementById("saveTaskBtn");
const clearAllBtn = document.querySelector("#clear-list");

addBtn.addEventListener("click", () => {
  console.log("Add Button Clicked");
  addBar.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  console.log("Cancel Button Clicked");
  addBar.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  let taskInput = document.querySelector("#taskInput");
  console.log("Save task Button Clicked");
  console.log(taskInput.value);

  if (taskInput.value.trim() !== "") {
    let newtodo = document.createElement("li");
    newtodo.classList.add("todo-item");

    let leftDiv = document.createElement("div");
    leftDiv.classList.add("left");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-task");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.innerText = taskInput.value;

    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(span);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    newtodo.appendChild(leftDiv);
    newtodo.appendChild(deleteBtn);
    todoList.appendChild(newtodo);

    taskInput.value = "";
    addBar.style.display = "none";
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("check-task")) {
    console.log("Checkbox Clicked");
    let taskText = e.target.nextElementSibling;

    if (e.target.checked) {
      taskText.classList.add("completed");
      console.log("Task done");
    } else {
      taskText.classList.remove("completed");
      console.log("Task not done");
    }
  }

  let deleteBtn = e.target.closest(".delete-btn");
  if (deleteBtn) {
    console.log("Task Delete Button Clicked");
    let todoItem = deleteBtn.closest(".todo-item"); 
    todoItem.remove();
    console.log("Task Deleted");
  }
});

clearAllBtn.addEventListener("click", () => {
  console.log("Clear All Button Clicked");
});
