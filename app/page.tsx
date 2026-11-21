import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'ism-records-api',
    description: 'A full-stack Next.js app for managing school records.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/dantonifa/ism-records-api'
  },
  {
  title: 'gems_and_rocks',
  description: 'A Python terminal/arcade game where players collect falling gems to gain points while avoiding falling rocks.',
  technologies: ['Python'],
  link: 'https://github.com/dantonifa/gems_and_rocks'
}
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}