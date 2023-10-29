import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username: ', username);
        console.log('Password: ', password);
    };

    return (
        <div className='p-7 bg-white min-h-screen border border-white'>
            <h2 className=' text-2xl text-black mb-4'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className=' mb-4'>
                    <label className=' block text-sm font-medium text-gray-600'>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={handleUsernameChange}
                        className=' border-2 rounded w-full py-2 px-3 bg-white'
                        required
                    />
                </div>
                <div className=' mb-4'>
                    <label className=' block text-sm font-medium text-gray-600'>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        className=' border-2 rounded w-full py-2 px-3 bg-white'
                        required />
                </div>
                <button type='submit' className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login