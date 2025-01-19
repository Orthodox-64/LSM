import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SlidingBar = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 3 divs
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Cycle backwards through 3 divs
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 4000); // Automatically slide every 4 seconds

    return () => clearInterval(autoSlide); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <div className="sliding-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${index * 100}%)` }} // Slide based on the index
      >
        {/* Slide 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-8 rounded-lg backdrop-blur-sm shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Daily Horoscope</h2>
          <p className="text-lg text-white mb-4">Get your personalized daily horoscope reading based on your zodiac sign</p>
          <Link
            to="/horoscope"
            className="inline-block bg-white px-6 py-2 text-purple-600 rounded-full hover:bg-white hover:text-purple-700 transition-all"
          >
            Read Now
          </Link>
        </motion.div>
        {/* Slide 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 p-8 rounded-lg backdrop-blur-sm shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Zodiac Guide</h2>
          <p className="text-lg text-white mb-4">Learn about your zodiac sign's traits, compatibility, and more</p>
          <Link
            to="/zodiac"
            className="inline-block bg-white px-6 py-2 text-teal-600 rounded-full hover:bg-white hover:text-teal-700 transition-all"
          >
            Explore Signs
          </Link>
        </motion.div>
        {/* Slide 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg backdrop-blur-sm shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Spiritual Content</h2>
          <p className="text-lg text-white mb-4">Customized Meditation and workout suggestion</p>
          <Link
            to="/meditation"
            className="inline-block bg-white px-6 py-2 text-indigo-600 rounded-full hover:bg-white hover:text-indigo-700 transition-all"
          >
            See Now
          </Link>
        </motion.div>
      </div>

      <button className="prev" onClick={handlePrev}>Prev</button>
      <button className="next" onClick={handleNext}>Next</button>

      <style jsx>{`
        .sliding-container {
          position: relative;
          width: 90vw; /* 90% of the viewport width for larger size */
          height: 500px; /* Increased height */
          overflow: hidden; /* Hide the extra slides */
          margin: 0 auto; /* Center the sliding container */
          border-radius: 15px; /* Rounded corners */
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); /* Add shadow for a modern look */
        }

        .slider {
          display: flex;
          transition: transform 0.7s ease-in-out; /* Smooth transition with a longer time for a more fluid effect */
        }

        .slider > div {
          min-width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 24px;
          text-align: center;
          border-radius: 15px;
          padding: 30px;
          transition: transform 0.7s ease; /* Smooth transition for sliding */
        }

        .slider h2 {
          font-size: 2.5em; /* Larger title */
          margin-bottom: 15px;
        }

        .slider p {
          font-size: 1.3em; /* Slightly larger text for readability */
          margin-bottom: 20px;
        }

        button {
          position: absolute;
          top: 50%;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 20px;
          font-size: 24px;
          cursor: pointer;
          border-radius: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }

        .prev {
          left: 30px;
        }

        .next {
          right: 30px;
        }
      `}</style>
    </div>
  );
};

export default SlidingBar;