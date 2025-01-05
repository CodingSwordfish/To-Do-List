import { saveToDos,getToDos } from './storage.js'; // Import the saveToDos function
import { ToDo } from './todoClass.js';

export const renderToDoForm = (contentDiv,folderName) => {
    // Check if a form already exists in the content div
    if (contentDiv.querySelector('.todo-form')) {
        return; // Do nothing if a form is already displayed
    }

    // Create a form element
    const form = document.createElement('form');
    form.className = 'todo-form';

    // Title Input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.required = true;

    // Description Input
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = 'description';
    descriptionInput.rows = 4;
    descriptionInput.required = true;

    // Due Date Input
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateInput.required = true;

    // Priority Input
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    ['High', 'Medium', 'Low'].forEach(priority => {
        const option = document.createElement('option');
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add To-Do';

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button'; // Prevent form submission
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        contentDiv.removeChild(form); // Remove the form from the contentDiv
    });

    // Append all form controls to the form
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const newToDo = new ToDo(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            prioritySelect.value,
            folderName
        );

        // Retrieve existing to-dos, add the new one, and save them to localStorage
        const toDos = getToDos();
        toDos.push(newToDo);
        saveToDos(toDos);

          // Remove the form from the contentDiv
          contentDiv.removeChild(form);

          // You may want to call a function to re-render the to-do list here
      });

    // Append the form to the content div
    contentDiv.appendChild(form);
};
