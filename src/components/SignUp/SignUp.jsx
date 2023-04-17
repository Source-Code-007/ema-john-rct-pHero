import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';

const SignUp = () => {
    const {createUser, updateNewUser} = useContext(authContext)

    // submit function handle
    const handleSubmitFunc = (e)=> {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);
        createUser(email, password).then(res=> {
            console.log('user created successful');
            console.log(res.user);
            updateNewUser(name, res.user).then(()=> {
                console.log('update user profile info');
            }).catch(e => {
                console.log(e.message);
            })
        }).catch(e => {
            console.log(e.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please register!</h1>
                </div>

                <form onSubmit={handleSubmitFunc} className="card flex-shrink-0 w-3/6 shadow-2xl bg-base-100 mt-12">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;