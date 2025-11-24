import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  id: string;
  index: number;
  background: string;
  className?: string;
}

export function Page({ children, id, index, background, className = '' }: PageProps) {
  return (
    <section 
      id={id} 
      className={`page-container scroll-snap-item ${className}`}
      style={{ background }}
    >
      <div className="page-content">
        {children}
      </div>
      <div className="page-number">
        {index}
      </div>
    </section>
  );
}














