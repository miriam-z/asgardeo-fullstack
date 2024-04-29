import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@asgardeo/auth-react';

const ProtectedRoute = ({ children }) => {
    const { state } = useAuthContext();

    if (!state.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
