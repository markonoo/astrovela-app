'use client';

import { useState, useEffect, useMemo } from 'react';
import { ScrollHeaderProps } from '@/types/document-maker';

export function ScrollHeader({ total, current, deepLinkingEnabled, onJump }: ScrollHeaderProps) {
  const pct = useMemo(() => Math.round((current / total) * 100), [current, total]);
  const [input, setInput] = useState(current);
  
  useEffect(() => setInput(current), [current]);

  return (
    <div className="sticky top-0 z-50 border-b backdrop-blur bg-white/70">
      <div className="flex items-center gap-3 px-4 py-2">
        <strong>Page {current} / {total}</strong>
        <span className="text-xs border rounded-full px-2 py-0.5">
          {deepLinkingEnabled ? "links on" : "links off (sandbox)"}
        </span>
        <input
          className="w-20 border rounded px-2 py-1"
          type="number"
          min={1}
          max={total}
          value={input}
          onChange={(e) => setInput(parseInt(e.target.value || "1", 10))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onJump(Math.min(total, Math.max(1, input)));
            }
          }}
        />
        <button 
          onClick={() => onJump(current - 1)} 
          disabled={current <= 1}
          className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button 
          onClick={() => onJump(current + 1)} 
          disabled={current >= total}
          className="px-3 py-1 bg-gray-100 rounded disabled:opacity-50"
        >
          Next
        </button>
        <div className="ml-auto w-40 h-2 bg-neutral-200 rounded overflow-hidden">
          <div 
            className="h-full bg-black transition-all duration-300" 
            style={{ width: `${pct}%` }} 
          />
        </div>
      </div>
    </div>
  );
}


