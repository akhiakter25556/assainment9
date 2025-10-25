import { auth } from "../../firebase"; 


import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile as firebaseUpdateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
// import { auth } from "../../firebase"; // তোমার firebase config

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Signup (create user + update profile)
  const createUser = async (name, photoURL, email, password) => {
return createUserWithEmailAndPassword(auth, email, password);
 
  };

  // Email login
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Google login
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logoutUser = () => signOut(auth);

  // Update profile (name, photo)
  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) throw new Error("No user");
    await firebaseUpdateProfile(auth.currentUser, profile);
    // optionally update local user state
    setUser({ ...auth.currentUser, ...profile });
  };

  // Reset password (sends email)
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      console.log(u);
      
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
