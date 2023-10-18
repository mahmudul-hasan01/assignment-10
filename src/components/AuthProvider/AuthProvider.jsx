import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const ContextData =createContext()

const AuthProvider = ({children}) => {

    const [usars,setUsers]=useState(null)
    const [loding,setLoding]=useState(true)

    const register = (email,password)=>{
      setLoding(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
      setLoding(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
      const unsubscribe =onAuthStateChanged(auth, usar =>{
        setLoding(false)
         setUsers(usar)
      })
      return ()=>{
        unsubscribe
      }
    },[])
    const logOut =()=>{
      setLoding(true)
      return signOut(auth)
    }

    const userValue ={ register,login,logOut,usars,loding }
    return (
       <ContextData.Provider value={userValue}>
         {children}
       </ContextData.Provider>
    );
};

export default AuthProvider;