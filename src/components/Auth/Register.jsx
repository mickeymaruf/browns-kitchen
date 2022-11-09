import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import SocialAuth from './SocialAuth';
import Spinner from '../Others/Spinner';

const Register = () => {
    useTitle('Register');
    const [spinner, setSpinner] = useState(false);
    const { register, updateUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleRegister = (e) => {
        setSpinner(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        register(email, password)
            .then(result => {
                updateUser(name, photoURL)
                    .then(() => {
                        setSpinner(false);
                        navigate(from);
                        // storing access token
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
                        // 
                        form.reset();
                        toast.success("Registration successful!");
                    }).catch(error => console.log(error.message));
            })
            .catch(error => {
                setSpinner(false);
                toast.error(error.message);
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
                        <h1 className="text-2xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="********" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-theme">Register</button>
                            </div>
                            <small className='block text-center'>Already have an account <Link className='text-orange-500' to="/login">Login</Link></small>
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

export default Register;