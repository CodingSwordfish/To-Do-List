import { getProjects, saveProjects } from './storage.js';
import { renderToDoForm } from './form.js';

const MAX_NAME_LENGTH = 20; // Maximum display length for project names

export const renderProjects = (projectList) => {
    const projects = getProjects();
    projectList.innerHTML = ''; // Clear existing projects

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectName = document.createElement('span');
        projectName.textContent =
            project.length > MAX_NAME_LENGTH
                ? `${project.slice(0, MAX_NAME_LENGTH)}...`
                : project;
        projectName.title = project; // Tooltip for full project name
        projectName.className = 'project-name';

        // Create buttons container
        const projectButtons = document.createElement('div');
        projectButtons.className = 'project-buttons';
        projectButtons.style.display = 'none';

        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editProject(index));

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteProject(index));

        const addToDoButton = document.createElement('button');
        addToDoButton.className = 'add-todo-btn';
        addToDoButton.textContent = 'Add To-Do';
        //add event listener to create form here if there is no form in the content div
        addToDoButton.addEventListener('click', () => {
            const contentDiv = document.querySelector('.content');
            renderToDoForm(contentDiv);
        });

        projectButtons.appendChild(editButton);
        projectButtons.appendChild(deleteButton);
        projectButtons.appendChild(addToDoButton);

        projectDiv.addEventListener('click', () => {
            projectButtons.style.display =
                projectButtons.style.display === 'none' ? 'flex' : 'none';

                // import the function to display the saved cards here
        });

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectButtons);
        projectList.appendChild(projectDiv);
    });
};

const deleteProject = (index) => {
    const projects = getProjects();
    projects.splice(index, 1);
    saveProjects(projects);
    renderProjects(document.getElementById('projectList'));
};

const editProject = (index) => {
    const projects = getProjects();
    const newName = prompt('Edit project name:', projects[index]);
    if (newName) {
        projects[index] = newName;
        saveProjects(projects);
        renderProjects(document.getElementById('projectList'));
    }
};
