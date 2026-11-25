import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Handy 中文';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';

// where the docs content lives, used by the "edit on GitHub" action
export const gitConfig = {
  user: 'bbylw',
  repo: 'Handy-CN',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
