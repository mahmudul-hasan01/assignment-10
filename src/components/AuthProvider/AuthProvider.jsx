import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
export const ContextData =createContext()

const AuthProvider = ({children}) => {

    const [users,setUsers]=useState(null)
    const [loading,setLoading]=useState(true)

    const register = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
      const unsubscribe =onAuthStateChanged(auth, user =>{
        setLoading(false)
         setUsers(user)
      })
      return ()=>{
        unsubscribe
      }
    },[])
    const logOut =()=>{
      setLoading(true)
      return signOut(auth)
    }
    const googleLogin =()=>{
      return signInWithPopup(auth,provider)
    }

    const userValue ={ register,login,logOut,users,loading,googleLogin }
    return (
       <ContextData.Provider value={userValue}>
         {children}
       </ContextData.Provider>
    );
};

export default AuthProvider;