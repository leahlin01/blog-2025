import { headers } from 'next/headers';
import MobileContent from '@/components/MobileContent';
import DesktopContent from '@/components/DesktopContent';
import { getDeviceType } from '@/lib/device-detection';

export default async function Home() {
  // 获取请求头中的 user-agent
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  // 根据 user-agent 判断设备类型
  const deviceType = getDeviceType(userAgent);

  // 根据设备类型渲染不同的内容
  if (deviceType === 'mobile') {
    return (
      <>
        <MobileContent />
      </>
    );
  }

  return (
    <>
      <DesktopContent />
    </>
  );
}
