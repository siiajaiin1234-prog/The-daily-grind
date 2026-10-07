import React from 'react';
import { Wifi, Sun, Music, Heart, Sparkles, Dog } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      title: 'Sunlit Reading Corner',
      desc: 'Floor-to-ceiling windows with reclaimed Douglas fir communal tables.',
    },
    {
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      title: 'The Open Pour-Over Bar',
      desc: 'Watch our baristas dial in extraction on dual Acaia lunar scales.',
    },
    {
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
      title: 'Cozy Fireside Seating',
      desc: 'Vintage leather armchairs for lingering over long conversations and journals.',
    },
    {
      url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      title: 'The Roaster’s Lab',
      desc: 'Our working cupping table and Diedrich infrared roaster open to view.',
    },
  ];

  return (
    <section id="atmosphere" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C87941]" />
            Your Third Place
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201712] tracking-tight">
            An Intentional Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C50] font-light mt-3">
            Designed as a calm respite from the digital rush. Natural light, tactile ceramics, warm acoustic jazz, and the steady hum of roasting coffee.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-sm hover:shadow-xl transition-all aspect-[3/4]"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="font-serif text-lg font-bold">{photo.title}</h3>
                <p className="text-xs text-white/80 mt-1 font-light leading-relaxed">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cafe Amenities Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8DEC8] shadow-sm">
          <div className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#C87941] flex items-center justify-center mb-2">
              <Wifi className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#201712]">Gigabit Fiber Wi-Fi</p>
            <p className="text-[11px] text-[#7E7267] mt-0.5">Complimentary for all guests</p>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#C87941] flex items-center justify-center mb-2">
              <Sun className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#201712]">Sunlit Courtyard</p>
            <p className="text-[11px] text-[#7E7267] mt-0.5">Heated outdoor patio tables</p>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#C87941] flex items-center justify-center mb-2">
              <Dog className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#201712]">Pup-Friendly Patio</p>
            <p className="text-[11px] text-[#7E7267] mt-0.5">Fresh water bowls & oat treats</p>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#C87941] flex items-center justify-center mb-2">
              <Music className="w-5 h-5" />
            </div>
            <p className="font-bold text-xs sm:text-sm text-[#201712]">Vinyl Turntable</p>
            <p className="text-[11px] text-[#7E7267] mt-0.5">Warm jazz, soul & ambient records</p>
          </div>
        </div>
      </div>
    </section>
  );
};
