'use client';

import { useEffect, useState } from 'react';

export default function ResumeContent() {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // 读取HTML文件内容
    fetch('/cv/leahlin.html')
      .then((response) => response.text())
      .then((html) => {
        // 提取body中的内容，去掉HTML标签
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const bodyContent = doc.body.innerHTML;
        setHtmlContent(bodyContent);
      })
      .catch((error) => {
        console.error('Error loading resume:', error);
        setHtmlContent('<p>无法加载简历内容</p>');
      });
  }, []);

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div
        className='bg-white p-8'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
