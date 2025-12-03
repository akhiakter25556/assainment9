import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import skillsData from "../data/skills.json";

export default function SkillDetails() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
console.log(skillsData);

  useEffect(() => {
    const found = skillsData.find(item => item.id === parseInt(id));
    console.log(found);
    
    if (found) setSkill(found);
    else toast.error("❌ Skill not found!");
  }, [id]);

  if (!skill) return <p className="text-center py-10 text-lg">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold mb-4">{skill.skillName}</h2>

      <img
        src={skill.image}
        alt={skill.skillName}
        className="rounded-xl mb-4 w-full"
      />

      <p><strong>Category:</strong> {skill.category}</p>
      <p><strong>Rating:</strong> {skill.rating}</p>
      <p><strong>Price:</strong> ${skill.price}</p>
      <p className="mb-6"><strong>Description:</strong> {skill.description}</p>
    </div>
  );
}
