# 🎬 Moov - Modern Movie Streaming Platform

A beautiful, Netflix-inspired movie streaming website frontend built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **🎨 Dark Cinematic Theme** - Immersive dark mode design with high contrast
- **🎭 Hero Banner** - Full-width hero section with gradient overlays
- **🎞️ Horizontal Carousels** - Smooth scrolling movie rows with hover effects
- **🎯 Genre Filters** - Dynamic genre filtering with pill buttons
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
- **⚡ Smooth Animations** - Hover effects, transitions, and fade-ins
- **🎪 Continue Watching** - Progress tracking with play button overlays

## 🚀 Quick Start

### View the Streaming Page

Navigate to: `/streaming`

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/streaming`

## 📁 Project Structure

```
app/
├── streaming/
│   └── page.tsx         # Main streaming homepage
components/
├── Navbar.tsx           # Sticky navigation with blur effect
├── Hero.tsx             # Hero banner with CTA buttons
├── StreamingCard.tsx    # Movie card with hover effects
├── MovieRow.tsx         # Horizontal scrolling carousel
├── GenreFilter.tsx      # Genre filter pills
└── Footer.tsx           # Footer with links and social icons
data/
└── movies.json          # Static mock data
```

## 🎨 Components

### Navbar

- Sticky header with backdrop blur
- Logo, navigation links, search, notifications, user avatar
- Mobile-responsive hamburger menu

### Hero

- Full-width background image with gradient overlays
- Movie title and description
- "Watch Now" and "Details" CTA buttons
- Responsive design with proper spacing

### StreamingCard

- Movie poster with aspect ratio 2:3
- Hover scale effect with shadow
- Rating badge (star icon)
- Progress bar for continue watching
- Play button overlay
- Title reveal on hover

### MovieRow

- Horizontal scrolling container
- Left/right scroll buttons (visible on hover)
- "See more" link in section header
- Smooth scroll behavior
- Support for different card sizes

### GenreFilter

- Horizontal scrolling genre pills
- Active state highlighting (red background)
- Smooth transitions

### Footer

- Company, Support, and Content links
- Social media icons (Facebook, Twitter, Instagram, YouTube)
- Copyright and legal links

## 🎯 Design Features

### Color Palette

- **Primary Black**: `#000000`
- **Accent Red**: `#DC2626` (red-600)
- **Text White**: `#FFFFFF`
- **Gray Tones**: Various shades for subtle elements

### Typography

- Bold headings for impact
- Semibold for section titles
- Regular weight for descriptions
- Proper hierarchy and spacing

### Interactions

- **Hover Scale**: Cards scale to 110% on hover
- **Shadow Effects**: Glow effects on hover (red-900/20)
- **Smooth Transitions**: 200-300ms duration
- **Backdrop Blur**: On navbar for depth
- **Gradient Overlays**: For text readability

## 📊 Mock Data Structure

```json
{
  "hero": {
    "title": "Movie Title",
    "description": "Movie description",
    "backdrop": "image-url"
  },
  "trending": [...],
  "continueWatching": [...],
  "popular": [...],
  "genres": [...]
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Source**: Unsplash (placeholders)

## 🎬 Sections Overview

1. **Hero Section** - Featured movie with large backdrop
2. **Trending Movies** - Horizontal carousel with ratings
3. **Genre Filter** - Interactive filter pills
4. **Continue Watching** - Shows progress with play buttons
5. **Popular on Moov** - Another movie carousel
6. **Footer** - Links and social media

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Tailwind Custom Classes

```css
.scrollbar-hide - Hides scrollbar for clean carousels
Custom scrollbar styling for main page
Smooth font rendering
```

## 🚀 Future Enhancements

- [ ] API integration with TMDB or similar
- [ ] User authentication
- [ ] Watchlist functionality
- [ ] Video player integration
- [ ] Search functionality
- [ ] Filter by genre (functional)
- [ ] Skeleton loading states

## 📝 Notes

- No backend implementation (static data only)
- Images use Unsplash placeholders
- Focus on UI/UX and visual design
- Production-ready component structure
- Easy to extend with real APIs

## 🎯 Design Inspiration

Based on modern streaming platforms like:

- Netflix
- Disney+
- HBO Max
- Prime Video

## 💻 Development

### Adding More Movies

Edit `data/movies.json`:

```json
{
    "trending": [
        {
            "id": 101,
            "title": "Movie Title",
            "poster": "image-url",
            "rating": 7.5,
            "genre": ["Action", "Adventure"]
        }
    ]
}
```

### Customizing Styles

All components use Tailwind CSS classes. Modify directly in component files or extend in `tailwind.config.ts`.

### Creating New Sections

Use the `MovieRow` component:

```tsx
<MovieRow
    title="New Section"
    movies={yourMovieArray}
    cardSize="medium"
    showPlayButton={false}
/>
```

## 📄 License

This is a frontend UI project for demonstration purposes.

---

**Built with ❤️ using Next.js and Tailwind CSS**
