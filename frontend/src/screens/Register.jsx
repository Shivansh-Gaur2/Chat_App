import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from '../config/axios'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();
        axios.post('/users/register', {email, password}).then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md backdrop-filter backdrop-blur-lg transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">Register</h2>
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
            Register
          </button>
        </form>
        <p className="text-yellow-200 mt-4">
          Already have an account? <Link to="/login" className="text-yellow-300 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register