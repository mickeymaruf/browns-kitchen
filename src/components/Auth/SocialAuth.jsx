import React from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();

const SocialAuth = ({ setSpinner }) => {
    const { providerLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSocialSignIn = () => {
        setSpinner(true);
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from);
                }
                setSpinner(false)
            })
            .catch(error => {
                console.log(error)
                setSpinner(false);
            });
    }
    return (
        <div className='flex justify-center mt-2'>
            <img onClick={handleSocialSignIn} className='w-10 cursor-pointer' src="https://img.icons8.com/color/48/null/google-logo.png" alt="" />
        </div>
    );
};

export default SocialAuth;