import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { homeOptions } from '@/lib/layout.shared';
import { SiteFooter } from '@/components/site-footer';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...homeOptions()}>
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </HomeLayout>
  );
}
