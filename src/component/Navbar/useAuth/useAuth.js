// src/component/Navbar/useAuth/useAuth.js
// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider.jsx"; // path main.jsx থেকে adjust
// import { AuthContext } from "/src/component/Navbar/useAuth/useAuth.js";

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
