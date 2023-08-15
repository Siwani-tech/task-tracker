

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

export { addTodo, deleteTodo, getTodos, loadTodosFromLocalStorage,saveTodosToLocalStorage };
