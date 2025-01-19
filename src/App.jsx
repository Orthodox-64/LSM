import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HoroscopeForm from './pages/HoroscopeForm';
import ZodiacInfo from './pages/ZodiacInfo';
import BiorhythmInfo from './pages/Meditation'
import './App.css';
import Meditation from './pages/Meditation';
import SlidingBar from './pages/SlidingBar';
import LangflowInteraction from './pages/Aibot'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horoscope" element={<HoroscopeForm />} />
          <Route path="/zodiac" element={<ZodiacInfo />} />
          <Route path='/meditation' element={<Meditation/>}/>
          <Route path='/meditation1' element={<SlidingBar/>}/>
          <Route path='/aibot' element={<LangflowInteraction/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;