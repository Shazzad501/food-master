import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // create googleProvider
  const googleProvider = new GoogleAuthProvider()

  // login user with google
  const createUserWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  };

  // logout function 
  const logoutUser=()=>{
    setLoading(true);
    return signOut(auth);
  };

  
  // sign in with email password
  const loginUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // creat new user function
  const newUserSet = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

    // update user profile
    const upDateProfile=(name, photoURL)=>{
      setLoading(false);
      if(auth.currentUser){
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photoURL})
      }
      else{
        toast.error('No user is currently signed in.')
      }
    }


  // observer handler effect
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })
    return()=>{
      unSubscribe();
    }
  }, [setUser, setLoading])

  const authInfo={
    createUserWithGoogle,
    newUserSet,
    loginUser,
    logoutUser,
    upDateProfile,
    user,
    setUser,
    setLoading,
    loading
  }
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  );
};

export default AuthProvider;