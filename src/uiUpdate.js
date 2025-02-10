const displayCurrentProject = document.querySelector('.project-text');
const displayCurrentTitle = document.querySelector('.title');
const displayCurrentDescription = document.querySelector('.description');
const displayCurrentDate = document.querySelector('.date');
const displayCurrentPriority = document.querySelector('.priority');

export function displayCurrentProjectFunction(project, title, description, date, priority) {
    displayCurrentProject.textContent = `Project: ${project}`
    displayCurrentTitle.textContent = `Title: ${title}`
    displayCurrentDescription.textContent = `Description: ${description}`
    displayCurrentDate.textContent = `Date Due: ${date}`
    displayCurrentPriority.textContent = `Importance: ${priority}`
} 