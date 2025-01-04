import { getProjects, saveProjects } from './storage.js';
import { renderProjects } from './render.js';
import './styles.css';

window.onload = () => {
   

    // Dynamically render the HTML structure into the body
    const content = `
        <header>
            <h1>To-Do App</h1>
        </header>
        <main>
            <aside>
                <button class="projectAdd">Add Project Folder</button>
                <h2 class="myProjects">My Projects</h2>
                <div id="projectList"></div>
            </aside>
            <div class="content">
                <h2>Main Content</h2>
            </div>
        </main>
    `;

    // Inject the dynamically generated HTML into the body
    document.body.innerHTML = content;

    // Initialize event listeners and render existing projects
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
};


