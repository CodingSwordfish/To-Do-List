import { getProjects, saveProjects } from './storage.js';
import { renderProjects } from './render.js';
import "./styles.css"

document.addEventListener('DOMContentLoaded', () => {
    const projectAddButton = document.querySelector('.projectAdd');
    const projectList = document.getElementById('projectList');

    const addProject = () => {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const projects = getProjects();
            projects.push(projectName);
            saveProjects(projects);
            renderProjects(projectList);
        }
    };

    projectAddButton.addEventListener('click', addProject);
    renderProjects(projectList);
});
