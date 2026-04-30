import { Star } from "lucide-react";

export function StarRating({
  rating,
  size = 14,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} of 5`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = rating >= i + 0.5;
        return (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            className={filled ? "fill-ink text-ink" : "text-ink"}
          />
        );
      })}
    </div>
  );
}
