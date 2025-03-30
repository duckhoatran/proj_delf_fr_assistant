import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Brain } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">DELF MasterAI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your intelligent companion for mastering French and preparing for DELF/DALF exams
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Link
          to="/practice"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <MessageSquare className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('practice.conversation')}</h2>
          <p className="text-gray-600">Practice French conversations with AI-powered scenarios</p>
        </Link>

        <Link
          to="/exam-prep"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('nav.examPrep')}</h2>
          <p className="text-gray-600">Learn exam strategies and common formulas</p>
        </Link>

        <Link
          to="/skill-builder"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Brain className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('nav.skillBuilder')}</h2>
          <p className="text-gray-600">Build your French skills with structured exercises</p>
        </Link>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose DELF MasterAI?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Practice</h3>
            <p className="text-gray-600">
              Get instant feedback and personalized conversation practice with our AI system
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Structured Learning</h3>
            <p className="text-gray-600">
              Follow a proven curriculum aligned with CEFR standards
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Exam Strategies</h3>
            <p className="text-gray-600">
              Learn effective techniques for each section of the DELF/DALF exams
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Resources</h3>
            <p className="text-gray-600">
              Access a wide range of exercises, mock exams, and study materials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;