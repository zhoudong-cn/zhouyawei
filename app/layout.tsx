import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zhouyawei-extreme.zhouyaweijay.chatgpt.site'),
  title: '静默影像作品集',
  description: '摄影、视频、品牌合作与项目档案。',
  openGraph: {
    title: '静默影像作品集',
    description: 'PHOTOGRAPHY / MOTION / QUIET IMAGE',
  },
  twitter: {
    card: 'summary_large_image',
    title: '静默影像作品集',
    description: 'PHOTOGRAPHY / MOTION / QUIET IMAGE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
