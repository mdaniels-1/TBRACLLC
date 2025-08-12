import { Project } from "@/lib/sheetsdata";
import ProjectComponent from "@/components/ProjectComponent";

interface ProjectProps {
  projects: Project[];
}

export default function Projects({projects}: ProjectProps) {
  return (

    <div className='flex-col'>
         {projects.map((project, index) => (
            <ProjectComponent key={index} p={project} reverse={index % 2 === 1}/>
         ))}
    </div>
  )
};