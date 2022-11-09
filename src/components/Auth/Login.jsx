import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import SocialAuth from './SocialAuth';
import useTitle from '../../hooks/useTitle';
import Spinner from '../Others/Spinner';

const Login = () => {
    useTitle('Login');
    const [spinner, setSpinner] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) => {
        setSpinner(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                setSpinner(false);
                navigate(from);
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ user: result.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('browns_kitchen_token', data.token);
                    })
            })
            .catch(error => {
                toast.error(error.message);
                setSpinner(false);
            });
    }
    return (
        <div className="hero w-10/12 max-w-screen-xl mx-auto pt-10 pb-20">
            <div className="w-full flex items-start justify-around">
                <div className="w-1/2 text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-1/2 card max-w-sm shadow-2xl bg-base-100 relative">
                    <div className="card-body pb-5">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control my-2">
                                <button className="btn btn-theme">Login</button>
                            </div>
                            <small className='block text-center'>Don't have an account <Link className='text-orange-500' to="/register">Register</Link></small>
                        </form>
                        <SocialAuth setSpinner={setSpinner} />
                    </div>
                    {
                        spinner &&
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center backdrop-blur-sm rounded-xl'>
                            <Spinner />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;