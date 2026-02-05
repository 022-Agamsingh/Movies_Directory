'use client';

import { useState } from 'react';

interface GenreFilterProps {
  genres: string[];
  onGenreChange?: (genre: string) => void;
}

export default function GenreFilter({ genres, onGenreChange }: GenreFilterProps) {
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  const handleGenreClick = (genre: string) => {
    setActiveGenre(genre);
    onGenreChange?.(genre);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className={`
              flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${
                activeGenre === genre
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white'
              }
            `}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
