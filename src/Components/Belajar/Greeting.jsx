import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Greeting() {
  const [showWarning, setShowWarning] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = (isLoggedIn) => {
    if (isLoggedIn) {
      return <h1>Welcome Back!</h1>;
    }
    return <h1>Please Sign Up</h1>;
  };

  return (
    <div>
      <button onClick={() => Login()}>Login</button>
    </div>
  );
}
