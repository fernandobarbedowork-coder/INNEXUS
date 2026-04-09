
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClubInversores from './pages/ClubInversores';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club-inversores" element={<ClubInversores />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
