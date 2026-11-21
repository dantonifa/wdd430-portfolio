interface SkillCardProps {
  skillName: string;
  proficiency: string;
}

export default function SkillCard({ skillName, proficiency }: SkillCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold text-blue-600">{skillName}</h3>
      <p className="text-gray-600">Level: {proficiency}</p>
    </div>
  );
}