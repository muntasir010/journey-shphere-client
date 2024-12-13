import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config.init";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUser
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUser
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updateUserProfile
    const updateUserProfile = (name, image)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image,
        })
    }

    // logOut
    const logOut = () =>{
        signOut(auth)
        setUser(null)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                setLoading(false)
            }
        })
        return() => unsubscribe();
    }, [])
    const authInfo ={
        user,
        loading,
        createUser, 
        signInUser,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;