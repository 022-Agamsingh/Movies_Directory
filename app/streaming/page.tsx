import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MovieRow from '@/components/MovieRow';
import GenreFilter from '@/components/GenreFilter';
import Footer from '@/components/Footer';
import moviesData from '@/data/movies.json';

export default function StreamingHome() {
  return (
    <div className="min-h-screen bg-white dark:bg-black -mt-[88px]" data-streaming-page>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title={moviesData.hero.title}
        description={moviesData.hero.description}
        backdrop={moviesData.hero.backdrop}
      />

      {/* Main Content */}
      <div className="relative -mt-32 z-10">
        {/* Trending Movies Section */}
        <MovieRow
          title="Trending Movies"
          movies={moviesData.trending}
        />

        {/* Genre Filter */}
        <GenreFilter genres={moviesData.genres} />

        {/* Popular on Platform Section */}
        <MovieRow
          title="Popular on Moov"
          movies={moviesData.popular}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
