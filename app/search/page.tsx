'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import { searchMovies } from '@/actions/movies';
import { TMovie } from '@/lib/schemas/movie-schemas';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || '';
    const [movies, setMovies] = useState<TMovie[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [ref, inView] = useInView();

    useEffect(() => {
        setMovies([]);
        setPage(1);
        setLoading(true);
    }, [query]);

    useEffect(() => {
        if (!inView || !query || page === 0) return;

        searchMovies(query, page).then((newMovies) => {
            // Combine with existing movies and filter duplicates
            setMovies((prevMovies) => {
                const combined = [...prevMovies, ...newMovies];
                // Remove duplicates based on movie id
                const uniqueMovies = combined.filter((movie, index, self) =>
                    index === self.findIndex((m) => m.id === movie.id)
                );
                return uniqueMovies;
            });
            setLoading(false);
        });
    }, [page, query, inView]);

    useEffect(() => {
        if (!inView) return;

        setPage((prevPage) => prevPage + 1);
    }, [inView]);

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Navbar />
            <div className="container pt-20">
                <h1 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    Search Results for &quot;{query}&quot;
                </h1>
                {loading && movies.length === 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-300 dark:bg-gray-800 aspect-[2/3] rounded-lg" />
                                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded mt-2" />
                            </div>
                        ))}
                    </div>
                ) : movies.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No movies found for &quot;{query}&quot;
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                        {movies.map((movie, index) => (
                            <MovieCard key={`${movie.id}-${index}`} movie={movie} />
                        ))}
                    </div>
                )}
                <div ref={ref} className="h-10" />
            </div>
        </div>
    );
}
