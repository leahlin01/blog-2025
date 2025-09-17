'use client';
import Image from 'next/image';
import { cdn } from '@/lib/cdn';
import { useState } from 'react';
import { projects } from '@/store/project';

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  content?: React.ReactNode;
};
export default function AboutContent() {
  const [selectedProject, setSelectedProject] = useState<Project>();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

              {/* 对话气泡 */}
              <div className='absolute -top-10 -right-6 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-lg'>
                <div className='text-sm text-gray-700 font-medium group-hover:hidden '>
                  ok, fine
                </div>
                <div className='text-sm text-gray-700 font-medium hidden group-hover:block '>
                  Let&apos;s connect
                </div>

                <div className='absolute -bottom-1 right-5 w-3 h-3 bg-white border-b border-r border-gray-200 transform rotate-45'></div>
              </div>
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
            {[
              { href: 'https://github.com/leahlin01', label: 'Github' },
              {
                href: 'https://www.linkedin.com/in/leah-lin-bb87a31a5/',
                label: 'LinkedIn',
              },
              { href: 'mailto:leahlin2022@qq.com', label: 'Email' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='w-fit h-fit rounded-sm p-1 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110'
              >
                <span className='text-gray-600 text-sm md:text-base'>
                  {link.label}
                </span>
              </a>
            ))}
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
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100'
              >
                {/* Project Image */}
                <div className='relative overflow-hidden'>
                  {project.image ? (
                    <Image
                      src={cdn(project.image)}
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
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className='px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-500 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0'
                    >
                      Details
                    </button>
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

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className='fixed inset-0 z-50'>
          <div
            className='absolute inset-0 bg-black bg-opacity-50'
            onClick={() => setIsModalOpen(false)}
          />
          <div className='absolute inset-0 flex items-center justify-center p-4'>
            <div className='w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100'>
              <div className='flex items-start justify-between p-6 pb-4'>
                <div>
                  <h3 className='text-2xl font-semibold text-gray-900'>
                    {selectedProject.title}
                  </h3>
                  <p className='text-gray-600 mt-1'>
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  className='ml-4 text-gray-400 hover:text-gray-600 transition-colors'
                  onClick={() => setIsModalOpen(false)}
                  aria-label='Close'
                >
                  ✕
                </button>
              </div>
              <div className='px-6 pb-2'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {selectedProject.techStack?.map((t: string, i: number) => (
                    <span
                      key={i}
                      className='px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className='whitespace-pre-line text-gray-700 text-sm leading-6'>
                  {selectedProject?.content}
                </div>
              </div>
              <div className='p-6 pt-4 flex gap-3 justify-end'>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    className='px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors'
                  >
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className='px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors'
                  >
                    GitHub
                  </a>
                )}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className='px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
