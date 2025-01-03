import { getProjects, saveProjects } from './storage.js';

export const renderProjects = (projectList) => {
    const projects = getProjects();
    projectList.innerHTML = ''; // Clear existing list
    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        const projectName = document.createElement('span');
        projectName.textContent = project;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteProject(index);
        });

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(deleteButton);
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
