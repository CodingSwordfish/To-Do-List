export const getProjects = () => JSON.parse(localStorage.getItem('projects')) || [];

export const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

