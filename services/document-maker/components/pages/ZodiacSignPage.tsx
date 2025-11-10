import { PageData } from '@/types/content';
import { ContentRenderer } from '@/components/sections/ContentRenderer';

interface ZodiacSignPageProps {
  data: PageData;
}

export function ZodiacSignPage({ data }: ZodiacSignPageProps) {
  return (
    <div className="h-full text-zodiac-gold">
      <div className="absolute inset-[10mm] rounded-[8mm] border-2 border-zodiac-gold p-[10mm]">
        <ContentRenderer sections={data.sections} />
        
        {/* Metadata display */}
        {data.metadata && (
          <div className="mt-6 text-sm">
            {data.metadata.dateRange && (
              <p className="text-center opacity-75">
                {data.metadata.dateRange}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
