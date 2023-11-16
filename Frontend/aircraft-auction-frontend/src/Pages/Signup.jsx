import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/AuthReducer/action';
import { Link } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    user_type:"",
}

const Signup = () => {
    const [register, setRegister] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegister((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(register)
        dispatch(registerUser(register)) 
        setRegister(initialState)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded-md max-w-md w-full" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        value={register.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmedPassword">
                        Confirm Password
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={register.confirm_password}
                        onChange={handleChange}
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
                        value={register.user_type}
                        onChange={handleChange}
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
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Sign Up
                </button>
                <p className="mt-4 text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
                </p>
            </form>
        </div>
    )
}

export default Signup
