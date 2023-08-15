


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

export default createForm;
