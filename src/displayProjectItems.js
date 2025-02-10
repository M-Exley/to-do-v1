import { projectListArray } from "./onLoad";
import { displayCurrentProjectFunction } from "./uiUpdate";
import capitaliseFirstLetter from "./capitalise";
import {format} from 'date-fns'
// display the clicked project array's objects
// //loop through array

export default function displayCurrentProjectItems(div) {
    const sidebar = document.querySelector('.display-projects');
    const currentTop = document.querySelector('.display-current');
    const currentProjectListDiv = document.querySelector('.current-details-div');
    
    sidebar.addEventListener('click', function(e){
        currentProjectListDiv.innerHTML = '';
        const target = e.target.textContent.toLowerCase();
        let projectFilter = projectListArray.filter((x) => x.project === target)
        // console.log(projectFilter) // this is working as expected
        // ------------------
        
        // now add loop to go through array
        for (let index in projectFilter){
            // console.log(projectFilter[project])
            const loopValue = projectFilter[index];
            console.log(loopValue)
                        
            const newContentDiv = document.createElement('div')
            newContentDiv.classList.add('current-details-div')
            currentProjectListDiv.appendChild(newContentDiv)
            const {project, title, description, date, priority} = loopValue;
            displayCurrentProjectFunction(project, title, description, date, priority);

            newContentDiv.innerHTML = `
            Project: ${capitaliseFirstLetter(project)}<br>
            Title: ${capitaliseFirstLetter(title)}<br>
            Description: ${description}<br>
            Date Due: ${format(new Date(date), 'PPP')} <br>
            Importance: ${priority}<br>
            `;
            currentTop.textContent = ` You are in: "${capitaliseFirstLetter(project)}" folder`
        }
  
        
        
    })
}
