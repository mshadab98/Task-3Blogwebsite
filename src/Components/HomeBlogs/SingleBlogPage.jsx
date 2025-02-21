import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TravellerData from '../TravellerTrip/TravellerData';

const TravellerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const trip = TravellerData.find(trip => trip.id === parseInt(id));

  if (!trip) {
    return <h2 className="text-center text-red-500 text-xl">Trip not found!</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-800 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl">
        <img 
          src={trip.image} 
          alt={trip.destination} 
          className="w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-3xl font-bold mt-4 text-gray-900">{trip.destination}</h2>
        <p className="text-gray-700 mt-2">{trip.description}</p>
        <p className="text-lg font-semibold text-blue-700 mt-2">Price: {trip.price}</p>
        <p className="text-gray-600">Duration: {trip.duration}</p>

       
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Features:</h3>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {trip.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

      
        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition"
        >
         Back
        </button>
      </div>
    </div>
  );
};

export default TravellerDetails;
