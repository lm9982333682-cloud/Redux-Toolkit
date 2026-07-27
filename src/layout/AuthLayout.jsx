import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const AuthLayout = ({ children }) => {

    const loginData = useSelector(state => state.auth.loginData);
    
    if (!loginData) return <Navigate to={'/login'} />

    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout
