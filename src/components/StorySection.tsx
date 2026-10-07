import React from 'react';
import { Sparkles, HeartHandshake, Leaf, Flame } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE7DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80"
                    alt="Barista brewing coffee at the counter"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#E8DEC8] p-6 flex flex-col justify-between">
                  <span className="font-serif text-3xl font-bold text-[#3B2A20]">"No burnt roasts. Ever."</span>
                  <p className="text-xs text-[#5A4B40] font-medium leading-relaxed">
                    We roast to highlight origin acidity and floral sweetness, never to mask inferior beans behind dark bitterness.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#3B2A20] p-6 text-[#FAF7F2] flex flex-col justify-between">
                  <Flame className="w-8 h-8 text-[#DE9B52]" />
                  <div>
                    <p className="font-serif text-xl font-bold">Diedrich IR-12</p>
                    <p className="text-xs text-[#C4B5A5] mt-1">Infrared ceramic burners for gentler heat transfer and sweet bean caramelization.</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80"
                    alt="Cozy cafe seating area with warm lights"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C87941]" />
              Our Story & Ethos
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201712] tracking-tight leading-tight">
              Crafted with intention. Grounded in community.
            </h2>

            <p className="text-[#5A4B40] text-base sm:text-lg leading-relaxed">
              Founded in 2018 in the heart of Portland's historic industrial district, <strong>The Daily Grind</strong> started with an uncompromising mission: to de-mystify specialty coffee without stripping away its artistic poetry.
            </p>

            <p className="text-[#5A4B40] text-sm sm:text-base leading-relaxed">
              We travel directly to the washing stations of Yirgacheffe, the high slopes of Huila, and volcanic terraced farms in Guatemala. We pay well above fair-trade floor prices so multi-generational farming families can reinvest in climate-resilient agroforestry.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C87941]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#201712]">Direct Farm Alliances</h3>
                  <p className="text-xs text-[#7E7267] mt-0.5">We maintain year-over-year contracts with smallholder farm co-ops.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EFE7DC] shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#C87941]">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[#201712]">Zero Grounds Waste</h3>
                  <p className="text-xs text-[#7E7267] mt-0.5">100% of spent cafe grinds enrich local urban mushroom and flower farms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
