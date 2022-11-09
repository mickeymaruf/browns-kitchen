import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { useAuth } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut().then(() => { }).catch(err => console.log(err.message));
    }
    return (
        <div className="w-10/12 max-w-screen-xl mx-auto navbar px-0 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        {
                            user && user.email &&
                            <>
                                <li><Link to="/add-service">Add Services</Link></li>
                                <li><Link to="/myReviews">My Reviews</Link></li>
                            </>
                        }
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className='flex items-center gap-1'>
                    <img className='w-14' src={logo} alt="" />
                    <p className='logo-title uppercase text-lg text-orange-500 font-medium'>Browns<br />Kitchen</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10 font-medium">
                    <li className='hover:text-orange-500'><Link to="/">Home</Link></li>
                    <li className='hover:text-orange-500'><Link to="/services">Services</Link></li>
                    {
                        user && user.email &&
                        <>
                            <li className='hover:text-orange-500'><Link to="/add-service">Add Services</Link></li>
                            <li className='hover:text-orange-500'><Link to="/myReviews">My Reviews</Link></li>
                        </>
                    }
                    <li className='hover:text-orange-500'><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.email ?
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img className='w-10 rounded-full mr-3' src={user.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogout} className="btn btn-theme">Logout</button>
                        </>
                        :
                        <Link to="/login" className="btn btn-theme">Login</Link>
                }
            </div>
        </div >
    );
};

export default Navbar;