import newProjectArray from './newProjectArray'
import { projectListArray } from "./onLoad";
  // for main modal form submission
  export default function SubmitNewTask() {

    const formSubmit = document.getElementById('form');
    formSubmit.addEventListener('submit', function(e) {
      e.preventDefault();
      const project = document.getElementById('project').value
      const title = document.getElementById('titlename').value
      const description = document.getElementById('descriptiontext').value
      const date = document.getElementById('date').value
      const priority = document.getElementById('priority').value
      const newForm = {project, title, description, date, priority};
      newProjectArray(newForm)
      console.log(projectListArray)
      return newForm;
        
      }

    )
  }
  