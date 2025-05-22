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
  const [loading, setLoading] = useState(true)

  // console.log(user);

  // create User set up by firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  signIn User
  const signInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

//   Update user >> user's basic profile information get

const updateUser = (updateData)=>{
  // setLoading(true);
    return updateProfile(auth.currentUser, updateData)
}

  //   signOut User
  const signOutUser = () => {
    // setLoading(true);
    return signOut(auth);
  };

  //   User login check
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };

  }, []);

  const authData = {
    user,
    loading,
    setUser,
    createUser, 
    signInUser,
    updateUser,
    signOutUser,
    

  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
