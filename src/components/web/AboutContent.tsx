export default function AboutContent() {
  return (
    <div className='font-sans bg-white'>
      {/* 主要内容区域 */}
      {/* 个人信息头部 */}
      <header className='flex items-center justify-center'>
        {/* 头像区域 */}
        <div className='flex flex-col items-center mb-8'>
          <div className='relative mb-6'>
            {/* 头像 */}
            <div className='w-36 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-lg'>
              <div className='text-5xl'>😐</div>
            </div>

            {/* 对话气泡 */}
            <div className='absolute -top-10 -right-6 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg'>
              <span className='text-sm text-gray-700 font-medium'>
                ok, fine
              </span>
              <div className='absolute -bottom-1 right-5 w-3 h-3 bg-white border-b border-r border-gray-200 transform rotate-45'></div>
            </div>

            {/* 手指图标 */}
            <div className='absolute -bottom-3 -left-6 text-3xl animate-bounce'>
              👆
            </div>
          </div>

          {/* 姓名和标签 */}
          <div className='text-center mb-6'>
            <h1 className='text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
              Leah Lin
            </h1>
            <p className='text-xl text-gray-600 font-medium'>
              Hello World Printer
            </p>
          </div>

          {/* 社交链接 */}
          <div className='flex items-center gap-4 mb-6'>
            <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>📷</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>🐱</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>💼</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>⚡</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>✉️</span>
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      {/* <section className='mb-12'>
          <div className='mb-10'>
            <h3 className='text-xl font-semibold text-gray-700 mb-6 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full'></span>
              Languages & Frameworks
            </h3>
            <div className='flex flex-wrap gap-6'>
              {[
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                  name: 'JavaScript',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                  name: 'HTML5',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                  name: 'CSS3',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                  name: 'React',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                  name: 'TypeScript',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                  name: 'Next.js',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                  name: 'Vue.js',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                  name: 'React Native',
                },
                {
                  icon: '',
                  name: 'Taro',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                  name: 'TailwindCSS',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                  name: 'Node.js',
                },
                {
                  icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                  name: 'Ant Design',
                },
              ].map((tech, index) => (
                <div key={index} className='flex items-center gap-3 group'>
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={32}
                      height={32}
                      className='w-8 h-8 group-hover:scale-110 transition-transform duration-300'
                    />
                  )}
                  <span className='text-gray-700 font-medium'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-gray-700 mb-6 flex items-center gap-3'>
              <span className='w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full'></span>
              Infrastructure & Tools
            </h3>
            <div className='flex flex-wrap gap-6'>
              {[
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                  name: 'Git',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
                  name: 'Jest',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
                  name: 'Jenkins',
                },
                {
                  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
                  name: 'Webpack',
                },
                {
                  icon: '',
                  name: 'Cursor',
                },
                {
                  icon: '',
                  name: 'Claude Code',
                },
              ].map((tool, index) => (
                <div key={index} className='flex items-center gap-3 group'>
                  {tool.icon && (
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className='w-8 h-8 group-hover:scale-110 transition-transform duration-300'
                    />
                  )}
                  <span className='text-gray-700 font-medium'>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section> */}
    </div>
  );
}
