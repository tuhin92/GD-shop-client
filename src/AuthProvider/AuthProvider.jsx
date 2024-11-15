import { createContext, useState } from "react";
import { app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = () => {
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





  

//   share the auth info 
  const authInfo = {
    CreateUser,
    Login,
    Logout,
    GoogleLogin,
  };

  return <div></div>;
};

export default AuthProvider;
