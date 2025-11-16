import Image from 'next/image';
import { ContentSection } from '@/types/document-maker';

interface ContentRendererProps {
  sections: ContentSection[];
}

export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <>
      {sections.map((section, index) => (
        <div key={section.id || index}>
          {renderSection(section)}
        </div>
      ))}
    </>
  );
}

function renderSection(section: ContentSection) {
  switch (section.type) {
    case 'heading':
      const HeadingTag = `h${section.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className={section.className || ''}>
          {section.content}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p className={section.className || ''}>
          {section.content}
        </p>
      );

    case 'list':
      const ListTag = section.ordered ? 'ol' : 'ul';
      return (
        <div>
          {section.title && (
            <h3 className="font-semibold mb-2">{section.title}</h3>
          )}
          <ListTag className={`${section.ordered ? 'list-decimal' : 'list-disc'} list-inside ${section.className || ''}`}>
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ListTag>
        </div>
      );

    case 'image':
      return (
        <div className={`text-center ${section.className || ''}`}>
          <Image
            src={section.src}
            alt={section.alt}
            width={800}
            height={600}
            className="max-w-full h-auto rounded shadow"
            priority
          />
          {section.caption && (
            <p className="text-sm text-gray-600 mt-2">{section.caption}</p>
          )}
        </div>
      );

    case 'two-column':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {section.columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <ContentRenderer sections={column} />
            </div>
          ))}
        </div>
      );

    case 'traits-box':
      return (
        <div className="border-2 border-[#d9c5a0] rounded-lg p-4 mb-4">
          <h3 className="font-serif text-lg mb-3 text-center">{section.title}</h3>
          <div className="space-y-1">
            {Object.entries(section.traits).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-semibold">{key}:</span> {value}
              </div>
            ))}
          </div>
        </div>
      );

    case 'preformatted':
      return (
        <pre className="whitespace-pre-wrap font-serif text-[11pt] leading-[1.6] text-black">
          {section.content}
        </pre>
      );

    default:
      console.warn('Unknown section type:', section);
      return null;
  }
}











