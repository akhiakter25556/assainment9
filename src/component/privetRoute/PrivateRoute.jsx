
// import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

// export default function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();

//   if (loading) return <p className="text-center mt-10">Loading...</p>;

//   return user ? children : <Navigate to="/login" />;
// }

// import { useAuth } from "../component/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading...</p>;

  // যদি ইউজার লগইন না করে থাকে
  if (!user) {
    // login পেজে পাঠিয়ে দেবে
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ইউজার থাকলে মূল কন্টেন্ট দেখাবে
  return children;
}


