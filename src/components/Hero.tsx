import React from 'react';
import { ArrowRight, Sparkles, Award, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreJournal: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onExploreJournal,
  onOpenQuiz,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#201712] text-[#FAF7F2] py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#DE9B52] blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#C87941] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B2A20] border border-[#523B2D] text-[#DE9B52] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Trade • Roasted Weekly in Portland
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.12]">
              Where every sip is a{' '}
              <span className="italic font-normal text-[#DE9B52]">crafted ritual.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#C4B5A5] max-w-2xl font-light leading-relaxed">
              Welcome to <span className="text-[#FAF7F2] font-medium">The Daily Grind</span>. We roast single-origin heirloom beans in small batches, hand-laminate butter pastries before sunrise, and share our love for coffee science in our open community cafe.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 rounded-xl bg-[#C87941] text-white font-semibold text-sm hover:bg-[#b56b37] transition-all shadow-lg hover:shadow-[#C87941]/25 flex items-center gap-2 cursor-pointer"
              >
                Explore Cafe Menu & Beans
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreJournal}
                className="px-6 py-3.5 rounded-xl bg-[#2D211A] hover:bg-[#3B2A20] text-[#FAF7F2] border border-[#523B2D] font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                Read The Coffee Journal
                <span className="w-2 h-2 rounded-full bg-[#DE9B52]"></span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-5 py-3.5 rounded-xl text-[#DE9B52] hover:text-[#FAF7F2] hover:bg-[#3B2A20]/50 transition-colors text-sm font-medium flex items-center gap-1.5 cursor-pointer"
              >
                ★ Find Your Roast Match
              </button>
            </div>

            {/* Badges / Metrics */}
            <div className="pt-8 border-t border-[#3B2A20] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-[#DE9B52]">87+</p>
                <p className="text-xs text-[#9E8E81] uppercase tracking-wider mt-0.5">SCA Cupping Score</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-[#FAF7F2]">100%</p>
                <p className="text-xs text-[#9E8E81] uppercase tracking-wider mt-0.5">Direct Farm Trade</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-[#DE9B52]">Zero</p>
                <p className="text-xs text-[#9E8E81] uppercase tracking-wider mt-0.5">Grounds Waste</p>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3B2A20] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
                  alt="Barista at The Daily Grind crafting pour over coffee with steam rising"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201712]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#C87941] text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                    Today's Origin Feature
                  </span>
                  <p className="font-serif text-lg font-bold text-[#FAF7F2]">
                    Ethiopia Yirgacheffe Aricha
                  </p>
                  <p className="text-xs text-[#C4B5A5] mt-1">
                    Washed heirloom • Wild Jasmine, White Peach & Meyer Lemon zest
                  </p>
                </div>
              </div>

              {/* Floating Mini Card */}
              <div className="absolute -top-6 -left-6 bg-[#2B1F17] border border-[#523B2D] p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#3B2A20] flex items-center justify-center text-[#DE9B52]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#FAF7F2]">Portland Roaster's Guild</p>
                  <p className="text-[11px] text-[#A6978A]">Best Single-Origin Espresso 2025</p>
                </div>
              </div>

              {/* Floating Coffee Origin Pill */}
              <div className="absolute -bottom-5 -right-5 bg-[#FAF7F2] text-[#201712] p-3.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#DE9B52]/20 flex items-center justify-center text-[#C87941]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#201712]">Direct Farm Partner</p>
                  <p className="text-[11px] text-[#5A4B40]">Huila & Gedeo Highlands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
