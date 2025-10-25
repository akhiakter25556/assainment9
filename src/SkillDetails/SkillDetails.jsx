import { useParams } from "react-router-dom";
// import skillsData from "../data/skills.json";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function SkillDetails() {
  const { id } = useParams();
  const skill = skillsData.find((s) => s.id === parseInt(id));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setName("");
    setEmail("");
  };

  if (!skill) return <p>Skill not found!</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold">{skill.skillName}</h2>
      <p>{skill.description}</p>
      <p>Provider: {skill.providerName}</p>
      <p>Email: {skill.providerEmail}</p>
      <p>Price: ${skill.price}</p>
      <p>Rating: {skill.rating} ⭐</p>
      <p>Slots Available: {skill.slotsAvailable}</p>

      <form onSubmit={handleBook} className="mt-6 flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Book Session
        </button>
      </form>
    </div>
  );
}
