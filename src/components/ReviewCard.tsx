interface ReviewCardProps {
  place: string;
  reviewer: string;
  meta: string;
  stars: number;
  body: string;
  when?: string;
}

export default function ReviewCard({ place, reviewer, meta, stars, body, when }: ReviewCardProps) {
  const initial = reviewer.trim().charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 h-full">
      <div className="text-xs font-semibold text-blue-gray uppercase tracking-wide">
        {place}
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full bg-blue-gray text-white flex items-center justify-center font-bold text-lg flex-shrink-0"
          aria-hidden="true"
        >
          {initial}
        </div>
        <div>
          <div className="font-semibold text-dark-green leading-tight">{reviewer}</div>
          <div className="text-xs text-gray-500 leading-tight">{meta}</div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1" role="img" aria-label={`${stars} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              viewBox="0 0 20 20"
              className="w-5 h-5"
              fill={i <= stars ? '#fbbc04' : '#e0e0e0'}
              aria-hidden="true"
            >
              <path d="M10 1.5l2.6 5.4 6 .8-4.3 4.2 1 6-5.3-2.9-5.3 2.9 1-6L1.4 7.7l6-.8L10 1.5z" />
            </svg>
          ))}
        </div>
        {when && <div className="text-xs text-gray-500 flex-shrink-0">{when}</div>}
      </div>

      <p className="text-foreground leading-relaxed">{body}</p>
    </div>
  );
}
