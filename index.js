document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = ' ❌';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    
    taskInput.value = ''; // Clear the input field
}