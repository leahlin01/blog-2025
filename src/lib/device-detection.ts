export function isMobileDevice(userAgent: string): boolean {
  if (!userAgent) return false;

  const mobileKeywords = [
    'Android',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
    'Mobile',
    'Tablet',
    'webOS',
    'Palm',
    'Opera Mini',
    'IEMobile',
  ];

  const mobileRegex =
    /Mobile|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS|Palm|Opera Mini|IEMobile/i;

  return (
    mobileRegex.test(userAgent) ||
    mobileKeywords.some((keyword) => userAgent.includes(keyword))
  );
}

export function getDeviceType(userAgent: string): 'mobile' | 'desktop' {
  return isMobileDevice(userAgent) ? 'mobile' : 'desktop';
}

export function getDeviceInfo(userAgent: string) {
  const isMobile = isMobileDevice(userAgent);

  // 检测操作系统
  let os = 'unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac OS X')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';

  // 检测浏览器
  let browser = 'unknown';
  if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  else if (userAgent.includes('Opera')) browser = 'Opera';

  return {
    isMobile,
    deviceType: isMobile ? 'mobile' : 'desktop',
    os,
    browser,
    userAgent: userAgent.substring(0, 100) + '...', // 截断过长的 user-agent
  };
}
