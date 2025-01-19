import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import xd from "../assets/xd.webp";

function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-6">Welcome to Mystic Astrology</h1>
        <p className="text-xl mb-8">Discover your cosmic journey through the stars</p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">Daily Horoscope</h2>
            <p className="mb-4">Get your personalized daily horoscope reading based on your zodiac sign</p>
            <Link
              to="/horoscope"
              className="inline-block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Read Now
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">Zodiac Guide</h2>
            <p className="mb-4">Learn about your zodiac sign's traits, compatibility, and more</p>
            <Link
              to="/zodiac"
              className="inline-block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Explore Signs
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">Spiritual Content</h2>
            <p className="mb-4">Customized Meditation and workout suggestion</p>
            <Link
              to="/meditation"
              className="inline-block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700"
            >
              See Now
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">AI Chat-Bot</h2>
            <p className="mb-4">Natural Language Chat-Bot For Spiritual Advice</p>
            <Link
              to="/Aibot"
              className="inline-block bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Interact
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Circular Image with More Upward Adjustment */}
      <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute top-24 right-14 bg-white/20 rounded-full overflow-hidden shadow-lg w-48 h-48"
>
  <img
    src={xd}
    alt="Astrology"
    className="w-full h-full object-cover"
  />
</motion.div>
    </div>
  );
}

export default Home;