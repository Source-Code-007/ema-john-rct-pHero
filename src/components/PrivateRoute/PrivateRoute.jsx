import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()

        if(loading){
            return <div className='h-screen flex justify-center items-center'>
                <div className='h-20 w-20 rounded-full border-l-4 border-lime-500 animate-spin'></div>
            </div>
        }

        if(!user){
            return <Navigate to={'/signin'} state={{from: location}} replace></Navigate>
        }
        
        return children

};

export default PrivateRoute;