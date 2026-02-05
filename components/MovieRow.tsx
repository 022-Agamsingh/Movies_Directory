'use client';

import StreamingCard from './StreamingCard';

interface Movie {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  year?: string;
  genre?: string[];
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({
  title,
  movies,
}: MovieRowProps) {
  return (
    <div className="mb-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
        {movies.map((movie) => (
          <StreamingCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            year={movie.year}
          />
        ))}
      </div>
    </div>
  );
}
