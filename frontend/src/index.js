import React from 'react';
import { AuthProvider } from "@asgardeo/auth-react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const config = {
  signInRedirectURL: "http://localhost:3000/sign-in",
  signOutRedirectURL: "http://localhost:3000/sign-out",
  clientID: "bGOlVWp6a2MNojqHKfNxqRtqyqga",
  serverOrigin: "https://api.asgardeo.io/t/fortresscomputingtech",
  scope: ["openid", "profile"],
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
