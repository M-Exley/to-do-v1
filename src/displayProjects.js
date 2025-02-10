
// modal for adding new project folder
export function displayProjectsSidebar () {
    
    const addNewProject = document.querySelector('.project-sidebar + button');
    addNewProject.onclick = function() {
        const modal = document.querySelector(".modal-two");
        modal.style.display = "block";
        const span = document.querySelector(".close-two");
        span.onclick = function() {
        modal.style.display = "none";
        }
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
            }
    }
    

