import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, Users, MessageSquare } from 'lucide-react';

const Practice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{t('nav.practice')}</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MessageSquare className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('practice.conversation')}</h2>
          <p className="text-gray-600 mb-4">Practice everyday conversations with AI assistance</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Practice
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Camera className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('practice.photoDescription')}</h2>
          <p className="text-gray-600 mb-4">Learn to describe images in detail</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Practice
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-10 w-10 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{t('practice.roleplay')}</h2>
          <p className="text-gray-600 mb-4">Engage in realistic role-play scenarios</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start Practice
          </button>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Progress</h2>
        <p className="text-gray-600">Your practice statistics and history will appear here</p>
      </div>
    </div>
  );
};

export default Practice;