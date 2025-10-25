// // src/Login/Login.jsx
// import { useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../component/AuthProvider/AuthProvider.jsx";

// export default function Login() {
//   const { emailLogin, googleLogin } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await emailLogin(email, password);
//       toast.success("Login successful!");
//       navigate(from, { replace: true });
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       toast.success("Logged in with Google!");
//       navigate(from, { replace: true });
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
//           Login
//         </button>
//       </form>

//       <button
//         onClick={handleGoogleLogin}
//         className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//       >
//         Login with Google
//       </button>

//       <p className="mt-3 text-sm">
//         Don't have an account?{" "}
//         <Link to="/signup" className="text-indigo-600 hover:underline">
//           Sign Up
//         </Link>
//       </p>
//     </div>
//   );
// }


// src/Login/Login.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../component/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

export default function Login() {
  const { loginUser, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // 📧 Email Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      toast.success("✅ Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("❌ Invalid email or password!");
    }
  };

  // 🌐 Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("✅ Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("❌ Google login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="text-sm text-right text-blue-500 hover:underline cursor-pointer">
            Forgot Password?
          </p>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="text-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            Continue with Google
          </button>
        </div>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

