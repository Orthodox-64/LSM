import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Regex function to clean the double stars formatting
const cleanText = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, '$1');
};



const Meditation = () => {
  const [data, setData] = useState("");

  const fetchFun = async () => {
    try {
      const response = await axios.post('https://llama-1.onrender.com/history', {
        username: 'Nachiket',
        prompt: `Give Personalized Spiritual Guidance based on my Zodiac Sign and my Zodiac Sign is Taurus`
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return { data: { response: 'Error fetching data. Please try again later.' } };
    }
  };

  useEffect(() => {
    fetchFun().then((response) => {
      console.log('API Response:', response); // Log the full response for debugging
      const cleanedData = cleanText(response.data.response); // Clean the response
      setData(cleanedData);
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 py-8 px-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl text-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Personalized Wellness Insights</h2>

        {data ? (
          <div className="p-6 bg-white/20 rounded-xl border border-purple-600 shadow-md">
            <p className="text-lg text-gray-200">{data}</p>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-400">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Meditation;

