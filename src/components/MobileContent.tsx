import Image from 'next/image';

export default function MobileContent() {
  return (
    <div className='font-sans min-h-screen bg-white'>
      {/* 移动端顶部导航栏 */}
      <header className='flex items-center justify-between px-4 py-3 border-b border-gray-100'>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-gray-600'>Home</span>
          <button className='p-1.5 hover:bg-gray-100 rounded-full transition-colors'>
            🌙
          </button>
          <span className='text-gray-400'>|</span>
          <div className='flex items-center gap-1'>
            <span className='text-sm text-gray-600'>中文</span>
            <span className='text-xs'>🇨🇳</span>
          </div>
        </div>

        {/* 移动端汉堡菜单 */}
        <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600 mb-1'></div>
          <div className='w-5 h-0.5 bg-gray-600'></div>
        </button>
      </header>

      {/* 移动端主要内容区域 */}
      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4'>
        {/* 头像区域 - 移动端优化 */}
        <div className='relative mb-6'>
          <div className='relative'>
            {/* 头像 - 移动端尺寸调整 */}
            <div className='w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-3 border-gray-300'>
              <div className='text-3xl'>😐</div>
            </div>

            {/* 对话气泡 - 移动端位置调整 */}
            <div className='absolute -top-6 -right-2 bg-white border border-gray-200 rounded-lg px-2 py-1.5 shadow-sm'>
              <span className='text-xs text-gray-700'>ok, fine</span>
              <div className='absolute -bottom-0.5 right-3 w-1.5 h-1.5 bg-white border-b border-r border-gray-200 transform rotate-45'></div>
            </div>

            {/* 手指图标 - 移动端位置调整 */}
            <div className='absolute -bottom-1 -left-2 text-xl'>👆</div>
          </div>
        </div>

        {/* 姓名和标签 - 移动端字体调整 */}
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>Kyrie Xie</h1>
          <p className='text-lg text-gray-600'>Hello World Printer</p>
        </div>

        {/* 社交链接 - 移动端布局优化 */}
        <div className='flex items-center gap-4 mb-6'>
          <a
            href='#'
            className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600 text-sm'>📷</span>
          </a>
          <a
            href='#'
            className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600 text-sm'>🐱</span>
          </a>
          <a
            href='#'
            className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600 text-sm'>💼</span>
          </a>
          <a
            href='#'
            className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600 text-sm'>⚡</span>
          </a>
          <a
            href='#'
            className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
          >
            <span className='text-gray-600 text-sm'>✉️</span>
          </a>
        </div>

        {/* 导航按钮 - 移动端垂直布局 */}
        <div className='flex flex-col gap-3 w-full max-w-xs'>
          <button className='w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium'>
            About
          </button>
          <button className='w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium'>
            Project
          </button>
          <button className='w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium'>
            Resume
          </button>
        </div>

        {/* 移动端额外功能提示 */}
        <div className='mt-8 text-center'>
          <p className='text-xs text-gray-500 mb-2'>移动端优化版本</p>
          <div className='flex items-center justify-center gap-2 text-xs text-gray-400'>
            <span>📱</span>
            <span>触摸友好</span>
            <span>•</span>
            <span>响应式设计</span>
            <span>•</span>
            <span>快速加载</span>
          </div>
        </div>
      </main>

      {/* 移动端底部信息 */}
      <footer className='text-center py-6 text-gray-500 border-t border-gray-100'>
        <p className='text-xs'>
          © 2023 Kunyang&apos;s Blog Visitors: 4798 Views: 16635
        </p>
      </footer>
    </div>
  );
}
