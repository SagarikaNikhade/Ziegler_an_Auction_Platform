// Bid.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbid } from '../Redux/BidReducer/action';
import { useParams ,useNavigate} from 'react-router-dom';

const initialState = {
  amount: '',
  bidderName: '',
};

const Bid = () => {
  const [bid, setBid] = useState(initialState);
  const [bidSuccessful, setBidSuccessful] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBid((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addbid(bid));
    alert('Bid Added!');
    setBid(initialState);
    setBidSuccessful(true);
  };

  if (bidSuccessful) {
    navigate('/pay');;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-md max-w-md w-full" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Bid</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            type="number"
            id="amount"
            name="amount"
            value={bid.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="bidderName">
            Bidder_Name
          </label>
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="bidderName"
            name="bidderName"
            value={bid.bidderName}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className={`${
            bidSuccessful ? 'bg-green-500' : 'bg-blue-500'
          } text-white rounded-md py-2 px-4 hover:${
            bidSuccessful ? 'bg-green-600' : 'bg-blue-600'
          } focus:outline-none focus:shadow-outline-${
            bidSuccessful ? 'green' : 'blue'
          }`}
        >
          {bidSuccessful ? 'Payment' : 'Add Bid'}
        </button>
      </form>
    </div>
  );
};

export default Bid;
