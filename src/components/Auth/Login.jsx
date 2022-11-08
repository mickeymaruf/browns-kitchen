import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';

const Login = () => {
    return (
        <div className="hero w-10/12 max-w-screen-xl mx-auto pt-10 pb-20">
            <div className="w-full flex items-start justify-around">
                <div className="w-1/2 text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-1/2 card max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-2xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-theme">Login</button>
                        </div>
                        <small className='block text-center'>Don't have an account <Link className='text-orange-500' to="/register">Register</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;