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
        }

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
                <button onclick="deleteTodo(${todo.id})">Delete</button>
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
