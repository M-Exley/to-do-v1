import {projectListArray} from './onLoad'

// this module needs to push the new object from FF to array
export default function newProjectArray(object) {
    projectListArray.push(object);
        
}
