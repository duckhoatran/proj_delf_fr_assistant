import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Headphones, MessageSquare, Pencil, Book } from 'lucide-react';

const SkillBuilder: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{t('nav.skillBuilder')}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Book className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('skills.grammar')}</h2>
          <p className="text-gray-600 mb-4">Master French grammar rules and structures</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Learning
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('skills.reading')}</h2>
          <p className="text-gray-600 mb-4">Improve your reading comprehension</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Reading
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Headphones className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('skills.listening')}</h2>
          <p className="text-gray-600 mb-4">Enhance your listening skills</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Listening
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('skills.speaking')}</h2>
          <p className="text-gray-600 mb-4">Practice speaking with AI assistance</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Speaking
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Pencil className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('skills.writing')}</h2>
          <p className="text-gray-600 mb-4">Develop your writing abilities</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Writing
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <p className="text-gray-600">Track your improvement across all language skills</p>
      </div>
    </div>
  );
};

export default SkillBuilder;