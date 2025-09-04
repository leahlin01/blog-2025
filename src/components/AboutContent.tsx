import Image from 'next/image';
import miniappImg from '@/assets/miniappImg.png';
import staffAppImg from '@/assets/staffAppImg.png';
import smartStoreImg from '@/assets/smartStoreImg.png';
import applicationTrackingImg from '@/assets/applicationTrackingImg.png';
import adhdReader from '@/assets/adhdReader.png';

export default function AboutContent() {
  return (
    <div className='font-sans bg-white'>
      {/* 主要内容区域 */}
      {/* 个人信息头部 */}
      <header className='flex items-center justify-center'>
        {/* 头像区域 */}
        <div className='flex flex-col items-center mb-8 mt-16'>
          <div className='relative mb-6'>
            {/* 头像 */}
            <div className='w-36 h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-4 border-gray-300 shadow-lg group cursor-pointer'>
              <div className='text-5xl group-hover:hidden'>😐</div>
              <div className='text-5xl hidden group-hover:block'>😊</div>
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
            <p className='text-xl text-gray-600 font-medium mb-4'>
              Hello World Printer
            </p>

            {/* 个人简介 */}
            <div className='max-w-2xl mx-auto'>
              <p className='text-gray-700 leading-relaxed text-base'>
                Hi, Thanks for visiting my portfolio! I&apos;m a Frontend
                Developer with 4 years of experience building scalable web
                applications. Passionate about creating intuitive user
                experiences and writing clean, maintainable code. Experienced in
                React, TypeScript, and modern web technologies.
              </p>
            </div>
          </div>

          {/* 社交链接 */}
          <div className='flex items-center gap-4 mb-6'>
            <a
              href='https://github.com/leahlin912'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>🐱</span>
            </a>
            <a
              href='https://linkedin.com/in/leahlin912'
              target='_blank'
              rel='noopener noreferrer'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>💼</span>
            </a>

            {/* <a
              href='#'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>⚡</span>
            </a> */}
            <a
              href='mailto:leahlin2022@qq.com'
              className='w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
            >
              <span className='text-gray-600 text-lg'>✉️</span>
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className='mb-12'>
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
      </section>

      {/* Projects Section */}
      <section className='mb-12'>
        <div className='mb-10'>
          <h3 className='text-xl font-semibold text-gray-700 mb-6 flex items-center gap-3'>
            <span className='w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full'></span>
            Featured Projects
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {[
              {
                title: 'Restaurant Management System',
                description:
                  'Responsive web application serving 6792+ restaurants and processing 100m+ daily orders',
                image: smartStoreImg,
                techStack: [
                  'React',
                  'Ant Design',
                  'React-Query',
                  'TailwindCSS',
                  'Module Federation',
                  'dnd-kit',
                ],
                demoUrl: 'https://tastien.tastientech.com/',
                githubUrl: '',
              },
              {
                title: 'Tastien Food Ordering WeChat MiniApp',
                description:
                  'WeChat mini-app with 10m+ users, featuring virtual scroll and Lottie animations',
                image: miniappImg,
                techStack: [
                  'React',
                  'Zustand',
                  'TypeScript',
                  'Taro',
                  'Webpack',
                ],
                demoUrl: '',
                githubUrl: '',
              },
              {
                title: 'Restaurant Staff App',
                description:
                  'Cross-platform app for restaurant staff with unified codebase using monorepo structure',
                image: staffAppImg,
                techStack: [
                  'React Native',
                  'React-Query',
                  'Electron',
                  'Monorepo',
                ],
                demoUrl:
                  'https://apps.apple.com/cn/app/%E5%A1%94%E5%A1%94%E9%97%A8%E5%BA%97%E5%8A%A9%E6%89%8B/id1631486031?l=en-GB',
                githubUrl: '',
              },
              {
                title: 'Application Tracking System',
                description:
                  'Web application helping college students track application progress with secure authentication',
                image: applicationTrackingImg,
                techStack: [
                  'Next.js',
                  'Prisma',
                  'PostgreSQL',
                  'Vercel',
                  'JWT',
                  'bcrypt',
                ],
                demoUrl: 'https://application-tracking-omega.vercel.app/',
                githubUrl: 'https://github.com/leahlin01/application-tracking',
              },
              {
                title: 'ADHD Reader',
                description:
                  'Flutter App tailored for adhd users to read books with bionic reading mode',
                image: adhdReader,
                techStack: [
                  'Flutter',
                  'epubx',
                  'path_provider',
                  'shared_preferences',
                ],
                demoUrl: '',
                githubUrl: 'https://github.com/leahlin01/adhd_reader',
              },
            ].map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100'
              >
                {/* Project Image */}
                <div className='relative overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={450}
                      height={300}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        width: '100%',
                        height: '66%',
                      }}
                    />
                  ) : (
                    <div className='w-full h-[300px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                      <span className='text-4xl'>🖼️</span>
                    </div>
                  )}

                  {/* Overlay with action buttons */}
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-80'>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className='px-4 py-2 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0'
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className='px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0'
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <h4 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200'>
                    {project.title}
                  </h4>
                  <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full hover:from-purple-100 hover:to-pink-100 hover:text-purple-700 transition-all duration-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          {/* <div className='text-center mt-8'>
            <button className='px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
              View All Projects
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
