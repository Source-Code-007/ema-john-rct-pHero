import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
// import { useNavigate } from "react-router-dom";
import Signin from '../Signin/Signin';

const PrivateRoute = ({children}) => {
    // const navigate = useNavigate()
    const { loading } = useContext(authContext)
    const {user} = useContext(authContext)
        if(loading){
            return <div className='h-screen flex justify-center items-center'>
                <div className='h-20 w-20 rounded-full border-l-4 border-lime-500 animate-spin'></div>
            </div>
        }

        if(user){
            return children
        }

        return <Signin></Signin> 

};

export default PrivateRoute;