'use client';

import { useState } from 'react';
import AboutContent from './web/AboutContent';
import ResumeContent from './ResumeContent';
import ProjectContent from './ProjectContent';
import SearchContent from './SearchContent';

export default function DesktopContent() {
  const [currentRoute, setCurrentRoute] = useState('about');

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
      {/* 顶部导航栏 */}
      <header className='flex items-center justify-between px-8 py-4 border-b border-gray-100'>
        <div className='flex items-center gap-4'>
          <span className='text-gray-600'>Home</span>
          <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
            🌙
          </button>
          <span className='text-gray-400'>|</span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600'>中文</span>
            <span className='text-sm'>🇨🇳</span>
          </div>
        </div>

        <nav className='flex items-center gap-6'>
          <button
            onClick={() => setCurrentRoute('about')}
            className={`transition-colors ${
              currentRoute === 'about'
                ? 'text-gray-900 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentRoute('project')}
            className={`transition-colors ${
              currentRoute === 'project'
                ? 'text-gray-900 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Project
          </button>
          <button
            onClick={() => setCurrentRoute('resume')}
            className={`transition-colors ${
              currentRoute === 'resume'
                ? 'text-gray-900 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => setCurrentRoute('search')}
            className={`transition-colors ${
              currentRoute === 'search'
                ? 'text-gray-900 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Search
          </button>
        </nav>
      </header>

      {/* 主要内容区域 */}
      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8'>
        {renderContent()}
      </main>

      {/* 底部信息 */}
      <footer className='text-center py-8 text-gray-500 border-t border-gray-100'>
        <p className='text-sm'>© 2025 Leah Lin&apos;s Blog Visitors: 4798</p>
      </footer>
    </div>
  );
}
