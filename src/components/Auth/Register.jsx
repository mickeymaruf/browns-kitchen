import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import SocialAuth from './SocialAuth';
import Spinner from '../Others/Spinner';
import { useForm } from "react-hook-form";

const Register = () => {
    useTitle('Register');
    const [spinner, setSpinner] = useState(false);
    const { createUser, updateUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset } = useForm();
    const handleRegister = data => {
        setSpinner(true);
        const { name, email, password, photoURL } = data;
        createUser(email, password)
            .then(result => {
                updateUser(name, photoURL)
                    .then(() => {
                        setSpinner(false);
                        navigate(from);
                        // storing access token
                        fetch('https://browns-kitchen-server.vercel.app/jwt', {
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
                        reset();
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
            <div className="w-full md:flex items-start justify-around">
                <div className="hidden w-1/2 lg:block text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 mx-auto xl:mx-0 lg:mr-0 shadow-2xl bg-base-100 relative rounded-xl">
                    <div className="card-body pb-5">
                        <h1 className="text-2xl font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true })} placeholder="********" className="input input-bordered" />
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