document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  // const description = document.getElementById("new-task-description");

  form.addEventListener("submit", createNewTask);
});

const createTask = (e) => {
  e.preventDefault();
  console.log("createTask");
  const task = document.createElement("li");
  task.innerText = newTaskDescription.value;

  appendTask(newTask);
  e.target.reset();
};

const appendNewTask = (task) => {
  const ulTask = document.getElementById("tasks");
  ulTask.getElementById("tasks").appendChild(task);
};
