import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://handy.ndjp.net'),
  title: {
    default: 'Handy — 免费开源的离线语音转文字',
    template: '%s · Handy',
  },
  description:
    'Handy 是一款免费、开源、可扩展的离线语音转文字应用。按下快捷键说话，松开即可把文字粘贴到任何应用，全程在本地完成。',
  keywords: ['Handy', '语音转文字', '离线转录', 'Whisper', 'Parakeet', '开源', '中文文档'],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Handy',
    title: 'Handy — 免费开源的离线语音转文字',
    description: '按下快捷键说话，松开即可获得文字。完全本地运行，隐私优先，开源免费。',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.className} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
