import { createContext, useContext, useState } from "react";

// 🔹 Context তৈরি
export const AuthContext = createContext(null);

// 🔹 Provider component
const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔹 Custom hook
export const useAuth = () => useContext(AuthContext);

// 🔹 Default export
export default AuthProvider;
