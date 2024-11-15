import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // create user
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user logout
  const Logout = () => {
    return signOut(auth);
  };

  //   Google loging
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Unsebscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //   share the auth info
  const authInfo = {
    user,
    loading,
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
  };

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;
