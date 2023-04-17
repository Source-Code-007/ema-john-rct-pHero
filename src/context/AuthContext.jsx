import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
export const authContext = createContext()
const AuthContext = ({ children }) => {

    // new user create func
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update new user info
    const updateNewUser = (displayName, currentUser) => {
        return updateProfile(currentUser, {
            displayName: displayName,
        })
    }
    // globally shared data by object
    const authObj = {
        createUser, 
        updateNewUser
    }

    return (
        <authContext.Provider value={authObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;