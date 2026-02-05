'use server';

import {
    creditsSchema,
    movieDetailsSchema,
    recommendationsSchema,
    TMovie,
} from '@/lib/schemas/movie-schemas';
import { notFound } from 'next/navigation';

const API_KEY = process.env.TMDB_API_KEY;

export const getMovies = async (page: number): Promise<TMovie[]> => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`,
            {
                next: { revalidate: 3600 },
                cache: 'force-cache'
            }
        );

        if (!res.ok) {
            console.error('Failed to fetch movies');
            return [];
        }
        const data = await res.json();
        return data.results as Promise<TMovie[]>;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const searchMovies = async (query: string, page: number) => {
    if (!query || query.length < 3) {
        return [];
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&include_adult=false`,
            {
                next: { revalidate: 3600 },
                cache: 'force-cache',
                signal: controller.signal,
            },
        );

        clearTimeout(timeoutId);

        if (!res.ok) {
            console.warn('Failed to fetch search results');
            return [];
        }

        const data = await res.json();
        return data.results as TMovie[];
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.warn('Timeout searching movies');
        } else {
            console.warn('Error searching movies:', error);
        }
        return [];
    }
};

export const getMovieDetails = async (id: string) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
            {
                next: { revalidate: 86400 },
                cache: 'force-cache',
                signal: controller.signal
            },
        );

        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`Failed to fetch movie details for ID ${id}`);
        const data = await res.json();

        try {
            return movieDetailsSchema.parse(data);
        } catch (error) {
            console.warn(`Movie details validation error for ID ${id}:`, error);
            throw new Error('Invalid movie data received from API');
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.warn(`Timeout fetching movie details for ID ${id}`);
        }
        throw error;
    }
};

export const getMovieCredits = async (id: string) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`,
            {
                next: { revalidate: 86400 },
                cache: 'force-cache',
                signal: controller.signal
            },
        );

        clearTimeout(timeoutId);

        if (!res.ok) throw new Error(`Failed to fetch cast data for ID ${id}`);
        const data = await res.json();

        try {
            return creditsSchema.parse(data);
        } catch (error) {
            console.warn(`Credits validation error for ID ${id}:`, error);
            throw new Error('Invalid credits data received from API');
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.warn(`Timeout fetching credits for ID ${id}`);
        }
        throw error;
    }
};

export const getMovieRecommendations = async (id: string) => {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}`,
            {
                next: { revalidate: 86400 },
                cache: 'force-cache',
                signal: controller.signal
            },
        );

        clearTimeout(timeoutId);

        if (!res.ok) {
            console.warn(`Failed to fetch recommendations for movie ID ${id}`);
            return { results: [] };
        }

        const data = await res.json();

        try {
            return recommendationsSchema.parse(data);
        } catch (error) {
            console.warn(`Recommendations validation error for movie ID ${id}:`, error);
            return { results: [] };
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.warn(`Timeout fetching recommendations for movie ID ${id}`);
        } else {
            console.warn(`Error fetching recommendations for movie ID ${id}:`, error);
        }
        return { results: [] };
    }
};
