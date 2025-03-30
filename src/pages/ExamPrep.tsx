import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Lightbulb, MessageSquare } from 'lucide-react';

const ExamPrep: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{t('nav.examPrep')}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('examPrep.structure')}</h2>
          <p className="text-gray-600 mb-4">Learn about DELF/DALF exam formats and requirements</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Lightbulb className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('examPrep.tips')}</h2>
          <p className="text-gray-600 mb-4">Expert strategies for each exam section</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            View Tips
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('examPrep.formulas')}</h2>
          <p className="text-gray-600 mb-4">Common phrases and expressions for the exam</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            View Formulas
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Mock Exams</h2>
        <p className="text-gray-600">Practice with full-length DELF/DALF mock exams</p>
        <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors">
          Start Mock Exam
        </button>
      </div>
    </div>
  );
};

export default ExamPrep;