import React, { useState, useEffect } from "react";
// import { useAuth } from "./component/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { user, updateUserProfile, loading } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", photoURL: "" });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user]);

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (!user) return <p>লগইন করা নেই।</p>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({
        displayName: form.name,
        photoURL: form.photoURL,
      });
      toast.success("প্রোফাইল আপডেট সফল!");
      setEditing(false);
    } catch (err) {
      toast.error("আপডেট ব্যর্থ: " + err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">My Profile</h2>

      <div className="flex items-center gap-4">
        <img
          src={user.photoURL || "https://via.placeholder.com/120"}
          alt="user"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div>
          <p><strong>Name:</strong> {user.displayName || "No name"}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="btn btn-outline"
          onClick={() => setEditing((s) => !s)}
        >
          {editing ? "Cancel" : "Update Profile"}
        </button>
      </div>

      {editing && (
        <form onSubmit={handleUpdate} className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.photoURL}
            onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
          />
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </form>
      )}
    </div>
  );
}
