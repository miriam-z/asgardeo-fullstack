import React from 'react';
import { useAuthContext } from '@asgardeo/auth-react';

const LoginPage = () => {
    const { signIn } = useAuthContext();

    const handleLogin = () => {
        signIn();
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Sign In with Asgardeo</button>
        </div>
    );
};

export default LoginPage;
