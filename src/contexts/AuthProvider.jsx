import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const updateUser = (name, photoURL) => {
        setUser({ displayName: name, photoURL, email: auth.currentUser.email })
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        user,
        loading,
        login,
        register,
        updateUser,
        logOut,
        providerLogin
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;