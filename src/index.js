// import createForm from './module/form';
// import setupFormValidation from './module/render';
// import { getTodos } from './module/todoStorage';
// import renderTodo from './module/render'; 


// const formContainer = document.getElementById('formContainer');
// const todoListContainer = document.getElementById('todoListContainer');

// const form = createForm();
// formContainer.appendChild(form);

// setupFormValidation(form, todoListContainer);

// // Initial load of todos
// const todos = getTodos();
// todos.forEach(todo => {
//     renderTodo(todo, todoListContainer);
// });

// index.js
// index.js
import createForm from './module/form';
import setupFormValidation from './module/render';
import { getTodos } from './module/todoStorage';
import renderTodo from './module/render';

const formContainer = document.getElementById('formContainer');
const todoListContainer = document.getElementById('todoListContainer');

const form = createForm();
formContainer.appendChild(form);

setupFormValidation(form, todoListContainer);

// Initial load of todos
const todos = getTodos();
todos.forEach(todo => {
    renderTodo(todo, todoListContainer);
});
// Pass the todoListContainer

