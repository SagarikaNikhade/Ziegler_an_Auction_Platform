import React from 'react'

const Payment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Payment</h2>
        <p className="text-gray-700 mb-4">Thank you for your payment!</p>
        <p className="text-gray-700">Your transaction has been successfully processed.</p>
      </div>
    </div>
  )
}

export default Payment
