import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../component/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const Navigate = useNavigate();

  // যদি Login থেকে email পাঠানো থাকে, নেবে
  const prefilled = location.state?.email || "";
  const [email, setEmail] = useState(prefilled);

  useEffect(() => {
    if (prefilled) setEmail(prefilled);
  }, [prefilled]);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Reset ইমেইল পাঠানো হয়েছে। Gmail খুলুন এবং চেক করুন।");
      // Gmail খোলার জন্য নতুন ট্যাব
      window.open("https://mail.google.com", "_blank");
      // বা ইউজারকে হোমে পাঠাতে চাওঃ
      // navigate("/");
    } catch (err) {
      toast.error("Reset পাঠানো যায়নি: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
}
