import Link from 'next/link';

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { title: string; links: FooterLink[] };

const groups: FooterGroup[] = [
  {
    title: '文档',
    links: [
      { label: '快速开始', href: '/docs' },
      { label: '模型', href: '/docs/models' },
      { label: 'Linux 安装', href: '/docs/linux' },
      { label: '故障排除', href: '/docs/troubleshooting' },
    ],
  },
  {
    title: '资源',
    links: [
      { label: '下载', href: 'https://github.com/cjpais/Handy/releases', external: true },
      { label: '构建指南', href: 'https://github.com/cjpais/Handy/blob/main/BUILD.md', external: true },
      { label: '官方网站', href: 'https://handy.computer', external: true },
      { label: '上游文档', href: 'https://handy.computer/docs', external: true },
    ],
  },
  {
    title: '社区',
    links: [
      { label: 'GitHub', href: 'https://github.com/cjpais/Handy', external: true },
      { label: 'Discord', href: 'https://discord.com/invite/WVBeWsNXK4', external: true },
      { label: 'Issues', href: 'https://github.com/cjpais/Handy/issues', external: true },
      { label: '联系我们', href: 'mailto:contact@handy.computer', external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-fd-card/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
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
              Handy 中文
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fd-muted-foreground">
              免费、开源、可扩展的离线语音转文字应用。声音留在你的电脑上，不经过云端。
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t pt-6 text-sm text-fd-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>本站为 Handy 的中文文档与介绍页，内容译自 handy.computer/docs。</p>
          <p>© 2026 Handy · MIT 许可证</p>
        </div>
      </div>
    </footer>
  );
}
