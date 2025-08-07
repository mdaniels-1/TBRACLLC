import { Project } from "@/lib/sheetsdata";
import ProjectComponent from "@/components/ProjectComponent";

interface ProjectProps {
  projects: Project[];
}

export default function Projects({projects}: ProjectProps) {
  return (

    <div className='projects_overview_home'>
         <h2>Projects</h2>
         {projects.map((project, index) => (
          <ProjectComponent key={project.name} p={project}/>
         ))}

      </div>
  )
};