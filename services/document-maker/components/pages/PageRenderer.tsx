import { PageData } from '@/types/content';
import { Page } from '@/components/ui/Page';
import { ContentRenderer } from '@/components/sections/ContentRenderer';

interface PageRendererProps {
  pageData: PageData;
}

export function PageRenderer({ pageData }: PageRendererProps) {
  return (
    <Page
      id={pageData.id}
      index={pageData.number}
      background={pageData.background}
      className={getPageClassName(pageData.type)}
    >
      <ContentRenderer sections={pageData.sections} />
    </Page>
  );
}

function getPageClassName(type: string): string {
  switch (type) {
    case 'zodiac-sign':
    case 'zodiac-inner':
      return 'text-zodiac-gold';
    case 'illustration':
      return 'flex items-center justify-center';
    default:
      return 'text-black';
  }
}
