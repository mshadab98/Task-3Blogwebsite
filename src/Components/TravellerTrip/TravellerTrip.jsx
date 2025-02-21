import React from 'react';
import { Link } from 'react-router-dom';
import TravellerData from "../TravellerTrip/TravellerData";

const TravellerTrip = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        International Trips Package Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {TravellerData.map((trip) => (
          <div key={trip.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition">
            <img 
              src={trip.image} 
              alt={trip.destination} 
              className="w-full h-48 object-cover rounded-md" 
            />
            <h3 className="text-xl font-bold mt-3 text-gray-900">{trip.destination}</h3>
            <p className="text-gray-600 mt-1">{trip.description}</p>
            <p className="mt-2 font-semibold text-blue-700">Price: {trip.price}</p>
            <p className="text-gray-600">Duration: {trip.duration}</p>

            
            <Link 
              to={`/traveller/${trip.id}`} 
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravellerTrip;
