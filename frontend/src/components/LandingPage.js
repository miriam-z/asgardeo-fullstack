import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

const LandingPage = () => {
    const { state } = useAuthContext();

    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            {state.isAuthenticated && (
                <div>
                    <p>Logged in as: {state.displayName}</p>
                    <p>Email: {state.username}</p>
                </div>
            )}
            <p>This page is only accessible to authenticated users.</p>
        </div>
    );
};

export default LandingPage;
