'use client';

import { Play, Info } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  backdrop: string;
}

export default function Hero({ title, description, backdrop }: HeroProps) {
  return (
    <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6 pt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            {description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-md border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105">
              <Info className="w-5 h-5" />
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
