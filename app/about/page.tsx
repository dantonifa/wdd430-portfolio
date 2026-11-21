import SkillCard from "@/components/SkillCard";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        I am a full-stack developer building modern web applications.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard skillName="Next.js & React" proficiency="Advanced" />
        <SkillCard skillName="TypeScript" proficiency="Intermediate" />
      </div>
    </main>
  );
}