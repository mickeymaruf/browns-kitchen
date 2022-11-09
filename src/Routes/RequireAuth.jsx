import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Others/Spinner';
import { useAuth } from '../contexts/AuthProvider';

const RequireAuth = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return (
            <div className='pt-40 pb-48 flex justify-center'>
                <Spinner />
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;