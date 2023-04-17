import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
export const authContext = createContext()
const AuthContext = ({children}) => {
    const user ={name: 'utsho'}
    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;