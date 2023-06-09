import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';

const Nav = () => {
    const { user, setUser, signOutUser} = useContext(authContext)
    const signOutFunc = ()=>{
        signOutUser().then(()=>{
            console.log('signout successfully');
            setUser(null)
        }).catch(e => {
            console.log('signout failed', e.message);
        })
    }
    return (
        <div className="navbar bg-slate-800 text-slate-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <ul className='block md:flex text-center font-bold text-xl'>
                    <li><NavLink to="/" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>Products</NavLink></li>
                    <li><NavLink to="/order" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>Order</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>Services</NavLink></li>
                    <li><NavLink to="/signin" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>Signin</NavLink></li>
                    <li><NavLink to="/signup" className={({ isActive }) => `px-4 py-3 text-slate-50 ${isActive ? 'border-b-2 border-red-500' : ''}`}>SignUp</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end hidden md:flex gap-5">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                {
                    user && <>
                        <div className='text-slate-50 shadow shadow-slate-50 px-4 py-2 rounded-lg uppercase font-bold'>{user.displayName}</div>
                        <button className='text-slate-50 shadow shadow-slate-50 px-4 py-2 rounded-lg uppercase font-bold bg-slate-800' onClick={signOutFunc}>signout</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Nav;