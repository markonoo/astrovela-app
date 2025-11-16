import { PageData } from '@/types/document-maker';
import { ContentRenderer } from '@/components/document-maker/sections/ContentRenderer';

interface ZodiacSignPageProps {
  data: PageData;
}

export function ZodiacSignPage({ data }: ZodiacSignPageProps) {
  return (
    <div className="h-full text-[#d9c5a0]">
      <div className="absolute inset-[10mm] rounded-[8mm] border-2 border-[#d9c5a0] p-[10mm]">
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









