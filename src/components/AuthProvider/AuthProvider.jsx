import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const ContextData =createContext()

const AuthProvider = ({children}) => {

    // const [usars,setUsers]=useState(null)
    const [loding,setLoding]=useState(true)

    const register = (email,password)=>{
      setLoding(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    

    const userValue ={ register }
    return (
       <ContextData.Provider value={userValue}>
         {children}
       </ContextData.Provider>
    );
};

export default AuthProvider;