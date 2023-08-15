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
    id: Date.now(), // You can use a library like uuid for more reliable IDs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUMwQjs7QUFFVjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHFEQUFPOztBQUUvQjs7QUFFQSxRQUFRLHVEQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCaUI7O0FBRTdDO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxXQUFXOztBQUVwRDtBQUNBLHFEQUFxRCxpQkFBaUI7O0FBRXRFO0FBQ0EseUNBQXlDLGFBQWE7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVTtBQUNsQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEY7Ozs7Ozs7VUN4QzVGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDVztBQUN5QjtBQUMxQjs7QUFFakQ7QUFDQTs7QUFFQSxhQUFhLHdEQUFVO0FBQ3ZCOztBQUVBLDBEQUFtQjs7QUFFbkI7QUFDQSw4RUFBeUI7QUFDekIsY0FBYyw2REFBUTtBQUN0QjtBQUNBLElBQUksOERBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay10cmFja2VyLy4vc3JjL21vZHVsZS9mb3JtLmpzIiwid2VicGFjazovL3Rhc2stdHJhY2tlci8uL3NyYy9tb2R1bGUvcmVuZGVyLmpzIiwid2VicGFjazovL3Rhc2stdHJhY2tlci8uL3NyYy9tb2R1bGUvcmVuZGVyVG9kby5qcyIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvLi9zcmMvbW9kdWxlL3RvZG9TdG9yYWdlLmpzIiwid2VicGFjazovL3Rhc2stdHJhY2tlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLXRyYWNrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2stdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2stdHJhY2tlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2stdHJhY2tlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZXQgdGhlIHJvb3QgZWxlbWVudCB3aGVyZSB5b3Ugd2FudCB0byByZW5kZXIgeW91ciBhcHBcblxuXG4vLyBDcmVhdGUgdGhlIGlucHV0IGZvcm1cblxuXG5jb25zdCBjcmVhdGVGb3JtPSgpPT57XG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuXG4vLyBDcmVhdGUgaW5wdXQgZmllbGRzIGZvciB0b2RvIGRldGFpbHNcbiBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgTmV3IFRhc2snKTtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG50aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpO1xuXG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbmRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbmRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRGb3JtJyk7XG5cbiBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5kdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcbmR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dEZvcm0nKTtcblxuIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbmFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbyc7XG5cbi8vIEFwcGVuZCBpbnB1dCBmaWVsZHMgYW5kIGJ1dHRvbiB0byB0aGUgZm9ybVxuaW5wdXRGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuaW5wdXRGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuaW5wdXRGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5pbnB1dEZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuLy8gQXBwZW5kIHRoZSBpbnB1dCBmb3JtIHRvIHRoZSByb290IGVsZW1lbnRcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXRGb3JtKTtcblxucmV0dXJuIGlucHV0Rm9ybTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImltcG9ydCB7IGFkZFRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tICcuL3RvZG9TdG9yYWdlJztcblxuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gJy4vcmVuZGVyVG9kbyc7XG5cbmNvbnN0IHNldHVwRm9ybVZhbGlkYXRpb24gPSAoZm9ybSwgdG9kb0xpc3RDb250YWluZXIpID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybURhdGEuZ2V0KCdkdWVEYXRlJyk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcblxuICAgICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgICAgcmVuZGVyVG9kbyhuZXdUb2RvLCB0b2RvTGlzdENvbnRhaW5lcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cEZvcm1WYWxpZGF0aW9uO1xuIiwiaW1wb3J0IHsgYWRkVG9kbywgZGVsZXRlVG9kbyB9IGZyb20gJy4vdG9kb1N0b3JhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kbyh0b2RvLCBjb250YWluZXIpIHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dG9kby50aXRsZX1gO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kby5kdWVEYXRlfWA7XG5cbiAgICAvLyBDcmVhdGUgYSBkZWxldGUgYnV0dG9uIGZvciBlYWNoIHRvZG9cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvZG8odG9kby5pZCk7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvSXRlbSk7XG4gICAgfSk7XG5cbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUVsZW1lbnQpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xufVxuXG4iLCJcblxubGV0IHRvZG9zID0gW107XG5cbmNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdBZGRpbmcgdG9kbzonLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpXG4gIGNvbnN0IG5ld1RvZG8gPSB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpZDogRGF0ZS5ub3coKSwgLy8gWW91IGNhbiB1c2UgYSBsaWJyYXJ5IGxpa2UgdXVpZCBmb3IgbW9yZSByZWxpYWJsZSBJRHNcbiAgfTtcbiAgY29uc29sZS5sb2coJ05ldyB0b2RvIG9iamVjdDonLCBuZXdUb2RvKTtcblxuICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICBzYXZlVG9kb3NUb0xvY2FsU3RvcmFnZSgpO1xuICByZXR1cm4gbmV3VG9kbztcbn07XG5cbmNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKTtcbiAgc2F2ZVRvZG9zVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgIFxufTtcblxuY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB7XG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmNvbnN0IHNhdmVUb2Rvc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59O1xuXG5jb25zdCBsb2FkVG9kb3NGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIik7XG4gIGlmIChzdG9yZWRUb2Rvcykge1xuICAgIHRvZG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb2Rvcyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGRlbGV0ZVRvZG8sIGdldFRvZG9zLCBsb2FkVG9kb3NGcm9tTG9jYWxTdG9yYWdlLHNhdmVUb2Rvc1RvTG9jYWxTdG9yYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vbW9kdWxlL2Zvcm0nO1xuaW1wb3J0IHNldHVwRm9ybVZhbGlkYXRpb24gZnJvbSAnLi9tb2R1bGUvcmVuZGVyJztcbmltcG9ydCB7IGdldFRvZG9zLCBsb2FkVG9kb3NGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9tb2R1bGUvdG9kb1N0b3JhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyVG9kbyB9IGZyb20gJy4vbW9kdWxlL3JlbmRlclRvZG8nO1xuXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Db250YWluZXInKTtcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0Q29udGFpbmVyJyk7XG5cbmNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCk7XG5mb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5zZXR1cEZvcm1WYWxpZGF0aW9uKGZvcm0sIHRvZG9MaXN0Q29udGFpbmVyKTtcblxuLy8gTG9hZCB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHJlbmRlciB0aGVtXG5sb2FkVG9kb3NGcm9tTG9jYWxTdG9yYWdlKCk7XG5jb25zdCB0b2RvcyA9IGdldFRvZG9zKCk7XG50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgIHJlbmRlclRvZG8odG9kbywgdG9kb0xpc3RDb250YWluZXIpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9