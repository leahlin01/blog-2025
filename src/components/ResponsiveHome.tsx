'use client';

import { useState } from 'react';
import AboutContent from './AboutContent';
import ResumeContent from './ResumeContent';
import ProjectContent from './ProjectContent';

export default function ResponsiveContent() {
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
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className='font-sans min-h-screen bg-white'>
      {/* 头部：左侧 Home，右侧桌面导航（md+ 可见）与移动端汉堡（<md 可见） */}
      <header className='flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-gray-100'>
        <div className='flex items-center gap-3 md:gap-4'>
          <button
            className='text-gray-600 text-sm md:text-base'
            onClick={() => setCurrentRoute('about')}
          >
            Home
          </button>
        </div>

        {/* 桌面端导航 */}
        <nav className='hidden md:flex items-center gap-6'>
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

        {/* 移动端汉堡 */}
        <button
          className='md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600'></div>
        </button>
      </header>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-10'>
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
          </nav>
        </div>
      )}

      {/* 主要内容区：移动端与桌面端不同的最小高度 */}
      <main className='flex flex-col items-center justify-center px-4 md:px-8 min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-200px)]'>
        {renderContent()}
      </main>

      {/* 底部 */}
      <footer className='text-center py-6 md:py-8 text-gray-500 border-t border-gray-100'>
        <p className='text-xs md:text-sm'>© 2025 Leah Lin&apos;s Blog</p>
      </footer>
    </div>
  );
}
