import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

export default function Signup() {
  const { createUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", photo: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = password => {
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
    return "";
  };

  const handleSignup = async e => {
    e.preventDefault();
    const err = validatePassword(form.password);
    if (err) return setError(err);
    try {
      await createUser(form.email, form.password, form.name, form.photo);
      toast.success("Account created!");
      navigate("/");
    } catch (e) {
      toast.error("Signup failed: " + e.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch {
      toast.error("Google sign-in failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-3">
          <input type="text" placeholder="Full name" className="input input-bordered w-full" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input type="text" placeholder="Photo URL" className="input input-bordered w-full" value={form.photo} onChange={e => setForm({ ...form, photo: e.target.value })} />
          <input type="email" placeholder="Email" className="input input-bordered w-full" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full pr-12" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm" onClick={() => setShowPassword(s => !s)}>{showPassword ? "Hide" : "Show"}</button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full text-white font-semibold py-2 rounded-md" style={{ background: "linear-gradient(90deg, rgba(128,0,128,0.9), rgba(255,99,71,0.9))" }}>Register</button>
        </form>
        <div className="mt-4">
          <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>
        </div>
        <p className="text-center mt-4 text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  );
}
