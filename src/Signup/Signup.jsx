// import { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";

// import { toast } from "react-hot-toast";
// // import { AuthContext } from "../component/Navbar/useAuth/useAuth";


// import { AuthContext } from "../component/AuthProvider/AuthProvider.jsx";



// export default function Signup() {
// const { login } = useContext(AuthContext); // ✅ ঠিক

//   const [name, setName] = useState("");
//   const [email,  AuthContext, setEmail] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [password, setPassword] = useState("");
//   const { signup, updateUserProfile, googleLogin } = use(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!/[A-Z]/.test(password)) return toast.error("Password must have uppercase letter");
//     if (!/[a-z]/.test(password)) return toast.error("Password must have lowercase letter");
//     if (password.length < 6) return toast.error("Password must be at least 6 chars");
//     try {
//       await signup(email, password);
//       await updateUserProfile(name, photoURL);
//       toast.success("Signup successful!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       navigate("/");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border p-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Photo URL"
//           value={photoURL}
//           onChange={(e) => setPhotoURL(e.target.value)}
//           className="border p-2 rounded"
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
//           Register
//         </button>
//       </form>
//       <button
//         onClick={handleGoogleLogin}
//         className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//       >
//         Signup with Google
//       </button>
//       <p className="mt-3 text-sm">
//         Already have an account?{" "}
//         <Link to="/login" className="text-indigo-600 hover:underline">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// }

// // src/Signup/Signup.jsx
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../component/AuthProvider/AuthProvider";
// import { toast } from "react-toastify";

// export default function Signup() {
//   const { createUser, googleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     photo: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   // 🔐 Password Validation Function
//   const validatePassword = (password) => {
//     if (password.length < 6) return "Password must be at least 6 characters.";
//     if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
//     if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
//     return "";
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const { name, photo, email, password } = formData;

//     const validationError = validatePassword(password);
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       await createUser(name, photo, email, password);
//       toast.success("✅ Account created successfully!");
//       navigate("/");
//     } catch (err) {
//       toast.error("❌ Signup failed! Try again.");
//     }
//   };

//   // 🌐 Google Signup/Login
//   const handleGoogleLogin = async () => {
//     try {
//       await googleLogin();
//       toast.success("✅ Signed in with Google!");
//       navigate("/");
//     } catch (error) {
//       toast.error("❌ Google login failed!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         <form onSubmit={handleSignup} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="input input-bordered w-full"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Photo URL"
//             className="input input-bordered w-full"
//             value={formData.photo}
//             onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input input-bordered w-full"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input input-bordered w-full"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button type="submit" className="btn btn-primary w-full">
//             Register
//           </button>
//         </form>

//         {/* Google Login */}
//         <div className="text-center mt-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="btn btn-outline w-full"
//           >
//             Continue with Google
//           </button>
//         </div>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-500 font-medium hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../component/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

export default function Signup() {
  const { createUser, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", photo: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
    if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const err = validatePassword(form.password);
    if (err) {
      setError(err);
      return;
    }
    try {
      await createUser(form.name, form.photo, form.email, form.password);
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
    } catch (err) {
      toast.error("Google sign-in failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-3">
          <input
            type="text"
            placeholder="Full name"
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            value={form.photo}
            onChange={(e) => setForm({ ...form, photo: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full pr-12"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>

        <div className="mt-4">
          <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>
        </div>

        <p className="text-center mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}
