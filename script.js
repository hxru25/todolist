const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskPriority = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskDescription = taskInput.value;
    const taskDueDate = taskDate.value;
    const taskPrioirty = taskPriority.value;

    if (!taskDescription || !taskDueDate || !taskPrioirty) {
        alert('Please fill out all fields.');
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <div>
            <strong>Description:</strong> ${taskDescription}<br>
            <strong>Due Date:</strong> ${taskDueDate}<br>
            <strong>Priority:</strong> ${taskPrioirty}
        </div>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Clear form fields
    taskInput.value = '';
    taskDate.value = '';
    taskPriority.selectedIndex = 0;
}

function deleteTask(taskElement) {
    taskElement.parentElement.remove();
}
