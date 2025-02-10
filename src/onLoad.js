import json from "./dom";
import { displayCurrentProjectFunction } from "./uiUpdate";
let string;
export const projectListArray = [];


export default function onLoad() {
//     //this is going to display a default project/object
//     // import dom stuff from separate file
    // console.log(projectListArray)
    const displayCurrent = document.querySelector('.display-current');
    const newDiv = document.createElement('div');
    displayCurrent.appendChild(newDiv);
    // to display json file onLoad
    for (const [key, value] of Object.entries(json)) {
        const resultKey = key;
        const resultValue = value;
        // console.log(resultKey, resultValue)
        const {project, title, description, date} = value;
        string = `${key}: ${project}, ${title}, ${description}, ${date}`
        displayCurrentProjectFunction(key, project, title, description, date)
        projectListArray.push(value)

      }
   
    }


export {string}





