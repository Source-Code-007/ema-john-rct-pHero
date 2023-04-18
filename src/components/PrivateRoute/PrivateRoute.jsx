import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
// import { useNavigate } from "react-router-dom";
import Signin from '../Signin/Signin';

const PrivateRoute = ({children}) => {
    // const navigate = useNavigate()
    const {user} = useContext(authContext)

        if(user){
            return children
        }
        return <Signin></Signin> 

};

export default PrivateRoute;