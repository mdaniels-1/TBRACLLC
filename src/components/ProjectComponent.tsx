'use client';

import '@/components/styles/ProjectComponent.css';

import { Project } from '@/lib/sheetsdata';

interface ProjectComponentProps {
    p: Project; 
}

export default function ProjectComponent({p}: ProjectComponentProps) {
    return(
        <div className='project_container'>
            <div className='picture'>
                <img src={p.image_url}/>
            </div>
            <div className='details'>
                <p className='name'>{p.name}</p>
                <p className='address'>{p.address}</p>
                <p className='desc'>{p.desc}</p>
                <p className='year'>Year of Completion: {p.year}</p>
                {p.area && <p className='area'>Total Square Footage: {p.area}</p>}
                <p className='scope'>Scope of Work: {p.scope}</p>
                {p.notes && <p className='notes'>Notes: {p.notes}</p>}    
            </div>        
        </div>

    )
}


