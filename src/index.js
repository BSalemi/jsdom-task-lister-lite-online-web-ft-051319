document.addEventListener("DOMContentLoaded", () => {


// console.log(taskList);
// console.log(taskDescription);
// console.log(taskForm);


let newTaskForm = document.getElementById("create-task-form")

const createNewTask = event => {
  event.preventDefault(),
  const task = document.createElement('li')
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById('tasks');
  task.innerText = newTaskDescription.value,
  tasks.appendChild(task)
}

newTaskForm.addEventListener('submit', createNewTask)
}
