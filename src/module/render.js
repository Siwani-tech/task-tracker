import { addTodo, deleteTodo } from './todoStorage';

import { renderTodo } from './renderTodo';

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
