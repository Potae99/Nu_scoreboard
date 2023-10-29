import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogined, setIsLogined] = useState(false);
    const navigate = useNavigate();

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
            setIsLogined(true);
            await Swal.fire({
                icon: 'success',
                title: 'Login Complete',
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/Upload', { state: { isLogined: true } });
        } catch (error) {
            console.error(error);
        }
    };

    const ToSearchStudent = () => {
        window.location.href = "/"
    }

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
            <div className='place-content-center flex justify-center' >
                <button onClick={ToSearchStudent} class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute left-3 flex items-center justify-start w-10 h-10 duration-300 transform  group-hover:translate-x-3 ease">
                        <svg class="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">home</span>
                </button>
            </div>
        </div>
    );
};

export default Login