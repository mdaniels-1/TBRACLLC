import { createElement } from 'react';
import ProjectComponent from './ProjectComponent';
import './styles/DisplayProjectsComponent.css';
// import { json } from 'react-router-dom';
import PropTypes from 'prop-types';




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

DisplayProjectsComponent.propTypes = {
    // json: PropTypes.shape({
    //     name: PropTypes.string.isRequired,
    //     address: PropTypes.string.isRequired,
    //     desc: PropTypes.string.isRequired,
    //     cost: PropTypes.string.isRequired,
    //     year: PropTypes.string.isRequired,
    //     area: PropTypes.number,
    //     scope: PropTypes.string.isRequired,
    //     notes: PropTypes.string,
    //     image_name: PropTypes.string.isRequired

    // }),
    json: PropTypes.objectOf(PropTypes.object),
    numProjects: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };



export default DisplayProjectsComponent;