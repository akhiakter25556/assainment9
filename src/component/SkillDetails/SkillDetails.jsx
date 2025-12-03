import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SkillDetails() {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        fetch("/skills.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id == id);
                console.log(found);
                
                setSkill(found);
                setLoading(false);
            })
            .catch(() => {
                toast.error("❌ Failed to load skill data!");
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Session সফলভাবে বুক হয়েছে!");
        setFormData({ name: "", email: "" });
    };

    if (loading)
        return <p className="text-center py-10 text-lg">Loading...</p>;

    if (!skill)
        return (
            <p className="text-center py-10 text-lg text-red-500">
                ❌ Skill not found!
            </p>
        );

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">{skill.skillName}</h2>

            <img
                src={skill.image}
                alt={skill.skillName}
                className="rounded-xl mb-4 w-full"
            />

            <p><strong>Rating:</strong> {skill.rating}</p>
            <p><strong>Price:</strong> ${skill.price}</p>

            {/* Book Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <h3 className="text-xl font-semibold mb-2">Book a Session</h3>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="input input-bordered w-full"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
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
