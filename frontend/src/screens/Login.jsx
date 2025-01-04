import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../config/axios'
import { UserContext } from '../context/user.context'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext); // Get setUser from UserContext

    function submitHandler(e) {
        e.preventDefault(); 
        axios.post('/users/login', { email, password }).then((res) => {
            if (res.data) {
                console.log(res.data)

                localStorage.setItem('token', res.data.token)
                setUser(res.data.user);
                navigate('/')
            } else {
                console.log('Login failed: No data received');
            }
        })
        .catch((err) => {  
            console.log(err.response.data);
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-filter backdrop-blur-lg transform transition-transform duration-500 hover:scale-105">
                <h2 className="text-2xl font-bold text-yellow-300 mb-6">Login</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-yellow-200 mb-2" htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-yellow-200 mb-2" htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-yellow-200 mt-4">
                    Don't have an account? <Link to="/register" className="text-yellow-300 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login