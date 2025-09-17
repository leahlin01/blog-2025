// src/lib/cdn.ts
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/leahlin01/blog-2025@main/public'; // 例如: https://cdn.jsdelivr.net/gh/<user>/<repo>@<commit>/public

export function cdn(path: string) {
  if (!CDN_BASE) return path; // 未配置时走本地路径（/images/xxx.png）
  if (path.startsWith('http')) return path;
  return `${CDN_BASE}${path.startsWith('/') ? '' : '/'}${path}`;
}
