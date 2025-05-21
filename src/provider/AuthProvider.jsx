import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // console.log(user);

  // create User set up by firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  signIn User
  const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

//   Update user >> user's basic profile information get

const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser, updateData)
}

  //   signOut User
  const signOutUser = () => {
    return signOut(auth);
  };

  //   User login check
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser, 
    signInUser,
    updateUser,
    signOutUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
