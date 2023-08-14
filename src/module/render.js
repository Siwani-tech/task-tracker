import { addTodo, deleteTodo } from './todoStorage';

export function renderTodo(todo, container) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const titleElement = document.createElement('h3');
    titleElement.textContent = todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = todo.description;

    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due: ${todo.dueDate}`;

    // Create a delete button for each todo
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

const setupFormValidation = (form, todoListContainer) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const dueDate = formData.get('dueDate');

        const newTodo = addTodo(title, description, dueDate);

        form.reset();

        renderTodo(newTodo, todoListContainer);
    });
};

export default setupFormValidation;
