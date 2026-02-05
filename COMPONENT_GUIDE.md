# 🎬 Component Usage Guide

## Quick Reference for Building Pages

### 1. Navbar Component

```tsx
import Navbar from '@/components/Navbar';

<Navbar />;
```

**Features:**

- Fixed positioning with backdrop blur
- Responsive mobile menu
- Search, notifications, and user avatar icons

---

### 2. Hero Component

```tsx
import Hero from '@/components/Hero';

<Hero
    title="Movie Title"
    description="Brief description of the movie"
    backdrop="https://image-url.jpg"
/>;
```

**Props:**

- `title` (string): Main heading
- `description` (string): Subtitle text
- `backdrop` (string): Background image URL

---

### 3. StreamingCard Component

```tsx
import StreamingCard from '@/components/StreamingCard';

<StreamingCard
    title="Movie Title"
    poster="https://poster-url.jpg"
    rating={7.5} // Optional
    progress={45} // Optional (0-100)
    showPlayButton={true} // Optional
    size="medium" // 'small' | 'medium' | 'large'
/>;
```

**Props:**

- `title` (string): Movie title
- `poster` (string): Poster image URL
- `rating` (number, optional): Rating out of 10
- `progress` (number, optional): Progress percentage (0-100)
- `showPlayButton` (boolean, optional): Show play icon on hover
- `size` ('small' | 'medium' | 'large', optional): Card size

---

### 4. MovieRow Component

```tsx
import MovieRow from '@/components/MovieRow';

const movies = [
    {
        id: 1,
        title: 'Movie 1',
        poster: 'url',
        rating: 7.5,
        genre: ['Action'],
    },
    // ... more movies
];

<MovieRow
    title="Trending Movies"
    movies={movies}
    showPlayButton={false} // Optional
    cardSize="medium" // Optional
    showSeeMore={true} // Optional
/>;
```

**Props:**

- `title` (string): Section heading
- `movies` (Movie[]): Array of movie objects
- `showPlayButton` (boolean, optional): Show play button on cards
- `cardSize` ('small' | 'medium' | 'large', optional): Card size
- `showSeeMore` (boolean, optional): Show "See more" link

**Movie Object:**

```typescript
{
  id: number;
  title: string;
  poster: string;
  rating?: number;
  progress?: number;
  genre?: string[];
}
```

---

### 5. GenreFilter Component

```tsx
import GenreFilter from '@/components/GenreFilter';

const genres = ['All Popular', 'Action', 'Animation', 'Comedy'];

<GenreFilter
    genres={genres}
    onGenreChange={(genre) => console.log(genre)} // Optional
/>;
```

**Props:**

- `genres` (string[]): Array of genre names
- `onGenreChange` (function, optional): Callback when genre is selected

---

### 6. Footer Component

```tsx
import Footer from '@/components/Footer';

<Footer />;
```

**Features:**

- Company, Support, and Content links
- Social media icons
- Copyright and legal links

---

## 📋 Complete Page Example

```tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MovieRow from '@/components/MovieRow';
import GenreFilter from '@/components/GenreFilter';
import Footer from '@/components/Footer';
import moviesData from '@/data/movies.json';

export default function Page() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <Hero
                title="Featured Movie"
                description="Amazing movie description"
                backdrop="/hero-image.jpg"
            />

            <div className="relative -mt-32 z-10">
                <MovieRow title="Trending Now" movies={moviesData.trending} />

                <GenreFilter genres={['All', 'Action', 'Comedy']} />

                <MovieRow
                    title="Continue Watching"
                    movies={moviesData.continueWatching}
                    showPlayButton={true}
                    cardSize="large"
                />
            </div>

            <Footer />
        </div>
    );
}
```

---

## 🎨 Styling Tips

### Custom Colors

```tsx
// Red accent (primary)
className = 'bg-red-600 text-white';

// Dark background
className = 'bg-black';

// Gradient overlay
className = 'bg-gradient-to-t from-black to-transparent';
```

### Hover Effects

```tsx
// Scale on hover
className = 'group-hover:scale-110 transition-transform duration-300';

// Opacity on hover
className = 'opacity-0 group-hover:opacity-100 transition-opacity';
```

### Responsive Spacing

```tsx
// Responsive padding
className = 'px-4 sm:px-6 lg:px-8';

// Responsive text
className = 'text-2xl md:text-4xl lg:text-5xl';
```

---

## 📊 Data Structure

### movies.json Structure

```json
{
  "hero": {
    "id": 1,
    "title": "Movie Title",
    "description": "Description",
    "backdrop": "url",
    "genre": ["Action", "Adventure"]
  },
  "trending": [
    {
      "id": 101,
      "title": "Movie 1",
      "poster": "url",
      "genre": ["Animation"],
      "rating": 7.4
    }
  ],
  "continueWatching": [
    {
      "id": 201,
      "title": "Movie 2",
      "poster": "url",
      "progress": 45,
      "genre": ["Animation"]
    }
  ],
  "popular": [...],
  "genres": ["All Popular", "Action", ...]
}
```

---

## 🛠️ Common Patterns

### Creating a New Section

```tsx
<MovieRow
    title="Your Section Title"
    movies={yourMovieArray}
    cardSize="medium"
/>
```

### Adding Continue Watching Progress

```tsx
const continueWatching = [
    {
        id: 1,
        title: 'Movie',
        poster: 'url',
        progress: 65, // 0-100
    },
];

<MovieRow
    title="Continue Watching"
    movies={continueWatching}
    showPlayButton={true}
/>;
```

### Customizing Card Sizes

```tsx
// Small cards (140-176px)
<MovieRow cardSize="small" movies={movies} />

// Medium cards (176-208px) - Default
<MovieRow cardSize="medium" movies={movies} />

// Large cards (208-256px)
<MovieRow cardSize="large" movies={movies} />
```

---

## 🎯 Best Practices

1. **Always wrap content in dark background**: `bg-black`
2. **Use relative positioning for overlapping sections**: `-mt-32 z-10`
3. **Add proper spacing between sections**: `mb-8`
4. **Use responsive utilities**: `px-4 sm:px-6 lg:px-8`
5. **Test on multiple screen sizes**
6. **Keep movie arrays in separate data files**
7. **Use semantic HTML** where possible
8. **Add loading="lazy"** to images for performance

---

## 🚀 Performance Tips

- Images use `loading="lazy"` attribute
- Smooth scroll uses CSS `scroll-smooth`
- Transitions are GPU-accelerated (`transform`, `opacity`)
- Scrollbars hidden with custom CSS class
- Use proper image dimensions in data

---

## 📱 Responsive Behavior

- **Mobile (< 768px)**:
    - Hamburger menu
    - Single column layout
    - Smaller cards
- **Tablet (768-1024px)**:
    - Condensed navigation
    - Medium cards
- **Desktop (> 1024px)**:
    - Full navigation
    - Large hero section
    - Multiple cards visible

---

**Happy Coding! 🎬✨**
