/*Example ProjectList Component Notes
The ProjectListProps interface defines the expected structure of the projects array.
The component uses the JavaScript map() method to iterate over the projects array and render a ProjectCard for each project.
The spread operator ({...project}) is used to pass all project properties as props to the ProjectCard.
A unique key is provided for each rendered component using the index of the map iteration. In a real application, you would want to use a more stable identifier (like a project ID) if available.
Tailwind CSS classes are applied to create a responsive grid layout for the project cards.*/ 
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}