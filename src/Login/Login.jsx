import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { loginUser, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("✅ Logged in successfully!");
      navigate(from, { replace: true });
    } catch {
      toast.error("❌ Invalid email or password!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("✅ Logged in with Google!");
      navigate(from, { replace: true });
    } catch {
      toast.error("❌ Google login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" className="input input-bordered w-full" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" className="input input-bordered w-full" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" className="w-full text-white font-semibold py-2 rounded-md" style={{ background: "linear-gradient(90deg, rgba(128,0,128,0.9), rgba(255,99,71,0.9))" }}>Login</button>
        </form>
        <div className="text-center mt-4">
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Continue with Google</button>
        </div>
        <p className="text-sm text-center mt-4">Don’t have an account? <Link to="/register" className="text-blue-500 font-medium hover:underline">Sign up</Link></p>
      </div>
    </div>
  );
}
