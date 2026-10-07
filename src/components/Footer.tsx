import React, { useState } from 'react';
import { Coffee, Mail, Check, ArrowRight, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuiz }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const cafeName = import.meta.env.VITE_CAFE_NAME || 'The Daily Grind';
  const tagline = import.meta.env.VITE_CAFE_TAGLINE || 'Artisanal Roastery & Slow-Crafted Espresso Bar';
  const address = import.meta.env.VITE_CAFE_ADDRESS || "412 Roaster's Way, Portland, OR 97201";
  const phone = import.meta.env.VITE_CAFE_PHONE || "(555) 742-9831";
  const contactEmail = import.meta.env.VITE_CAFE_EMAIL || "hello@thedailygrindcafe.com";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#18110D] text-[#C4B5A5] pt-16 pb-12 border-t border-[#291F18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#2D211A]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3B2A20] text-[#DE9B52] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                {cafeName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A6978A] font-light leading-relaxed">
              {tagline}. Small-batch coffee roasters and seasonal cafe dedicated to transparent direct trade, organic agronomy, and genuine community hospitality.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-[#9E8E81]">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DE9B52]" /> {address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DE9B52]" /> {phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DE9B52]" /> {contactEmail}
              </p>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF7F2] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer"
                >
                  Our Story & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer"
                >
                  Cafe Menu & Whole Beans
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer text-[#DE9B52]"
                >
                  ★ Roast Match Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer"
                >
                  Coffee Journal (12 Guides)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atmosphere')}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer"
                >
                  The Space & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="hover:text-[#DE9B52] transition-colors cursor-pointer"
                >
                  Hours & Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Journal Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF7F2] uppercase tracking-wider">
              Featured Guides
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="hover:text-[#DE9B52] transition-colors cursor-pointer">
                • Chemex vs. Hario V60 Precision Guide
              </li>
              <li className="hover:text-[#DE9B52] transition-colors cursor-pointer">
                • The Physics of Perfect Crema & Pressure
              </li>
              <li className="hover:text-[#DE9B52] transition-colors cursor-pointer">
                • Direct Trade in Yirgacheffe, Ethiopia
              </li>
              <li className="hover:text-[#DE9B52] transition-colors cursor-pointer">
                • Water Quality & Extraction Science
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF7F2] uppercase tracking-wider">
              The Sunday Dispatch
            </h4>
            <p className="text-xs text-[#A6978A] font-light leading-relaxed">
              Join 4,200+ coffee lovers for weekly roast releases, brewing tips, and seasonal cafe events. No spam, ever.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  className="w-full py-2.5 pl-3 pr-10 rounded-xl bg-[#201712] border border-[#3B2A20] text-xs text-[#FAF7F2] placeholder-[#7E7267] focus:outline-none focus:border-[#DE9B52]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#C87941] text-white hover:bg-[#b56b37] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> You're on the list! Welcome to the family.
                </p>
              )}
            </form>

            <div className="flex items-center gap-3 pt-2 text-[#C4B5A5]">
              <span className="p-2 rounded-lg bg-[#201712] hover:text-[#DE9B52] transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-[#201712] hover:text-[#DE9B52] transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-[#201712] hover:text-[#DE9B52] transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E7267]">
          <p>© {new Date().getFullYear()} {cafeName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Direct Trade Verified</span>
            <span>100% Compostable Packaging</span>
            <span>Zero Waste Grounds Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
