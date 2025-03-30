import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Practice from './pages/Practice';
import ExamPrep from './pages/ExamPrep';
import SkillBuilder from './pages/SkillBuilder';
import './i18n';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/exam-prep" element={<ExamPrep />} />
            <Route path="/skill-builder" element={<SkillBuilder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;