import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HoroscopeForm from './pages/HoroscopeForm';
import ZodiacInfo from './pages/ZodiacInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horoscope" element={<HoroscopeForm />} />
          <Route path="/zodiac" element={<ZodiacInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;