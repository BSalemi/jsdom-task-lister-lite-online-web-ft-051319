


// console.log(taskList);
// console.log(taskDescription);
// console.log(taskForm);


let taskForm = document.getElementById("create-task-form")

const createNewTask = event => {
  event.preventDefault(),
  const takeDescription = document.getElementById("new-task-description")
  const task = document.createElement('li')
  const newTaskDescription = document.getElementById("new-task-description");
  const tasks = document.getElementById('tasks');
  task.innerHTML = newTaskDescription.value,
  tasks.appendChild(task)
}

taskForm.addEventListener('submit', createNewTask)

  
