import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

const LogoutPage = () => {
    const { signOut } = useAuthContext();

    const handleLogout = () => {
        signOut();
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
};

export default LogoutPage;
