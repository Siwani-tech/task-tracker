import '../dist/css/style.css';
import createForm from './module/form';
import setupFormValidation from './module/render';
import { getTodos, loadTodosFromLocalStorage } from './module/todoStorage';
import { renderTodo } from './module/renderTodo';

const formContainer = document.getElementById('formContainer');
const todoListContainer = document.getElementById('todoListContainer');

const form = createForm();
formContainer.appendChild(form);

setupFormValidation(form, todoListContainer);

// Load todos from local storage and render them
loadTodosFromLocalStorage();
const todos = getTodos();
todos.forEach(todo => {
    renderTodo(todo, todoListContainer);
});


