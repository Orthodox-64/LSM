// import { useState, useEffect, createContext } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// // Create context for data
// export const OurContext = createContext();

// function HoroscopeForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     dob: '',
//     time: '',
//     // zodiacSign: '',
//     // gender: '',
//     // state: '',
//     city: '', // Ensure the city field is included
//   });
//   const [data, setData] = useState(null);
//   const [horoscope, setHoroscope] = useState('');

//   const zodiacSigns = [
//     'Aries', 'Taurus', 'Gemini', 'Cancer',
//     'Leo', 'Virgo', 'Libra', 'Scorpio',
//     'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
//   ];

//   // Fetch horoscope data from the backend
//   const fetchHoroscopeData = async () => {
//     try {
//       console.log('Form Data:', formData); // Log the form data to debug

//       // Check if all required fields are filled before making the API request
//       if (!formData.name || !formData.dob || !formData.time  || !formData.city) {
//         console.log('Missing required fields');
//         return; // Prevent the request if any field is missing
//       }

//       const response = await axios.post(
//         'https://levelsupermind-tymn.onrender.com/chat',
//         {
//           name: formData.name,
//           dob: formData.dob,
//           time: formData.time,
//           // zodiacSign: formData.zodiacSign,
//           city: formData.city // Sending the missing city field
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',  // Ensure correct headers
//           }
//         }
//       );
//       console.log('API Response:', response.data); // Log the response data
//       setData(response.data); // Store the response data
//     } catch (error) {
//       console.error('Error fetching horoscope:', error);
//       if (error.response) {
//         console.error('API Response Data:', error.response.data);
//         console.error('API Response Status:', error.response.status);
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchHoroscopeData(); // Call the function to fetch the horoscope data on form submit
//   };

//   return (
//     // <OurContext.Provider value={{ data }}>
//       <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-12 px-4">
//         <div className="max-w-2xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
//           >
//             <h2 className="text-3xl font-bold text-white mb-6 text-center">
//               Get Your Personal Horoscope
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-white mb-2">Name</label>
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                   required
//                 />
//               </div>

//               <div className="space-y-4">
//                 <div className="flex flex-wrap gap-4">
//                   {/* Date of Birth */}
//                   <div className="flex-1">
//                     <label className="block text-white mb-2">Date of Birth</label>
//                     <input
//                       type="date"
//                       value={formData.dob}
//                       onChange={(e) =>
//                         setFormData({ ...formData, dob: e.target.value })
//                       }
//                       className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                       required
//                     />
//                   </div>

//                   {/* Time of Birth */}
//                   <div className="flex-1">
//                     <label className="block text-white mb-2">Time of Birth</label>
//                     <input
//                       type="time"
//                       value={formData.time}
//                       onChange={(e) =>
//                         setFormData({ ...formData, time: e.target.value })
//                       }
//                       className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
    
//                 {/* <div className="flex-1">
//                   <label className="block text-white mb-2">Zodiac Sign</label>
//                   <select
//                     value={formData.zodiacSign}
//                     onChange={(e) => setFormData({ ...formData, zodiacSign: e.target.value })}
//                     className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                     required
//                   >
//                     <option value="">Select your sign</option>
//                     {zodiacSigns.map((sign) => (
//                       <option key={sign} value={sign}>
//                         {sign}
//                       </option>
//                     ))}
//                   </select>
//                 </div> */}

//                 {/* Gender */}
//                 <div className="flex-1">
//                   <label className="block text-white mb-2">Gender</label>
//                   <select
//                     value={formData.gender}
//                     // onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//                     className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select your gender
//                     </option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               {/* City Input */}
//               <div>
//                 <label className="block text-white mb-2">City</label>
//                 <input
//                   type="text"
//                   value={formData.city}
//                   onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                   className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
//                   required
//                 />
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700"
//               >
//                 Get Horoscope
//               </motion.button>
//             </form>

//             {data && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-8 p-6 bg-white/20 rounded-lg text-white"
//               >
//                 <h3 className="text-xl font-semibold mb-2">{data.message}</h3>
//                 {/* Adjust according to your API response */}
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
    
//   );
// }

// export default HoroscopeForm;





import { useState, createContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Create context for data
export const OurContext = createContext();

function HoroscopeForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    time: "",
    city: "", // Ensure the city field is included
  });
  const [data, setData] = useState(null); // Changed to 'data' to match usage
  const [parsedHoroscope, setParsedHoroscope] = useState({}); // Store parsed horoscope data

  // Fetch horoscope data from the backend
  const fetchHoroscopeData = async () => {
    try {
      console.log("Form Data:", formData); // Log the form data to debug

      // Check if all required fields are filled before making the API request
      if (!formData.name || !formData.dob || !formData.time || !formData.city) {
        console.log("Missing required fields");
        return; // Prevent the request if any field is missing
      }

      const response = await axios.post(
        "https://levelsupermind-tymn.onrender.com/chat",
        {
          name: formData.name,
          dob: formData.dob,
          time: formData.time,
          city: formData.city, // Sending the missing city field
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct headers
          },
        }
      );
      console.log("API Response:", response.data); // Log the response data
      setData(response.data); // Store the response data

      // Apply regex to parse and format the horoscope text
      const regex = /Love:\s*(\w+),\s*Career:\s*(\w+),\s*Health:\s*(\w+),\s*Luck:\s*(\w+)/;
      const match = response.data.spiritual_advice.match(regex);

      if (match) {
        setParsedHoroscope({
          Love: match[1],
          Career: match[2],
          Health: match[3],
          Luck: match[4],
        });
      } else {
        console.log("No matching horoscope data found in the response.");
      }
    } catch (error) {
      console.error("Error fetching horoscope:", error);
      if (error.response) {
        console.error("API Response Data:", error.response.data);
        console.error("API Response Status:", error.response.status);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHoroscopeData(); // Call the function to fetch the horoscope data on form submit
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Get Your Personal Horoscope
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {/* Date of Birth */}
                <div className="flex-1">
                  <label className="block text-white mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                    className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                    required
                  />
                </div>

                {/* Time of Birth */}
                <div className="flex-1">
                  <label className="block text-white mb-2">Time of Birth</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* City Input */}
            <div>
              <label className="block text-white mb-2">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700"
            >
              Get Horoscope
            </motion.button>
          </form>

          {data && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 p-6 bg-white/20 rounded-lg text-white"
            >
              {/* Display the formatted horoscope data */}
              <h3 className="text-xl font-semibold mb-2">Your Horoscope:</h3>
              {Object.keys(parsedHoroscope).length > 0 ? (
                <ul>
                  <li>Love: {parsedHoroscope.Love}</li>
                  <li>Career: {parsedHoroscope.Career}</li>
                  <li>Health: {parsedHoroscope.Health}</li>
                  <li>Luck: {parsedHoroscope.Luck}</li>
                </ul>
              ) : (
                <p>{data.spiritual_advice || "No message available"}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default HoroscopeForm;