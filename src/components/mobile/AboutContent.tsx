export default function MobileAboutContent() {
  return (
    <>
      {/* 移动端主要内容区域 */}
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
        <h1 className='text-2xl font-bold text-gray-900 mb-2'>Leah Lin</h1>
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
    </>
  );
}
