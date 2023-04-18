import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
export const authContext = createContext()

const AuthContext = ({ children }) => {
    let [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // new user create func
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin function
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signout function
    const signOutUser = ()=> {
        return signOut(auth)
    } 

    // hold/store signin user
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    // update new user info
    const updateNewUser = (displayName, currentUser) => {
        return updateProfile(currentUser, {
            displayName: displayName,
        })
    }

    // globally shared data by object
    const authObj = {
        signUpUser,
        signInUser,
        signOutUser,
        updateNewUser,
        user, 
        setUser,
        loading
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;