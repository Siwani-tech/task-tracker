/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/form.js":
/*!****************************!*\
  !*** ./src/module/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



const createForm=()=>{
    const inputForm = document.createElement('form');
inputForm.classList.add('inputForm');

// Create input fields for todo details
 const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('placeholder', 'Add New Task');
titleInput.setAttribute('name', 'title');
titleInput.classList.add('inputForm');

const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('placeholder', 'Description');
descriptionInput.setAttribute('name', 'description');
descriptionInput.classList.add('inputForm');

 const dueDateInput = document.createElement('input');
dueDateInput.setAttribute('type', 'date');
dueDateInput.setAttribute('name', 'dueDate');
dueDateInput.classList.add('inputForm');

 const addButton = document.createElement('button');
 addButton.classList.add('add');
addButton.textContent = 'Add Todo';


inputForm.appendChild(titleInput);
inputForm.appendChild(descriptionInput);
inputForm.appendChild(dueDateInput);
inputForm.appendChild(addButton);


document.body.appendChild(inputForm);

return inputForm;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);


/***/ }),

/***/ "./src/module/render.js":
/*!******************************!*\
  !*** ./src/module/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage */ "./src/module/todoStorage.js");
/* harmony import */ var _renderTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodo */ "./src/module/renderTodo.js");




const setupFormValidation = (form, todoListContainer) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const title = formData.get('title');
        const description = formData.get('description');
        const dueDate = formData.get('dueDate');

        const newTodo = (0,_todoStorage__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, description, dueDate);

        form.reset();

        (0,_renderTodo__WEBPACK_IMPORTED_MODULE_1__.renderTodo)(newTodo, todoListContainer);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupFormValidation);


/***/ }),

/***/ "./src/module/renderTodo.js":
/*!**********************************!*\
  !*** ./src/module/renderTodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _todoStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage */ "./src/module/todoStorage.js");


function renderTodo(todo, container) {
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
        (0,_todoStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(todo.id);
        container.removeChild(todoItem);
    });

    todoItem.appendChild(titleElement);
    todoItem.appendChild(descriptionElement);
    todoItem.appendChild(dueDateElement);
    todoItem.appendChild(deleteButton);

    container.appendChild(todoItem);
}



/***/ }),

/***/ "./src/module/todoStorage.js":
/*!***********************************!*\
  !*** ./src/module/todoStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   loadTodosFromLocalStorage: () => (/* binding */ loadTodosFromLocalStorage),
/* harmony export */   saveTodosToLocalStorage: () => (/* binding */ saveTodosToLocalStorage)
/* harmony export */ });


let todos = [];

const addTodo = (title, description, dueDate) => {
  console.log('Adding todo:', title, description, dueDate)
  const newTodo = {
    title,
    description,
    dueDate,
    id: Date.now(), 
  };
  console.log('New todo object:', newTodo);

  todos.push(newTodo);
  saveTodosToLocalStorage();
  return newTodo;
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodosToLocalStorage();
   
};

const getTodos = () => {
  return todos;
};

const saveTodosToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/form */ "./src/module/form.js");
/* harmony import */ var _module_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/render */ "./src/module/render.js");
/* harmony import */ var _module_todoStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/todoStorage */ "./src/module/todoStorage.js");
/* harmony import */ var _module_renderTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/renderTodo */ "./src/module/renderTodo.js");





const formContainer = document.getElementById('formContainer');
const todoListContainer = document.getElementById('todoListContainer');

const form = (0,_module_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
formContainer.appendChild(form);

(0,_module_render__WEBPACK_IMPORTED_MODULE_1__["default"])(form, todoListContainer);

// Load todos from local storage and render them
(0,_module_todoStorage__WEBPACK_IMPORTED_MODULE_2__.loadTodosFromLocalStorage)();
const todos = (0,_module_todoStorage__WEBPACK_IMPORTED_MODULE_2__.getTodos)();
todos.forEach(todo => {
    (0,_module_renderTodo__WEBPACK_IMPORTED_MODULE_3__.renderTodo)(todo, todoListContainer);
});



})();

/******/ })()
;
//# sourceMappingURL=main.js.map