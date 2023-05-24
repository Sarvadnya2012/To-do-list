// Get necessary elements from the DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Add click event listener to mark task as completed
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

// Add click event listener to the add button
addButton.addEventListener('click', addTask);

// Add keyup event listener to the input field to allow adding tasks by pressing Enter key
taskInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
