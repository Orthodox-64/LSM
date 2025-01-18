import { useState } from 'react';
import { motion } from 'framer-motion';

function HoroscopeForm() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    zodiacSign: ''
  });
  const [horoscope, setHoroscope] = useState('');

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a mock horoscope response - in a real app, you'd call an API
    const horoscopes = [
      "The stars align in your favor today. Expect positive changes in your life.",
      "A surprising opportunity will present itself. Stay alert and ready.",
      "Focus on personal growth today. Your efforts will be rewarded.",
      "Your creative energy is at its peak. Use it wisely."
    ];
    setHoroscope(horoscopes[Math.floor(Math.random() * horoscopes.length)]);
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
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Date of Birth</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({...formData, dob: e.target.value})}
                className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                required
              />
            </div>
            
            <div>
              <label className="block text-white mb-2">Zodiac Sign</label>
              <select
                value={formData.zodiacSign}
                onChange={(e) => setFormData({...formData, zodiacSign: e.target.value})}
                className="w-full p-2 rounded bg-white/20 text-white border border-purple-400"
                required
              >
                <option value="">Select your sign</option>
                {zodiacSigns.map(sign => (
                  <option key={sign} value={sign}>{sign}</option>
                ))}
              </select>
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
          
          {horoscope && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 p-6 bg-white/20 rounded-lg text-white"
            >
              <h3 className="text-xl font-semibold mb-2">Your Daily Horoscope</h3>
              <p>{horoscope}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default HoroscopeForm;