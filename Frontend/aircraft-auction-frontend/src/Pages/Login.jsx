import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../Redux/AuthReducer/action';

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [usertype,setUserType] =  useState("");
    const location = useLocation();
    const navigate = useNavigate()
    const {auth} = useSelector((store)=> store.authReducer)
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userData = {
          email,password
        }
        dispatch(loginUser(userData)).then(()=>navigate(location.state))
        console.log(userData)
        localStorage.setItem('userType', usertype);
        setEmail(" ");
        setPassword(" ");
        setUserType(" ");
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="user_type"
                    >
                        User Type
                    </label>
                    <select
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        id="user_type"
                        name="user_type"
                        value={usertype}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select User Type
                        </option>
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Login
