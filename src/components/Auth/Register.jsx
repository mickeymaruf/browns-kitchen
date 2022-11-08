import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, updateUser } = useAuth();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        register(email, password)
            .then(result => {
                const user = result.user;
                updateUser(name, photoURL)
                    .then(() => {
                        form.reset();
                        toast.success("Registration successful!");
                    }).catch(error => console.log(error.message));
            })
            .catch(error => {
                toast.error(error.message);
            });
    }
    return (
        <div className="hero w-10/12 max-w-screen-xl mx-auto pt-10 pb-20">
            <div className="w-full flex items-start justify-around">
                <div className="w-1/2 text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-1/2 card max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-2xl font-bold">Register now!</h1>
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
                        <div className="form-control mt-2">
                            <button className="btn btn-theme">Register</button>
                        </div>
                        <small className='block text-center'>Already have an account <Link className='text-orange-500' to="/login">Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;