import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase.config";


export const AuthContext=createContext(null)

const Provider = ({children}) => {
const[user,setUser]=useState(null)
const[loading,setLoading]=useState(true)


 



const createUser=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)

};

const userSingIn=(email,password)=>{
    setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
};


useEffect(()=>{
   
   const unSubscribe=onAuthStateChanged(auth,currentUser=>{
   console.log('Here is Your Current User',currentUser)
   setUser(currentUser)
   setLoading(false)
}) 
return ()=>{
    unSubscribe()
}

},[])


 const logOut=()=>{
    setLoading(true)
   return signOut(auth)
 };

 const resetEmail=(email)=>{
  return  sendPasswordResetEmail(auth,email)

 }

















    const authValues={user,createUser,userSingIn,logOut,loading,resetEmail}
    return (
       <AuthContext.Provider value={authValues}>
           {children}
       </AuthContext.Provider>
    );
};

export default Provider;