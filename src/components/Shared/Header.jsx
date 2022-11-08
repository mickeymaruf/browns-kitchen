import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className="w-10/12 max-w-screen-xl mx-auto navbar bg-base-100 px-0 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <Link to="/" className='flex items-center gap-3'>
                    <img className='w-16' src={logo} alt="" />
                    <h3 className='text-xl font-medium'>Browns Kitchen</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;