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

export default createForm;
