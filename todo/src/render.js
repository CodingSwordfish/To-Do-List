import { getProjects, saveProjects } from './storage.js';

const MAX_NAME_LENGTH = 20; // Maximum length for display

export const renderProjects = (projectList) => {
    const projects = getProjects();
    projectList.innerHTML = ''; // Clear existing list
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectName = document.createElement('span');
        projectName.textContent =
            project.length > MAX_NAME_LENGTH
                ? `${project.slice(0, MAX_NAME_LENGTH)}...`
                : project; // Truncate if name is too long
        projectName.title = project; // Tooltip with full name
        projectName.className = 'project-name';

        // Create container for buttons (hidden by default)
        const projectButtons = document.createElement('div');
        projectButtons.className = 'project-buttons';
        projectButtons.style.display = 'none'; // Hidden initially

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editProject(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteProject(index);
        });

        const addToDoButton = document.createElement('button');
        addToDoButton.className = 'add-todo-btn';
        addToDoButton.textContent = 'Add To-Do';

        projectButtons.appendChild(editButton); // Add edit button
        projectButtons.appendChild(deleteButton); // Add delete button
        projectButtons.appendChild(addToDoButton); // Add "Add To-Do" button

        // Toggle visibility of buttons on project name click
        projectName.addEventListener('click', () => {
            projectButtons.style.display =
                projectButtons.style.display === 'none' ? 'flex' : 'none';
        });

        projectDiv.appendChild(projectName); // Add project name
        projectDiv.appendChild(projectButtons); // Add buttons container
        projectList.appendChild(projectDiv);
    });
};

const deleteProject = (index) => {
    const projects = getProjects();
    projects.splice(index, 1); // Remove project from array
    saveProjects(projects); // Update localStorage
    const projectList = document.getElementById('projectList');
    renderProjects(projectList); // Re-render projects
};

const editProject = (index) => {
    const projects = getProjects();
    const newName = prompt('Edit project name:', projects[index]);
    if (newName) {
        projects[index] = newName; // Update project name
        saveProjects(projects); // Update localStorage
        const projectList = document.getElementById('projectList');
        renderProjects(projectList); // Re-render projects
    }
};
