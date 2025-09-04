'use client';

import { useState } from 'react';
import AboutContent from './AboutContent';
import ResumeContent from './ResumeContent';
import ProjectContent from './ProjectContent';
import SearchContent from './SearchContent';

export default function MobileContent() {
  const [currentRoute, setCurrentRoute] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutContent />;
      case 'resume':
        return <ResumeContent />;
      case 'project':
        return <ProjectContent />;
      case 'search':
        return <SearchContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className='font-sans min-h-screen bg-white'>
      {/* 移动端顶部导航栏 */}
      <header className='flex items-center justify-between px-4 py-3 border-b border-gray-100'>
        <div className='flex items-center gap-3'>
          <span
            className='text-sm text-gray-600'
            onClick={() => setCurrentRoute('about')}
          >
            Home
          </span>
          {/* <button className='p-1.5 hover:bg-gray-100 rounded-full transition-colors'>
            🌙
          </button>
          <span className='text-gray-400'>|</span>
          <div className='flex items-center gap-1'>
            <span className='text-sm text-gray-600'>中文</span>
            <span className='text-xs'>🇨🇳</span>
          </div> */}
        </div>

        {/* 移动端汉堡菜单 */}
        <button
          className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600'></div>
        </button>
      </header>

      {/* 移动端菜单展开 */}
      {isMenuOpen && (
        <div className='absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-10'>
          <nav className='flex flex-col py-2'>
            <button
              onClick={() => {
                setCurrentRoute('about');
                setIsMenuOpen(false);
              }}
              className={`px-4 py-3 text-left transition-colors ${
                currentRoute === 'about'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                setCurrentRoute('project');
                setIsMenuOpen(false);
              }}
              className={`px-4 py-3 text-left transition-colors ${
                currentRoute === 'project'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Project
            </button>
            <button
              onClick={() => {
                setCurrentRoute('resume');
                setIsMenuOpen(false);
              }}
              className={`px-4 py-3 text-left transition-colors ${
                currentRoute === 'resume'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => {
                setCurrentRoute('search');
                setIsMenuOpen(false);
              }}
              className={`px-4 py-3 text-left transition-colors ${
                currentRoute === 'search'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Search
            </button>
          </nav>
        </div>
      )}

      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4'>
        {renderContent()}
      </main>

      {/* 移动端底部信息 */}
      <footer className='text-center py-6 text-gray-500 border-t border-gray-100'>
        <p className='text-xs'>© 2025 Leah Lin&apos;s Blog Visitors: 4798</p>
      </footer>
    </div>
  );
}
