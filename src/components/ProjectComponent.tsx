'use client';

import '@/components/styles/ProjectComponent.css';
import { Project } from '@/lib/sheetsdata';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';



interface ProjectComponentProps {
    p: Project;
    reverse: boolean;
}

export default function ProjectComponent({p, reverse}: ProjectComponentProps) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
        controls.start({ opacity: 1, x: 0 })
        } else {
        controls.start({ opacity: 0, x: reverse ? 50 : -50 })
        }
    }, [inView, controls, reverse]);
    
    return(
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`project-item flex ${
                reverse ? 'flex-row-reverse ml-auto' : 'flex-row mr-auto'
            } items-center w-full max-w-5xl px-6 py-4`}
        >
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
        </motion.div>
    )
}


