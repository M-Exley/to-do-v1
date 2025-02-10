import "./styles.css";

import onload  from "./onLoad";
import { addNewProjectFolderModal } from "./newProjectFolder";
import { displayProjectsSidebar } from "./displayProjects";
import SubmitNewTask from './newTask'
import newProjectFolderName  from "./newProjectFolder";
import displayCurrentProjectItems from "./displayProjectItems";

onload();
addNewProjectFolderModal();
displayProjectsSidebar();
SubmitNewTask();
newProjectFolderName();
displayCurrentProjectItems();


