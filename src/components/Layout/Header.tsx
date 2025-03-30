import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Languages, Menu as MenuIcon } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Languages className="h-8 w-8" />
              <span className="text-xl font-bold">DELF MasterAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/practice" className="hover:text-indigo-200">{t('nav.practice')}</Link>
            <Link to="/exam-prep" className="hover:text-indigo-200">{t('nav.examPrep')}</Link>
            <Link to="/skill-builder" className="hover:text-indigo-200">{t('nav.skillBuilder')}</Link>
            
            <Menu as="div" className="relative ml-4">
              <Menu.Button className="flex items-center space-x-1 hover:text-indigo-200">
                <Languages className="h-5 w-5" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Menu.Item>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    English
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={() => changeLanguage('vi')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    Tiếng Việt
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-200">
                <MenuIcon className="h-6 w-6" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Menu.Item>
                  <Link to="/practice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    {t('nav.practice')}
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/exam-prep" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    {t('nav.examPrep')}
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/skill-builder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                    {t('nav.skillBuilder')}
                  </Link>
                </Menu.Item>
                <hr className="my-1" />
                <Menu.Item>
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    English
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={() => changeLanguage('vi')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 w-full text-left"
                  >
                    Tiếng Việt
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;