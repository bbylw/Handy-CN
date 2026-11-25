import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

function title() {
  return (
    <span className="flex items-center gap-2 font-semibold">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5 text-fd-primary"
        aria-hidden="true"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
      {appName}
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: title(),
      url: '/',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

// the landing page navigation; the docs sidebar keeps its own page list
export function homeOptions(): BaseLayoutProps {
  return {
    ...baseOptions(),
    links: [
      { text: '功能特性', url: '/#features' },
      { text: '工作原理', url: '/#how-it-works' },
      { text: '模型', url: '/#models' },
      { text: '下载', url: '/#download' },
      { text: '常见问题', url: '/#faq' },
      { text: '文档', url: '/docs', active: 'nested-url' },
    ],
  };
}
