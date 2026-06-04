export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-gold">
        <path
          d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      <path
        d="M2 2 L40 2 M2 2 L2 40 M2 2 Q20 8 22 22 Q8 20 2 2 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <circle cx="22" cy="22" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
