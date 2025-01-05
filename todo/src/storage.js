export const getProjects = () => JSON.parse(localStorage.getItem('projects')) || [];

export const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

// storage.js

// Retrieve the existing to-dos from localStorage or return an empty array
export const getToDos = () => JSON.parse(localStorage.getItem('todos')) || [];

// Save to-dos to localStorage
export const saveToDos = (toDos) => {
    localStorage.setItem('todos', JSON.stringify(toDos));
};




