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
// Get the root element where you want to render your app


// Create the input form


const createForm=()=>{
    const inputForm = document.createElement('form');
inputForm.classList.add('inputForm');

// Create input fields for todo details
 const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('placeholder', 'Title');
titleInput.classList.add('inputForm');

const descriptionInput = document.createElement('input');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('placeholder', 'Description');
descriptionInput.classList.add('inputForm');

 const dueDateInput = document.createElement('input');
dueDateInput.setAttribute('type', 'date');
dueDateInput.classList.add('inputForm');

 const addButton = document.createElement('button');
addButton.textContent = 'Add Todo';

// Append input fields and button to the form
inputForm.appendChild(titleInput);
inputForm.appendChild(descriptionInput);
inputForm.appendChild(dueDateInput);
inputForm.appendChild(addButton);

// Append the input form to the root element
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _todoStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage */ "./src/module/todoStorage.js");


function renderTodo(todo, container) {
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
        (0,_todoStorage__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(todo.id);
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

        const newTodo = (0,_todoStorage__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title, description, dueDate);

        form.reset();

        renderTodo(newTodo, todoListContainer);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupFormValidation);


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
  const newTodo = {
    title,
    description,
    dueDate,
    id: Date.now(), // You can use a library like uuid for more reliable IDs
  };
  todos.push(newTodo);
  saveTodosToLocalStorage();
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





const formContainer = document.getElementById('formContainer');
const todoListContainer = document.getElementById('todoListContainer');

const form = (0,_module_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
formContainer.appendChild(form);

(0,_module_render__WEBPACK_IMPORTED_MODULE_1__["default"])(form, todoListContainer);

// Initial load of todos
const todos = (0,_module_todoStorage__WEBPACK_IMPORTED_MODULE_2__.getTodos)();
todos.forEach(todo => {
    (0,_module_render__WEBPACK_IMPORTED_MODULE_1__["default"])(todo, todoListContainer);
});
// Pass the todoListContainer


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDMEI7O0FBRTdDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsYUFBYTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxREFBTzs7QUFFL0I7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRGOzs7Ozs7O1VDbkM1RjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDdUM7QUFDVztBQUNGO0FBQ1A7O0FBRXpDO0FBQ0E7O0FBRUEsYUFBYSx3REFBVTtBQUN2Qjs7QUFFQSwwREFBbUI7O0FBRW5CO0FBQ0EsY0FBYyw2REFBUTtBQUN0QjtBQUNBLElBQUksMERBQVU7QUFDZCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvLi9zcmMvbW9kdWxlL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFzay10cmFja2VyLy4vc3JjL21vZHVsZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdGFzay10cmFja2VyLy4vc3JjL21vZHVsZS90b2RvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFzay10cmFja2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IHRoZSByb290IGVsZW1lbnQgd2hlcmUgeW91IHdhbnQgdG8gcmVuZGVyIHlvdXIgYXBwXG5cblxuLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3JtXG5cblxuY29uc3QgY3JlYXRlRm9ybT0oKT0+e1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmlucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnB1dEZvcm0nKTtcblxuLy8gQ3JlYXRlIGlucHV0IGZpZWxkcyBmb3IgdG9kbyBkZXRhaWxzXG4gY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG5cbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG5kZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuXG4gY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuXG4gY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xuXG4vLyBBcHBlbmQgaW5wdXQgZmllbGRzIGFuZCBidXR0b24gdG8gdGhlIGZvcm1cbmlucHV0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbmlucHV0Rm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbmlucHV0Rm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuaW5wdXRGb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG5cbi8vIEFwcGVuZCB0aGUgaW5wdXQgZm9ybSB0byB0aGUgcm9vdCBlbGVtZW50XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0Rm9ybSk7XG5cbnJldHVybiBpbnB1dEZvcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XG4iLCJpbXBvcnQgeyBhZGRUb2RvLCBkZWxldGVUb2RvIH0gZnJvbSAnLi90b2RvU3RvcmFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RvKHRvZG8sIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGR1ZURhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gYER1ZTogJHt0b2RvLmR1ZURhdGV9YDtcblxuICAgIC8vIENyZWF0ZSBhIGRlbGV0ZSBidXR0b24gZm9yIGVhY2ggdG9kb1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9JdGVtKTtcbiAgICB9KTtcblxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudCk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG59XG5cbmNvbnN0IHNldHVwRm9ybVZhbGlkYXRpb24gPSAoZm9ybSwgdG9kb0xpc3RDb250YWluZXIpID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcblxuICAgICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgcmVuZGVyVG9kbyhuZXdUb2RvLCB0b2RvTGlzdENvbnRhaW5lcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cEZvcm1WYWxpZGF0aW9uO1xuIiwiXG5cbmxldCB0b2RvcyA9IFtdO1xuXG5jb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBuZXdUb2RvID0ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgaWQ6IERhdGUubm93KCksIC8vIFlvdSBjYW4gdXNlIGEgbGlicmFyeSBsaWtlIHV1aWQgZm9yIG1vcmUgcmVsaWFibGUgSURzXG4gIH07XG4gIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIHNhdmVUb2Rvc1RvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gIHRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gIHNhdmVUb2Rvc1RvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3Qgc2F2ZVRvZG9zVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbn07XG5cbmNvbnN0IGxvYWRUb2Rvc0Zyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKTtcbiAgaWYgKHN0b3JlZFRvZG9zKSB7XG4gICAgdG9kb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvZG9zKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgYWRkVG9kbywgZGVsZXRlVG9kbywgZ2V0VG9kb3MsIGxvYWRUb2Rvc0Zyb21Mb2NhbFN0b3JhZ2Usc2F2ZVRvZG9zVG9Mb2NhbFN0b3JhZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9tb2R1bGUvZm9ybSc7XG4vLyBpbXBvcnQgc2V0dXBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL21vZHVsZS9yZW5kZXInO1xuLy8gaW1wb3J0IHsgZ2V0VG9kb3MgfSBmcm9tICcuL21vZHVsZS90b2RvU3RvcmFnZSc7XG4vLyBpbXBvcnQgcmVuZGVyVG9kbyBmcm9tICcuL21vZHVsZS9yZW5kZXInOyBcblxuXG4vLyBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Db250YWluZXInKTtcbi8vIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0Q29udGFpbmVyJyk7XG5cbi8vIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCk7XG4vLyBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4vLyBzZXR1cEZvcm1WYWxpZGF0aW9uKGZvcm0sIHRvZG9MaXN0Q29udGFpbmVyKTtcblxuLy8gLy8gSW5pdGlhbCBsb2FkIG9mIHRvZG9zXG4vLyBjb25zdCB0b2RvcyA9IGdldFRvZG9zKCk7XG4vLyB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuLy8gICAgIHJlbmRlclRvZG8odG9kbywgdG9kb0xpc3RDb250YWluZXIpO1xuLy8gfSk7XG5cbi8vIGluZGV4LmpzXG4vLyBpbmRleC5qc1xuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9tb2R1bGUvZm9ybSc7XG5pbXBvcnQgc2V0dXBGb3JtVmFsaWRhdGlvbiBmcm9tICcuL21vZHVsZS9yZW5kZXInO1xuaW1wb3J0IHsgZ2V0VG9kb3MgfSBmcm9tICcuL21vZHVsZS90b2RvU3RvcmFnZSc7XG5pbXBvcnQgcmVuZGVyVG9kbyBmcm9tICcuL21vZHVsZS9yZW5kZXInO1xuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Db250YWluZXInKTtcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0Q29udGFpbmVyJyk7XG5cbmNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCk7XG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5zZXR1cEZvcm1WYWxpZGF0aW9uKGZvcm0sIHRvZG9MaXN0Q29udGFpbmVyKTtcblxuLy8gSW5pdGlhbCBsb2FkIG9mIHRvZG9zXG5jb25zdCB0b2RvcyA9IGdldFRvZG9zKCk7XG50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIHJlbmRlclRvZG8odG9kbywgdG9kb0xpc3RDb250YWluZXIpO1xufSk7XG4vLyBQYXNzIHRoZSB0b2RvTGlzdENvbnRhaW5lclxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=