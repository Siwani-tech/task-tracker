

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

export { addTodo, deleteTodo, getTodos, loadTodosFromLocalStorage,saveTodosToLocalStorage };
