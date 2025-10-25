import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SkillDetails() {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setSkill(found);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Session সফলভাবে বুক হয়েছে!");
        setFormData({ name: "", email: "" });
    };

    if (!skill) return <p>Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">{skill.name}</h2>
            <img src={skill.image} alt={skill.name} className="rounded-xl mb-4 w-full" />
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Rating:</strong> {skill.rating}</p>
            <p><strong>Price:</strong> ${skill.price}</p>
            <p className="mb-6"><strong>Description:</strong> {skill.description}</p>

            {/* বুকিং ফর্ম */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Book a Session</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input input-bordered w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input input-bordered w-full"
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Submit
                </button>
            </form>
        </div>
    );
}
