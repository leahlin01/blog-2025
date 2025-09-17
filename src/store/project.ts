export const projects = [
  {
    title: 'Restaurant Management System',
    description:
      'Responsive web application serving 6792+ restaurants and processing 100m+ daily orders',
    image: '/images/smartStoreImg.png',
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
    content:
      '• Developed a shared React component library using Module Federation, enabling 3+ micro-frontend applications to share common UI components.\n• Designed and implemented a sophisticated drag-and-drop interface using dnd-kit for managing logistics orders across 6000+ restaurant locations.',
  },
  {
    title: 'Tastien Food Ordering WeChat MiniApp',
    description:
      'WeChat mini-app with 10m+ users, featuring virtual scroll and Lottie animations',
    image: '/images/miniappImg.png',
    techStack: ['React', 'Zustand', 'TypeScript', 'Taro', 'Webpack'],
    demoUrl: '',
    githubUrl: '',
    content:
      '• Optimized the webpack configuration using loaders and plugins to seamlessly integrate static assets hosting, reducing asset load time by 1s+.\n• Implemented virtual scroll using IntersectionObserver, reducing rendered nodes by 70% and improving FCP by 1s+.\n• Implemented Lottie animations to achieve pixel-perfect design implementation, enhancing user experience.',
  },
  {
    title: 'Restaurant Staff App',
    description:
      'Cross-platform app for restaurant staff with unified codebase using monorepo structure',
    image: '/images/staffAppImg.png',
    techStack: ['React Native', 'React-Query', 'Electron', 'Monorepo'],
    demoUrl:
      'https://apps.apple.com/cn/app/%E5%A1%94%E5%A1%94%E9%97%A8%E5%BA%97%E5%8A%A9%E6%89%8B/id1631486031?l=en-GB',
    githubUrl: '',
    content:
      '• Architected a unified codebase using monorepo structure, enabling seamless feature sharing between mobile app and POS systems.\n• Fixed compatibility issues with the third-party library react-native-apk-install in RN 0.64 by applying patches, ensuring application stability.',
  },
  {
    title: 'Application Tracking System',
    description:
      'Web application helping college students track application progress with secure authentication',
    image: '/images/applicationTrackingImg.png',
    techStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel', 'JWT', 'bcrypt'],
    demoUrl: 'https://application-tracking-omega.vercel.app/',
    githubUrl: 'https://github.com/leahlin01/application-tracking',
    content:
      '• Help college students track their application progress, including application status, interview schedule, and offer information.\n• Built secure authentication using JWT tokens with bcrypt password encryption and role-based authorization middleware.\n• Successfully deployed on Vercel with automated CI/CD pipeline.',
  },
  {
    title: 'ADHD Reader',
    description:
      'Flutter App tailored for adhd users to read books with bionic reading mode',
    image: '/images/adhdReader.png',
    techStack: ['Flutter', 'epubx', 'path_provider', 'shared_preferences'],
    demoUrl: '',
    githubUrl: 'https://github.com/leahlin01/adhd_reader',
    content:
      '• Bionic Reading mode for better focus.\n• Local Epub management, resume reading, and customizable theme/typography.\n• Async decode and paginated rendering for performance.',
  },
];
