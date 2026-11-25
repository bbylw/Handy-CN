'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';

const translations: Record<string, string> = {
  'Search(search dialog)': '搜索文档',
  'Search(search trigger)': '搜索',
  'Open Search(search trigger)(aria-label)': '打开搜索',
  'Close Search(search dialog)(aria-label)': '关闭搜索',
  'No results found(search dialog)': '没有找到相关内容',
  'Search failed(search dialog)': '搜索失败',
  'Search failed, showing results for {query}(search dialog)': '搜索失败，正在显示「{query}」的结果',
  'On this page(table of contents)': '本页目录',
  'Table of Contents(inline table of contents)': '目录',
  'No Headings(table of contents)': '本页暂无标题',
  'Edit on GitHub(edit page)': '在 GitHub 上编辑',
  'Copy Markdown(page actions)': '复制 Markdown',
  'Copied Markdown(page actions)': '已复制',
  'View as Markdown(page actions)': '以 Markdown 查看',
  'Open in GitHub(page actions)': '在 GitHub 中打开',
  'Open in ChatGPT(page actions)': '在 ChatGPT 中打开',
  'Open in Claude(page actions)': '在 Claude 中打开',
  'Open in Cursor(page actions)': '在 Cursor 中打开',
  'Open(page actions)': '打开',
  'Previous Page(pagination)': '上一页',
  'Next Page(pagination)': '下一页',
  'Last updated on(page footer)': '最后更新于',
  'Copy Text(code block)(aria-label)': '复制代码',
  'Copied Text(code block)(aria-label)': '已复制',
  'Copy Anchor Link(heading anchor)(aria-label)': '复制标题链接',
  'Copied Anchor Link(heading anchor)(aria-label)': '已复制链接',
  'Toggle Theme(theme switcher)(aria-label)': '切换主题',
  'Light(theme switcher)(aria-label)': '浅色',
  'Dark(theme switcher)(aria-label)': '深色',
  'System(theme switcher)(aria-label)': '跟随系统',
  'Theme(site menu)': '主题',
  'Toggle Menu(home layout header)(aria-label)': '展开菜单',
  'Open Sidebar(aria-label)': '打开侧边栏',
  'Open Sidebar(sidebar)(aria-label)': '打开侧边栏',
  'Close Sidebar(aria-label)': '关闭侧边栏',
  'Close Sidebar(sidebar)(aria-label)': '关闭侧边栏',
  'Show Sidebar(sidebar)': '显示侧边栏',
  'Hide Sidebar(sidebar)': '隐藏侧边栏',
  'Collapse Sidebar(sidebar)(aria-label)': '收起侧边栏',
  'Skip to Content(skip link)': '跳到正文',
  'Page Not Found(404 not found page)': '页面不存在',
  'Back to Home(404 not found page)': '返回首页',
  'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 not found page)':
    '你访问的页面可能已被移除、重命名，或暂时不可用。',
  'Close Banner(banner)(aria-label)': '关闭提示',
  'Close(image zoom)(aria-label)': '关闭',
  'Next Image(image zoom)(aria-label)': '下一张',
  'Previous Image(image zoom)(aria-label)': '上一张',
  'Image Viewer(image zoom)(aria-label)': '图片查看',
  'Copied Link(accordion)(aria-label)': '已复制链接',
  'Copy Link(accordion)(aria-label)': '复制链接',
};

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={{ locale: 'zh-CN', translations }}
    >
      {children}
    </RootProvider>
  );
}
