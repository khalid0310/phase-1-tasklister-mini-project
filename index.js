ocument.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('create-task-form');
    const taskList = document.getElementById('task-list');
    
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });
            
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            
            taskInput.value = ''; // Clear the input field
        }
    });
});