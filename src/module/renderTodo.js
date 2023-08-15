import { addTodo, deleteTodo } from './todoStorage';

export function renderTodo(todo, container) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const titleElement = document.createElement('h3');
    titleElement.textContent = `Title: ${todo.title}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${todo.description}`;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due: ${todo.dueDate}`;

   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteTodo(todo.id);
        container.removeChild(todoItem);
    });

    todoItem.appendChild(titleElement);
    todoItem.appendChild(descriptionElement);
    todoItem.appendChild(dueDateElement);
    todoItem.appendChild(deleteButton);

    container.appendChild(todoItem);
}

