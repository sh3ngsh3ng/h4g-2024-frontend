import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <Button colorScheme='teal' size='md'>
                    Login
                </Button>
                <h2>Signup now using Google</h2>
            </form>
        </>
    );
}

export default LoginPage;