# 🎬 Moov - Movie Streaming Platform

A modern, Netflix-inspired movie streaming website built with Next.js 14, TypeScript, and Tailwind CSS. Browse thousands of movies, search, view detailed information including cast and crew, and enjoy a beautiful dark/light theme interface.

## 🚀 Live Demo

**[View Live Demo on Vercel](https://movies-directory-rouge.vercel.app/)**

## 📊 Dataset Used & Source

This project uses real-time movie data from **The Movie Database (TMDB) API**.

- **Source**: [TMDB API](https://www.themoviedb.org/documentation/api)
- **Data Includes**:
    - Movie posters, backdrops, and promotional images
    - Movie titles, descriptions, and taglines
    - Release dates, ratings, and vote counts
    - Cast and crew information
    - Movie recommendations
    - Genre classifications
    - Search functionality across 500,000+ movies

## ✨ Features Implemented

### Core Features

- 🎥 **Movie Browsing** - Grid layout displaying popular movies with posters
- 🔍 **Search Functionality** - Real-time search with TMDB API integration
- 📄 **Movie Details Page** - Complete information including:
    - Movie overview and tagline
    - Release date and ratings
    - Full cast with character names and photos
    - Crew members (directors, producers, writers)
    - Movie recommendations
- 🎨 **Dark/Light Theme Toggle** - Seamless theme switching with persistence
- 📱 **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ♥️ **Watchlist Feature** - Save your favorite movies
- 🎭 **Genre Filtering** - Filter movies by categories (Action, Comedy, Horror, etc.)
- ⚡ **Infinite Scroll** - Load more search results automatically

### UI/UX Features

- Smooth hover animations on movie cards
- Expandable search bar in navbar
- Loading skeletons for better UX
- Cinematic hero banner with gradient overlays
- Custom scrollbar styling
- Toast notifications for user actions

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

### State Management & Data Fetching

- **React Hooks** - `useState`, `useEffect`, `useSearchParams`
- **Next.js Server Actions** - API route handlers
- **SWR / Fetch API** - Data fetching with caching

### Deployment & Tools

- **Vercel** - Hosting and deployment
- **Git & GitHub** - Version control
- **ESLint & Prettier** - Code quality

## 📡 How Data Is Generated / Fetched

### API Integration

All movie data is fetched from **TMDB API** using server-side functions in `/actions/movies.ts`:

```typescript
// Example: Fetching popular movies
export async function getMovies(category: string, page: number = 1) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${page}`,
        { next: { revalidate: 86400 } }, // Cache for 24 hours
    );
    return res.json();
}
```

### Data Flow

1. **Server-side fetching** - API calls made on the server for better performance
2. **ISR (Incremental Static Regeneration)** - Pages cached and revalidated every 24 hours
3. **Client-side search** - Dynamic search with debouncing
4. **Error handling** - 10-second timeout with graceful fallbacks

### Environment Variables

```env
TMDB_API_KEY=your_api_key_here
```

## 🤖 AI Tools & Prompt Examples

### GitHub Copilot Usage

This project was built with assistance from **GitHub Copilot** and **Claude Sonnet 4.5**. Here are some example prompts used:

#### Component Development

```
"Create a reusable StreamingCard component that:
- Has smooth hover scale effect
- Links to movie detail page
- Is fully responsive"
```

#### API Integration

```
"Add search functionality that:
- Fetches from TMDB API
- Has 10-second timeout
- Removes duplicate results
- Implements infinite scroll
- Shows loading states"
```

#### Bug Fixes

```
"Fix React hydration error caused by theme toggle button
by ensuring server and client render the same HTML"
```

### AI-Assisted Features

- ✅ Component architecture and structure
- ✅ Tailwind CSS responsive classes
- ✅ TypeScript type definitions
- ✅ Error handling and edge cases
- ✅ Accessibility improvements
- ✅ Performance optimizations

## 📁 Project Structure

```
assignment-ngrk/
├── app/
│   ├── movies/[id]/         # Movie detail page
│   │   └── page.tsx
│   ├── search/              # Search results page
│   │   └── page.tsx
│   ├── watchlist/           # Watchlist page
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page (streaming grid)
│   └── globals.css          # Global styles
│
├── components/
│   ├── Navbar.tsx           # Main navigation with search
│   ├── Hero.tsx             # Hero banner component
│   ├── StreamingCard.tsx    # Movie card component
│   ├── MovieRow.tsx         # Horizontal movie carousel
│   ├── GenreFilter.tsx      # Genre filter pills
│   └── Header.tsx           # Alternative header
│
├── actions/
│   └── movies.ts            # TMDB API functions
│
├── data/
│   └── movies.json          # Static mock data
│
├── lib/
│   └── utils.ts             # Utility functions
│
├── public/                  # Static assets
├── .env.local               # Environment variables (not in Git)
└── package.json             # Dependencies
```

## 🏃‍♂️ How to Run Locally

### Prerequisites

- **Node.js** 18+ installed
- **TMDB API Key** (free from [TMDB](https://www.themoviedb.org/settings/api))

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/022-Agamsingh/Movies_Directory.git
cd Movies_Directory/assignment-ngrk
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
TMDB_API_KEY=your_api_key_here
```

To get your API key:

- Go to [TMDB](https://www.themoviedb.org/)
- Sign up for a free account
- Navigate to Settings → API
- Copy your API Key (v3 auth)

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**

```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variable: `TMDB_API_KEY`
5. Deploy!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Agam Singh**

- GitHub: [@022-Agamsingh](https://github.com/022-Agamsingh)
- Repository: [Movies_Directory](https://github.com/022-Agamsingh/Movies_Directory)

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Design inspiration from [Moov - Movie Landing Page on Dribbble](https://dribbble.com/shots/22869557-Moov-Movie-Landing-Page)
- Built with guidance from **GitHub Copilot** and **Claude Sonnet 4.5**
- Inspired by Netflix, Disney+, and modern streaming platforms

---

⭐ **Star this repo** if you found it helpful!
