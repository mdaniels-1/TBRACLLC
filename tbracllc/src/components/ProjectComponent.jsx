import './styles/ProjectComponent.css';
import PropTypes from 'prop-types';

// p: json object that contains the project data
const ProjectComponent = ({p}) =>{

    return(
        <div className='project_container'>
            <div className='picture'>
                <img src={`../src/data/${p.image_name}`} alt={`Image pictured is ${p.name}`}/>
            </div>
            <div className='details'>
                <p className='name'>{p.name}</p>
                <p className='address'>{p.address}</p>
                <p className='desc'>{p.desc}</p>
                <p className='year'>Year of Completion: {p.year}</p>
                {p.area != null && <p className='area'>Total Square Footage: {p.area}</p>}
                <p className='scope'>Scope of Work: {p.scope}</p>
                {p.notes != "" && <p className='notes'>Notes: {p.notes}</p>}    
            </div>        
        </div>

    )
}

// fix the prop type validation error
ProjectComponent.propTypes = {
    p: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        area: PropTypes.number,
        scope: PropTypes.string.isRequired,
        notes: PropTypes.string,
        image_name: PropTypes.string.isRequired

    })
  };



export default ProjectComponent;


