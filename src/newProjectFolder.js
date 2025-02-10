import capitaliseFirstLetter from "./capitalise";
import clearField from "./clear";

const addNewProjectButton = document.querySelector('.add-new > button');
const displayProjectsList = document.querySelector('.project-sidebar');

export function addNewProjectFolderModal() {
  
  var modal = document.querySelector(".modal");
  addNewProjectButton.onclick = function() {
  modal.style.display = "block";
    // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
 // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
}
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    }

   
  }

export default function newProjectFolderName() {

    const formSubmitProject = document.getElementById('form-project');
    formSubmitProject.addEventListener('submit', function(e) {
      e.preventDefault();
      const projectNameVal = document.getElementById('projectname').value
      const projectName = document.getElementById('projectname');

      const sidebarNew = document.createElement('div');
      const capitalised = capitaliseFirstLetter(projectNameVal);
      sidebarNew.classList.add('sidebar-new');
      sidebarNew.textContent = capitalised;
      displayProjectsList.appendChild(sidebarNew)
      const projectNameArray = capitalised;

      // move to module
      const selectOption = document.getElementById('project');
      const option = document.createElement('option')
      option.value = capitalised.toLowerCase();;
      option.text = capitalised;
      selectOption.add(option, selectOption.options[0])

      clearField(projectName)
      return projectNameArray;
    })
}
