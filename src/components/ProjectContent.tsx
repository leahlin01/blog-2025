'use client';

import Image from 'next/image';
import { cdn } from '@/lib/cdn';
import { projects } from '@/store/project';

export default function ProjectContent() {
  return (
    <div className='max-w-5xl mx-auto px-4'>
      <h1 className='text-3xl font-bold text-gray-800 my-6'>Projects</h1>
      <div className='grid grid-cols-1 gap-6'>
        {projects.map((p) => (
          <div
            key={p.title}
            className='rounded-xl border border-gray-100 shadow-sm p-4'
          >
            <div className='mb-3'>
              <Image
                src={cdn(p.image)}
                alt={p.title}
                width={600}
                height={360}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
            <h2 className='text-lg font-semibold text-gray-900 mb-1'>
              {p.title}
            </h2>
            <p className='text-gray-600 text-sm mb-2'>{p.description}</p>
            <div className='flex flex-wrap gap-2 mb-2'>
              {p.techStack.map((t) => (
                <span
                  key={t}
                  className='px-2 py-0.5 text-xs bg-gray-100 rounded-full text-gray-700'
                >
                  {t}
                </span>
              ))}
            </div>
            {p.content && (
              <div className='text-sm text-gray-700 whitespace-pre-line'>
                {p.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
