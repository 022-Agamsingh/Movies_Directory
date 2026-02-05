'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import { generateTmdbImagePath } from '@/lib/tmdb-image-path';

interface StreamingCardProps {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  year?: string;
}

export default function StreamingCard({
  id,
  title,
  poster,
  rating,
  year,
}: StreamingCardProps) {
  // Check if poster is a TMDB path or external URL
  const posterUrl = poster.startsWith('http') 
    ? poster 
    : generateTmdbImagePath(poster, 342);

  return (
    <Link href={`/movies/${id}`} className="group cursor-pointer block">
      <div className="aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          loading="lazy"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-sm leading-snug font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h2>
        <div className="flex gap-2 items-center mt-1">
          {rating && (
            <>
              <div className="flex gap-1 items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <p className="text-sm text-gray-400">
                  {rating}
                </p>
              </div>
              {year && (
                <>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <p className="text-sm text-gray-400">{year}</p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
