import React, { useEffect } from 'react';
import { useLocation, useSearchParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getaircraft } from '../Redux/AircraftReducer/action';
import { Link } from 'react-router-dom';

const ShowAllAircraft = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { aircrafts } = useSelector((store) => store.aircraftReducer);
    // console.log(aircrafts)

    useEffect(() => {
        dispatch(getaircraft());
    }, [location.search])

    const handleGoToBidPage = (id) => {
        const isLoggedIn = localStorage.getItem('token');
        if (isLoggedIn) {
          navigate(`/bid/${id}`);
        } else {
          navigate('/login');
        }
      };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aircrafts.length > 0 &&
                aircrafts.map((el) => (
                    <div key={el._id} className="bg-white p-4 rounded-md shadow-md">
                        <img src={el.image} alt="Aircraft" className="w-full h-40 object-cover mb-4 rounded-md" />
                        <p className="text-xl font-bold mb-2">{el.model}</p>
                        <p className="text-gray-600">Manufacturer: {el.manufacturer}</p>
                        <p className="text-gray-600">Year of Manufacture: {el.yearOfManufacture}</p>
                        <p className="text-gray-600">Total Hours: {el.totalHours}</p>
                        <br />
                        <button
                            onClick={() => handleGoToBidPage(el._id)}
                            className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block"
                        >
                            Go to Bid Page
                        </button>
                    </div>
                ))}
        </div>

    )
}

export default ShowAllAircraft
