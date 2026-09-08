import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zhouyawei-extreme.zhouyaweijay.chatgpt.site'),
  title: 'ZHOUYAWEI — 摄影与动态影像',
  description: '周亚伟的先锋摄影与视频作品集。',
  openGraph: {
    title: 'ZHOUYAWEI — 摄影与动态影像',
    description: 'PHOTOGRAPHY / MOTION / EXTREME',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZHOUYAWEI — 摄影与动态影像',
    description: 'PHOTOGRAPHY / MOTION / EXTREME',
    images: ['/og.png'],
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
