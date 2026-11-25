import Link from 'next/link';

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { title: string; wide?: boolean; links: FooterLink[] };

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
    wide: true,
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
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1.5fr_repeat(3,1fr)] md:gap-10">
          <div className="col-span-2 md:col-span-1">
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
              Handy
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fd-muted-foreground">
              免费、开源、可扩展的离线语音转文字应用。声音留在你的电脑上，不经过云端。
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title} className={group.wide ? 'col-span-2 md:col-span-1' : undefined}>
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul
                className={
                  group.wide
                    ? 'mt-3 flex flex-wrap gap-x-5 gap-y-2 md:block md:space-y-2'
                    : 'mt-3 space-y-2'
                }
              >
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

        <div className="mt-10 border-t pt-6 text-center text-xs text-fd-muted-foreground md:text-right md:text-sm">
          <p>© 2026 Handy · MIT 许可证</p>
        </div>
      </div>
    </footer>
  );
}
