import Link from 'next/link';
import { CopyCommand } from '@/components/copy-command';

const features = [
  {
    title: '完全免费',
    body: '辅助工具应该属于每个人，而不是被付费墙挡在门外。没有订阅，没有时长限制。',
    icon: (
      <path d="M20 6 9 17l-5-5" />
    ),
  },
  {
    title: '开源透明',
    body: 'MIT 许可证，代码全部公开。你可以为自己扩展 Handy，也能为更大的事业做贡献。',
    icon: (
      <>
        <path d="m8 6-6 6 6 6" />
        <path d="m16 6 6 6-6 6" />
      </>
    ),
  },
  {
    title: '隐私优先',
    body: '你的声音留在自己的电脑上。转录在本地完成，不向云端发送任何音频。',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: '简单纯粹',
    body: '一个工具，只做一件事：把你说的话变成文字，放进光标所在的位置。',
    icon: (
      <>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      </>
    ),
  },
];

const steps = [
  { title: '按下快捷键', body: '按住说话，或点按切换录音。快捷键可以随意改。' },
  { title: '自然说话', body: 'Silero VAD 自动过滤静音，只把真正的人声送去识别。' },
  { title: '本地识别', body: 'Whisper、Parakeet 等模型在你自己的硬件上完成转录。' },
  { title: '得到文字', body: '结果直接粘贴到浏览器、编辑器或聊天窗口里。' },
];

const models = [
  {
    name: 'Parakeet V3',
    meta: '约 478 MB · 25 种欧洲语言',
    body: '速度快、准确率高，是最稳定、也最推荐给大多数人的模型。',
    tag: '推荐',
  },
  {
    name: 'Whisper',
    meta: '487 MB – 1.6 GB · 99+ 种语言',
    body: '多语言覆盖最广，Small 与 Medium 在速度与准确率之间取得平衡。',
    tag: '多语言',
  },
  {
    name: 'Cohere Transcribe',
    meta: '约 1.8 GB · 14 种语言',
    body: '英文转录质量最高，适合有独立 GPU、追求极致准确率的场景。',
    tag: '高精度',
  },
];

const downloads = [
  {
    name: 'macOS',
    note: 'Apple Silicon 与 Intel',
    href: 'https://github.com/cjpais/Handy/releases',
    command: 'brew install --cask handy',
    detail: '下载 .dmg 后把 Handy 拖进「应用程序」，或使用 Homebrew。',
  },
  {
    name: 'Windows',
    note: 'Windows 10/11 x64',
    href: 'https://github.com/cjpais/Handy/releases',
    command: 'winget install cjpais.Handy',
    detail: '下载并运行安装包，或使用 winget 安装。',
  },
  {
    name: 'Linux',
    note: 'X11 与 Wayland · x64',
    href: 'https://github.com/cjpais/Handy/releases',
    command: 'sudo apt install ./Handy_*.deb',
    detail: '用 APT 安装 .deb 会自动补齐依赖，其他发行版可用 AppImage。',
  },
];

