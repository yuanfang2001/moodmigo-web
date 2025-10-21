import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Actions from './pages/Actions';
import Stories from './pages/Stories';
import Science from './pages/Science';
import Preference from './pages/Preference';
import History from './pages/History';
import HowItWorksPage from './pages/HowItWorksPage';
import HowItWorksStart from './pages/HowItWorksStart';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/actions" element={<Actions />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/science" element={<Science />} />
      <Route path="/preference" element={<Preference />} />
      <Route path="/history" element={<History />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/how-it-works/start" element={<HowItWorksStart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
