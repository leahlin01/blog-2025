import Image from 'next/image';

export default function DesktopContent() {
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
          <a
            href='#about'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            About
          </a>
          <a
            href='#project'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Project
          </a>
          <a
            href='#resume'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Resume
          </a>
          <a
            href='#search'
            className='text-gray-600 hover:text-gray-900 transition-colors'
          >
            Search
          </a>
        </nav>
      </header>

      {/* 主要内容区域 */}
      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8'>
        {/* 头像区域 */}
        <div className='relative mb-8'>
          <div className='relative'>
            {/* 头像 */}
            <div className='w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300'>
              <div className='text-4xl'>😐</div>
            </div>

            {/* 对话气泡 */}
            <div className='absolute -top-8 -right-4 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm'>
              <span className='text-sm text-gray-700'>ok, fine</span>
              <div className='absolute -bottom-1 right-4 w-2 h-2 bg-white border-b border-r border-gray-200 transform rotate-45'></div>
            </div>

            {/* 手指图标 */}
            <div className='absolute -bottom-2 -left-4 text-2xl'>👆</div>
          </div>
        </div>

        {/* 姓名和标签 */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>Kyrie Xie</h1>
          <p className='text-xl text-gray-600'>Hello World Printer</p>
        </div>

        {/* 社交链接 */}
        <div className='flex items-center gap-6 mb-8'>
          <a
            href='#'
            className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600'>📷</span>
          </a>
          <a
            href='#'
            className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600'>🐱</span>
          </a>
          <a
            href='#'
            className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600'>💼</span>
          </a>
          <a
            href='#'
            className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600'>⚡</span>
          </a>
          <a
            href='#'
            className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600'>✉️</span>
          </a>
        </div>

        {/* 导航按钮 */}
        <div className='flex gap-4'>
          <button className='px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium'>
            About
          </button>
          <button className='px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium'>
            Project
          </button>
          <button className='px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium'>
            Resume
          </button>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className='text-center py-8 text-gray-500 border-t border-gray-100'>
        <p className='text-sm'>
          © 2023 Kunyang&apos;s Blog Visitors: 4798 Views: 16635
        </p>
      </footer>
    </div>
  );
}