const faqs = [
  {
    q: 'Handy 会把我的语音上传到云端吗？',
    a: '不会。所有转录都在本地完成，唯一的网络请求是下载模型和检查更新。只有你主动开启基于云端服务商的后处理时，转录文本才会发送给该服务商。',
  },
  {
    q: '中文识别效果怎么样？',
    a: '中文推荐 Whisper（Small / Medium / Large）或 SenseVoice。Parakeet 主要面向欧洲语言，用它处理中文容易输出英文或乱码。',
  },
  {
    q: 'Linux 上快捷键和粘贴要注意什么？',
    a: 'Wayland 需要把 handy --toggle-transcription 绑定到桌面快捷键，并安装 wtype、ydotool 等输入工具；X11 上一般开箱即用。详见 Linux 安装与粘贴方式两页。',
  },
  {
    q: '支持按住说话和点按切换吗？',
    a: '两种都支持。默认按住说话，松开即停止；也可以在通用设置里关闭它，改成按一次开始、再按一次停止。',
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-fd-primary/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-fd-card/70 px-3 py-1 text-xs text-fd-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              免费开源 · 完全离线 · 隐私优先
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              按下快捷键，
              <br />
              <span className="text-gradient">说出你的想法</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fd-muted-foreground sm:text-lg">
              Handy 是一款跨平台桌面应用，提供简单、保护隐私的语音转录。按下快捷键、说话、松开，
              文字就会出现在任何输入框里 —— 整个过程都在你的电脑上完成。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                阅读文档
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <a
                href="#download"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-fd-card px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent sm:w-auto"
              >
                免费下载
              </a>
            </div>

            <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x rounded-xl border bg-fd-card/60 py-4 backdrop-blur">
              {[
                ['100%', '本地运行'],
                ['0', '音频上传'],
                ['3', '桌面平台'],
              ].map(([value, label]) => (
                <div key={label} className="px-2 text-center">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-2xl font-semibold">{value}</dd>
                  <dd className="mt-1 text-xs text-fd-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* App mockup */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border bg-fd-card shadow-2xl shadow-fd-primary/10">
              <div className="flex items-center gap-2 border-b bg-fd-muted/40 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-amber-400/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-fd-muted-foreground">Handy · 正在聆听</span>
              </div>
              <div className="flex flex-col items-center gap-6 bg-gradient-to-b from-fd-background to-fd-muted/30 px-6 py-12">
                <div className="relative flex size-20 items-center justify-center rounded-full bg-fd-primary/10">
                  <span className="absolute inset-0 animate-ping rounded-full bg-fd-primary/10" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-8 text-fd-primary"
                    aria-hidden="true"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </div>
                <div className="flex h-12 items-center gap-1.5" aria-hidden="true">
                  {[0.4, 0.75, 1, 0.6, 0.9, 1, 0.5, 0.8, 0.65, 0.95, 0.45, 0.7].map((scale, i) => (
                    <span
                      key={i}
                      className="wave-bar w-1.5 rounded-full bg-fd-primary/70"
                      style={{
                        height: `${scale * 100}%`,
                        animationDelay: `${i * 90}ms`,
                      }}
                    />
                  ))}
                </div>
                <p className="max-w-md text-center text-sm leading-relaxed text-fd-muted-foreground">
                  这是 Handy，一个离线语音转文字工具。按下快捷键开始说话，松开即可获取转录文本。
                  <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-fd-primary align-middle" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">功能特性</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">为什么选择 Handy？</h2>
          <p className="mt-4 text-fd-muted-foreground">
            Handy 的诞生是为了填补一个空白：一款真正开源、可扩展、每个人都用得起的语音转文字工具。
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border bg-fd-card p-6 transition-colors hover:border-fd-primary/50"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                  aria-hidden="true"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y bg-fd-muted/20">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">工作原理</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">四步完成一次转录</h2>
            <p className="mt-4 text-fd-muted-foreground">全程本地化，不需要联网，也不经过任何服务器。</p>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border bg-fd-card p-6">
                <span className="flex size-8 items-center justify-center rounded-full bg-fd-primary/10 text-sm font-semibold text-fd-primary">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">识别模型</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">为你的语言挑一个模型</h2>
            <p className="mt-4 text-fd-muted-foreground">
              所有模型都在本地运行，可随时切换，首次使用时自动下载。
            </p>
          </div>
          <Link
            href="/docs/models"
            className="text-sm font-medium text-fd-primary transition-opacity hover:opacity-80"
          >
            查看全部 9 个模型 →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {models.map((model) => (
            <div key={model.name} className="rounded-xl border bg-fd-card p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{model.name}</h3>
                <span className="rounded-full border px-2 py-0.5 text-[11px] text-fd-muted-foreground">
                  {model.tag}
                </span>
              </div>
              <p className="mt-1 text-xs text-fd-muted-foreground">{model.meta}</p>
              <p className="mt-4 text-sm leading-relaxed text-fd-muted-foreground">{model.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-y bg-fd-muted/20">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">下载安装</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">开始使用 Handy</h2>
            <p className="mt-4 text-fd-muted-foreground">
              当前版本 v0.10.2，支持 macOS、Windows 和 Linux，安装包来自 GitHub Releases。
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {downloads.map((platform) => (
              <div key={platform.name} className="flex flex-col rounded-xl border bg-fd-card p-6">
                <h3 className="font-semibold">{platform.name}</h3>
                <p className="mt-1 text-xs text-fd-muted-foreground">{platform.note}</p>
                <p className="mt-4 text-sm leading-relaxed text-fd-muted-foreground">
                  {platform.detail}
                </p>
                <div className="mt-5 space-y-2">
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
                  >
                    下载安装包
                  </a>
                  <CopyCommand command={platform.command} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-fd-muted-foreground">
            Homebrew cask 与 winget 包由社区维护。Linux 上的快捷键与粘贴配置见{' '}
            <Link href="/docs/linux" className="text-fd-primary hover:opacity-80">
              Linux 安装
            </Link>
            。
          </p>
        </div>
      </section>

      {/* Docs */}
      <section id="docs" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">文档</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">从安装到调优的完整指南</h2>
          <p className="mt-4 text-fd-muted-foreground">
            文档内容译自 handy.computer/docs，并跟进上游 v0.10.2 的更新。
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: '快速开始', body: '安装、授权、选模型，完成第一次转录。', href: '/docs' },
            { title: '粘贴方式', body: '终端、Wayland、管理员应用里的粘贴问题。', href: '/docs/paste-methods' },
            { title: '后处理', body: '用 AI 修正语法、补标点、改写格式。', href: '/docs/post-processing' },
            { title: '命令行', body: '参数、Unix 信号与窗口管理器集成。', href: '/docs/cli' },
          ].map((doc) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="group rounded-xl border bg-fd-card p-6 transition-colors hover:border-fd-primary/50"
            >
              <h3 className="font-semibold group-hover:text-fd-primary">{doc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{doc.body}</p>
              <span className="mt-4 inline-block text-sm text-fd-primary">阅读 →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y bg-fd-muted/20">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-fd-primary">常见问题</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">你可能想知道</h2>
          </div>
          <div className="mt-8 divide-y rounded-xl border bg-fd-card">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.q}
                  <span className="text-fd-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-fd-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-fd-muted-foreground">
            更多问题见{' '}
            <Link href="/docs/faq" className="text-fd-primary hover:opacity-80">
              文档中的常见问题
            </Link>
            。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border bg-fd-card px-6 py-14 text-center">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-fd-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-bold tracking-tight">准备好开始了吗？</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-fd-muted-foreground">
            下载 Handy，体验真正的离线语音转文字。不需要账号，不需要订阅。
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/cjpais/Handy/releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              立即下载
            </a>
            <a
              href="https://github.com/cjpais/Handy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:bg-fd-accent sm:w-auto"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
