'use client';
import { useState } from 'react';
import { account, ID } from '../lib/appwrite';
import { Models } from 'appwrite';

import { Input, Button } from 'antd';

const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const login = async (loginEmail: string, loginPassword: string) => {
        // const session: Models.Session = await account.createEmailPasswordSession(loginEmail, loginPassword);
        await account.createEmailPasswordSession(loginEmail, loginPassword);
        const user: Models.User<Models.Preferences> = await account.get();
        setLoggedInUser(user);
    };

    const register = async () => {
        await account.create(ID.unique(), email, password, name);
        login(email, password);
    };

    const logout = async () => {
        await account.deleteSession('current');
        setLoggedInUser(null);
    };

    if (loggedInUser) {
        return (
            <div>
                <p>Logged in as {loggedInUser.name}</p>
                <Button type="primary" onClick={logout}>
                    Logout
                </Button>
            </div>
        );
    }

    return (
        <div>
            <p>Not logged in</p>
            <form>
                <div>
                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <Button type="primary" onClick={() => login(email, password)}>
                        Login
                    </Button>
                </div>
                <div>
                    <Button type="default" onClick={register}>
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
