import React, { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const {signInUser, setUser} = useContext(authContext)

    const navigate = useNavigate()
    const location = useLocation() 

    // sign in handle function
    const handleSubmitFunc = (e)=> {
        setSuccess('')
        setError('')
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password).then(res=> {
            setSuccess('signin successfully')
            const user = res.user
            console.log('signin successful', user);
            setUser(user)
            navigate( location.state?.from?.pathname || '/')
        }).catch(e => {
            setError(e.message)
            console.log(e.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleSubmitFunc} className="card flex-shrink-0 w-3/6 shadow-2xl bg-base-100 mt-12">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {success && <h2 className='text-green-500'>{success}</h2>}
                            {error && <h2 className='text-red-500'>{error}</h2>}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;