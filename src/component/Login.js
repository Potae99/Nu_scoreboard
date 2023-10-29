import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        const loginData = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/login', loginData);
            if (response.data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Username หรือ Password ไม่ถูกต้อง',
                    showConfirmButton: false,
                    timer: 2000
                })
                return;
            }
            await Swal.fire({
                icon: 'success',
                title: 'Login Complete',
                showConfirmButton: false,
                timer: 2000
            });
            window.location.href = 'Upload3692581470';
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='p-7 bg-white min-h-screen border border-white'>
            <h2 className=' text-2xl text-black mb-4'>Login</h2>
            <div className=' mb-4'>
                <label className=' block text-sm font-medium text-gray-600'>Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={handleUsernameChange}
                    className=' border-2 rounded w-full py-2 px-3 bg-white hover:bg-blue-200 text-black'
                    required
                />
            </div>
            <div className=' mb-4'>
                <label className=' block text-sm font-medium text-gray-600'>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    className=' border-2 rounded w-full py-2 px-3 bg-white hover:bg-blue-200 text-black'
                    required />
            </div>
            <button onClick={handleSubmit} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>
                Login
            </button>
        </div>
    );
};

export default Login