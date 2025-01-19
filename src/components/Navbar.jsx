import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className="bg-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-mystical"
        >
          <Link to="/">✨ Mystic Astrology</Link>
        </motion.div>
        <div className="flex gap-6">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="hover:text-purple-300">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/horoscope" className="hover:text-purple-300">Get Horoscope</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/zodiac" className="hover:text-purple-300">Zodiac Signs</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/meditation" className="hover:text-purple-300">Spiritual</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;