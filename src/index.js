


// console.log(taskList);
// console.log(taskDescription);
// console.log(taskForm);


let taskForm = document.getElementById("create-task-form")

const createNewTask = event => {
  event.preventDefault(),
  const takeDescription = document.getElementById("new-task-description")
  const task = document.createElement('li')
  const newTaskDescription = document.getElementById("new-task-description");
  task.innerHTML = newTaskDescription.value,
}

taskForm.addEventListener('submit', function {
  let tasks = document.getElementById('tasks');
  let task = document.createElement('li');
  task.innerHTML =
})
