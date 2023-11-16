import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAircraft } from '../Redux/AircraftReducer/action';

const initialState = {
    image:"",
    model:"",
    manufacturer:"",
    yearOfManufacture:"",
    totalHours:""
}

const Aircraft = () => {
    const [aircraft, setAircraft] = useState(initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;

        setAircraft((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(aircraft)
        dispatch(addAircraft(aircraft))
        alert("Add successfully!")
        setAircraft(initialState)
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-md rounded-md max-w-md w-full" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Aircraft</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="image">
                    Image
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="image"
                        name="image"
                        value={aircraft.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="model">
                        Model
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="model"
                        name="model"
                        value={aircraft.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="manufacturer">
                    manufacturer
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        value={aircraft.manufacturer}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="yearOfManufacture">
                    yearOfManufacture
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="number"
                        id="yearOfManufacture"
                        name="yearOfManufacture"
                        value={aircraft.yearOfManufacture}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="totalHours">
                        Total Hours
                    </label>
                    <input
                        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        type="number"
                        id="totalHours"
                        name="totalHours"
                        value={aircraft.totalHours}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Add Aircradt
                </button>
            </form>
        </div>
  )
}

export default Aircraft
