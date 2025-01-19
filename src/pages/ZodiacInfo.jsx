import { motion } from 'framer-motion';

function ZodiacInfo() {
  const zodiacSigns = [
    {
      name: 'Aries',
      date: 'March 21 - April 19',
      element: 'Fire',
      traits: 'Confident, courageous, enthusiastic'
    },
    {
      name: 'Taurus',
      date: 'April 20 - May 20',
      element: 'Earth',
      traits: 'Reliable, patient, practical'
    },
    {
      name: 'Gemini',
      date: 'May 21 - June 20',
      element: 'Air',
      traits: 'Adaptable, versatile, intellectual'
    },
   {
    "name": "Cancer",
    "date": "June 21 - July 22",
    "element": "Water",
    "traits": "Empathetic, intuitive, protective"
   },
   {
    "name": "Leo",
    "date": "July 23 - August 22",
    "element": "Fire",
    "traits": "Charismatic, generous, passionate"
  },
  {
    "name": "Virgo",
    "date": "August 23 - September 22",
    "element": "Earth",
    "traits": "Analytical, practical, detail-oriented"
  },
  {
    "name": "Libra",
    "date": "September 23 - October 22",
    "element": "Air",
    "traits": "Diplomatic, gracious, sociable"
  },
  {
    "name": "Scorpio",
    "date": "October 23 - November 21",
    "element": "Water",
    "traits": "Determined, resourceful, passionate"
  },
  {
    "name": "Sagittarius",
    "date": "November 22 - December 21",
    "element": "Fire",
    "traits": "Adventurous, optimistic, independent"
  },
  {
    "name": "Capricorn",
    "date": "December 22 - January 19",
    "element": "Earth",
    "traits": "Disciplined, responsible, ambitious"
  },
  {
    "name": "Aquarius",
    "date": "January 20 - February 18",
    "element": "Air",
    "traits": "Innovative, humanitarian, intellectual"
  },
  {
    "name": "Pisces",
    "date": "February 19 - March 20",
    "element": "Water",
    "traits": "Compassionate, artistic, intuitive"
  }

    // Add more signs as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-12 px-4">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Zodiac Signs Guide
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white"
            >
              <h2 className="text-2xl font-semibold mb-2">{sign.name}</h2>
              <p className="text-purple-300 mb-4">{sign.date}</p>
              <div className="mb-2">
                <span className="font-semibold">Element:</span> {sign.element}
              </div>
              <div>
                <span className="font-semibold">Traits:</span> {sign.traits}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ZodiacInfo;