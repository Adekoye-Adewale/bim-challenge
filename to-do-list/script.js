document.addEventListener('DOMContentLoaded', () => {
        displayTodos();
});

// Function to add a new to-do
function addTodo() {
        const title = document.getElementById('todo_title').value;
        const category = document.getElementById('todo_category').value;

        if (title === "") {
                alert("Please enter a to-do item.");
                return;
        };

        const todo = {
                id: Date.now(),
                title: title,
                category: category,
                completed: false
        };

        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

        document.getElementById('todo_title').value = '';
        displayTodos();
}

// Function to display the to-dos
function displayTodos() {
        const todoList = document.getElementById('todo_list');
        todoList.innerHTML = '';

        const todos = JSON.parse(localStorage.getItem('todos')) || [];

        if (todos.length === 0) {
                todoList.innerHTML = '<p>No to-dos yet.</p>';
                return;
        }

        todos.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.className = 'todo_item';
                todoItem.innerHTML = `
                <p class="${todo.completed ? 'completed' : ''}">${todo.title} (${todo.category})</p>
                <div class="todo_actions">
                        <button onclick="toggleComplete(${todo.id})">${todo.completed ? 'Undo' : 'Complete'}</button>
                        <button 
                                onclick="deleteTodo(${todo.id})"
                                title="delete"
                        >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="white" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z" />
                                </svg>
                        </button>
                </div>
        `;
                todoList.appendChild(todoItem);
        });
}

// Function to toggle complete status
function toggleComplete(id) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.map(todo => {
                if (todo.id === id) {
                        todo.completed = !todo.completed;
                }
                return todo;
        });

        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
}

// Function to delete a to-do
function deleteTodo(id) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(todo => todo.id !== id);

        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
}
