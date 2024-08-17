import { createElement } from 'react';
import ProjectComponent from './ProjectComponent';
import './styles/DisplayProjectsComponent.css';



// Takes a json object and a container. 
// Appends a project component using the json and adds it to the container
const DisplayProjectsComponent = ({json, numProjects}) =>{

    const keys = Object.keys(json);

    
    //ensure it's in bounds. if projects size > actual projects, set size to total num of projects
    if(typeof(numProjects) != 'number'){ //if it's not a num value --> include all
        numProjects = keys.length;
    }else if(numProjects > keys.length){ 
        numProjects = keys.length;
    } 
    
    const projects = []; // array to hold loaded projects

    for(let i = 0; i < numProjects; i++){
        const d = json[keys[i]]; // data]
        projects[i] = <ProjectComponent p={d} />; // create component
    }

    const container = createElement(
        'div', 
        {
            className: 'miniProjectDisplayContainer'
        },
        projects
    );

    return container;

}


export default DisplayProjectsComponent;