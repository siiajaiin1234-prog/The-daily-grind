import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Clock, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  onOpenQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const cafeName = import.meta.env.VITE_CAFE_NAME || 'The Daily Grind';

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-[#201712] text-[#EAD8C7] text-xs py-2 px-4 border-b border-[#3B2A20] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#DE9B52]">
              <Clock className="w-3.5 h-3.5" /> Open Daily: 6:30 AM – 6:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-[#C4B5A5]">
              <MapPin className="w-3.5 h-3.5" /> 412 Roaster's Way, Portland, OR
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-300 font-medium tracking-wide">
              ★ Fresh Weekly Roast Batch: Yirgacheffe Aricha & Pink Bourbon
            </span>
            <button
              onClick={onOpenQuiz}
              className="text-xs text-[#FAF7F2] underline hover:text-[#DE9B52] transition-colors cursor-pointer ml-2"
            >
              Take Flavor Quiz →
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8] py-3.5'
            : 'bg-[#FAF7F2] py-5 border-b border-[#EFE7DC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#3B2A20] text-[#DE9B52] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#201712] block leading-none">
                {cafeName}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#C87941] mt-0.5 block">
                Artisan Roastery & Cafe
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#46382E]">
            <button
              onClick={() => handleNavClick('story')}
              className="hover:text-[#C87941] transition-colors cursor-pointer"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="hover:text-[#C87941] transition-colors cursor-pointer"
            >
              Menu & Beans
            </button>
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 text-[#C87941] font-semibold hover:text-[#3B2A20] transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" /> Find Your Roast
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="relative hover:text-[#C87941] transition-colors cursor-pointer"
            >
              Coffee Journal
              <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-[#EAD8C7] text-[#3B2A20]">
                12
              </span>
            </button>
            <button
              onClick={() => handleNavClick('atmosphere')}
              className="hover:text-[#C87941] transition-colors cursor-pointer"
            >
              The Space
            </button>
            <button
              onClick={() => handleNavClick('visit')}
              className="hover:text-[#C87941] transition-colors cursor-pointer"
            >
              Hours & Visit
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('visit')}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#3B2A20] text-[#3B2A20] hover:bg-[#3B2A20] hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Reserve Table
            </button>

            <button
              onClick={onOpenCart}
              aria-label="View shopping bag"
              className="relative p-2.5 rounded-full bg-[#F2EAE0] text-[#201712] hover:bg-[#EAD8C7] transition-colors cursor-pointer flex items-center justify-center"
            >
              <ShoppingBag className="w-5 h-5 text-[#3B2A20]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C87941] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#3B2A20] hover:bg-[#F2EAE0] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8DEC8] px-4 pt-3 pb-6 mt-3 space-y-3 shadow-lg">
            <button
              onClick={() => handleNavClick('story')}
              className="block w-full text-left py-2 font-medium text-[#3B2A20] hover:text-[#C87941]"
            >
              Our Story & Philosophy
            </button>
            <button
              onClick={() => handleNavClick('menu')}
              className="block w-full text-left py-2 font-medium text-[#3B2A20] hover:text-[#C87941]"
            >
              Cafe Menu & Whole Beans
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="block w-full text-left py-2 font-semibold text-[#C87941] hover:text-[#3B2A20]"
            >
              ★ Find Your Daily Roast (Flavor Quiz)
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="flex items-center justify-between w-full text-left py-2 font-medium text-[#3B2A20] hover:text-[#C87941]"
            >
              <span>Coffee Journal & Brew Guides</span>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#EAD8C7] text-[#3B2A20] font-bold">
                12 Articles
              </span>
            </button>
            <button
              onClick={() => handleNavClick('atmosphere')}
              className="block w-full text-left py-2 font-medium text-[#3B2A20] hover:text-[#C87941]"
            >
              The Space & Cafe Gallery
            </button>
            <button
              onClick={() => handleNavClick('visit')}
              className="block w-full text-left py-2 font-medium text-[#3B2A20] hover:text-[#C87941]"
            >
              Hours, Location & Table Booking
            </button>
          </div>
        )}
      </header>
    </>
  );
};
