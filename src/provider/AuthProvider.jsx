import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

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

   const googleLogIn =()=>{
        setLoading(true)
       return signInWithPopup(auth, provider )

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
    googleLogIn,
    updateUser,
    signOutUser,
    

  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
