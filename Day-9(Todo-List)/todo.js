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
  } else if (taskInput.value.trim() === "") {
    let errMsg = document.createElement("p");
    errMsg.classList.add("error-message");
    errMsg.innerHTML = "Please enter a task before saving!";
    addBar.insertAdjacentElement("afterend", errMsg);
    setTimeout(() => {
      errMsg.remove();
    }, 2000);
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

  if (
    e.target.classList.contains("delete-btn") ||
    e.target.parentElement.classList.contains("delete-btn")
  ) {
    let todoItem = e.target.closest(".todo-item");
    todoItem.remove();
  }
});

clearAllBtn.addEventListener("click", () => {
  console.log("Clear All Button Clicked");
  if (confirm("Are you sure you want to clear all tasks?")) {
    todoList.innerHTML = "";
  }
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    let filter = tab.innerText.toLowerCase();
    console.log("Filter:", filter);
    let todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
      let completed = item.querySelector(".check-task").checked;

      if (filter === "completed") {
        item.style.display = completed ? "flex" : "none";
      } else if (filter === "active") {
        item.style.display = completed ? "none" : "flex";
      } else if (filter === "all todos") {
        item.style.display = "flex";
      }
    });
  });
});
