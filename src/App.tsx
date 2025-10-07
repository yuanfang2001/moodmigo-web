import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import HowItWorksPage from './pages/HowItWorksPage';
import HowItWorksStart from './pages/HowItWorksStart';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/how-it-works/start" element={<HowItWorksStart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
