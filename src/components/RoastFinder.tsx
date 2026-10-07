import React, { useState } from 'react';
import { Sparkles, RotateCcw, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface RoastFinderProps {
  onAddToCart: (item: MenuItem) => void;
  onClose?: () => void;
}

export const RoastFinder: React.FC<RoastFinderProps> = ({ onAddToCart }) => {
  const [step, setStep] = useState<number>(1);
  const [method, setMethod] = useState<string>('pour-over');
  const [flavorPreference, setFlavorPreference] = useState<string>('floral');
  const [caffeine, setCaffeine] = useState<string>('regular');
  const [matchedItem, setMatchedItem] = useState<MenuItem | null>(null);

  const calculateMatch = () => {
    if (caffeine === 'decaf') {
      const decaf = MENU_ITEMS.find((i) => i.id === 'wb-3');
      setMatchedItem(decaf || MENU_ITEMS[0]);
    } else if (flavorPreference === 'floral' || flavorPreference === 'fruit') {
      const light = MENU_ITEMS.find((i) => i.id === 'wb-2');
      setMatchedItem(light || MENU_ITEMS[0]);
    } else {
      const balanced = MENU_ITEMS.find((i) => i.id === 'wb-1');
      setMatchedItem(balanced || MENU_ITEMS[0]);
    }
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setMatchedItem(null);
  };

  return (
    <div className="bg-[#FAF7F2] rounded-3xl border border-[#E8DEC8] p-6 sm:p-10 shadow-lg my-12 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C87941]" /> Interactive Flavor Quiz
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#201712]">
          Find Your Perfect Daily Roast
        </h2>
        <p className="text-xs sm:text-sm text-[#7E7267] mt-1.5">
          Answer 3 quick questions and our master roaster algorithm will recommend the ideal bean origin and grind for your morning ritual.
        </p>
      </div>

      {/* Steps Indicator */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                step === s
                  ? 'bg-[#C87941] text-white shadow-sm'
                  : step > s
                  ? 'bg-[#3B2A20] text-white'
                  : 'bg-[#EAD8C7] text-[#5A4B40]'
              }`}
            >
              {step > s ? <Check className="w-3.5 h-3.5" /> : s}
            </div>
            {s < 3 && <div className="w-8 sm:w-12 h-0.5 bg-[#E8DEC8]"></div>}
          </div>
        ))}
      </div>

      {/* Step 1: Brew Method */}
      {step === 1 && (
        <div className="space-y-6 max-w-xl mx-auto">
          <h3 className="font-semibold text-center text-lg text-[#201712]">
            1. How do you brew your coffee most mornings?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'pour-over', label: 'Pour-Over (Chemex / V60)', desc: 'Clean, light, delicate aromatics' },
              { id: 'espresso', label: 'Espresso Machine / Moka', desc: 'Thick crema, dense extraction' },
              { id: 'drip', label: 'Automatic Drip Maker', desc: 'Convenient, rich everyday mug' },
              { id: 'french-press', label: 'French Press / Cold Immersion', desc: 'Full-bodied, heavy mouthfeel' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setMethod(opt.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  method === opt.id
                    ? 'border-[#C87941] bg-[#FAF3EC] shadow-sm ring-2 ring-[#C87941]/20'
                    : 'border-[#E8DEC8] bg-white hover:border-[#C4B5A5]'
                }`}
              >
                <p className="font-semibold text-sm text-[#201712]">{opt.label}</p>
                <p className="text-xs text-[#7E7267] mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>
          <div className="text-center pt-2">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-2.5 rounded-lg bg-[#3B2A20] text-white text-sm font-semibold hover:bg-[#201712] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Flavor Profile */}
      {step === 2 && (
        <div className="space-y-6 max-w-xl mx-auto">
          <h3 className="font-semibold text-center text-lg text-[#201712]">
            2. What flavor palette makes you happiest?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'floral', label: 'Jasmine, Peach & Citrus', desc: 'Light, tea-like, bright acidity' },
              { id: 'chocolate', label: 'Fudge, Molasses & Caramel', desc: 'Sweet, velvety, low bitterness' },
              { id: 'nutty', label: 'Toasted Pecan & Apple Pie', desc: 'Balanced, comforting, warm' },
              { id: 'spiced', label: 'Wild Spices & Honey Blossom', desc: 'Complex, dynamic exotic cup' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFlavorPreference(opt.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  flavorPreference === opt.id
                    ? 'border-[#C87941] bg-[#FAF3EC] shadow-sm ring-2 ring-[#C87941]/20'
                    : 'border-[#E8DEC8] bg-white hover:border-[#C4B5A5]'
                }`}
              >
                <p className="font-semibold text-sm text-[#201712]">{opt.label}</p>
                <p className="text-xs text-[#7E7267] mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-[#7E7267] hover:text-[#201712] cursor-pointer"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2.5 rounded-lg bg-[#3B2A20] text-white text-sm font-semibold hover:bg-[#201712] transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Caffeine Preference */}
      {step === 3 && (
        <div className="space-y-6 max-w-xl mx-auto">
          <h3 className="font-semibold text-center text-lg text-[#201712]">
            3. What is your caffeine rhythm?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'regular', label: 'Full Caffeine (Single Origin)', desc: 'Peak morning alertness & energy' },
              { id: 'decaf', label: 'Swiss Water Decaf Only', desc: '100% pure taste, 0% caffeine jitters' },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setCaffeine(opt.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  caffeine === opt.id
                    ? 'border-[#C87941] bg-[#FAF3EC] shadow-sm ring-2 ring-[#C87941]/20'
                    : 'border-[#E8DEC8] bg-white hover:border-[#C4B5A5]'
                }`}
              >
                <p className="font-semibold text-sm text-[#201712]">{opt.label}</p>
                <p className="text-xs text-[#7E7267] mt-0.5">{opt.desc}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => setStep(2)}
              className="text-xs font-semibold text-[#7E7267] hover:text-[#201712] cursor-pointer"
            >
              ← Back
            </button>
            <button
              onClick={calculateMatch}
              className="px-6 py-2.5 rounded-lg bg-[#C87941] text-white text-sm font-semibold hover:bg-[#b56b37] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-md"
            >
              Reveal My Roast Match ✨
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && matchedItem && (
        <div className="bg-white rounded-2xl border border-[#E8DEC8] p-6 sm:p-8 max-w-xl mx-auto shadow-md">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-bold uppercase tracking-wider mb-2">
              Your Tailored Match
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#201712]">
              {matchedItem.name}
            </h3>
            <p className="text-xs text-[#C87941] font-semibold mt-1">
              Roast Level: {matchedItem.roastLevel} • {matchedItem.origin}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
            <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0 border border-[#E8DEC8]">
              <img
                src={matchedItem.image}
                alt={matchedItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 text-sm text-[#5A4B40]">
              <p>{matchedItem.description}</p>
              {matchedItem.notes && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {matchedItem.notes.map((n, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E8DEC8] text-xs font-medium text-[#3B2A20]"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#EFE7DC]">
            <button
              onClick={resetQuiz}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#7E7267] hover:text-[#201712] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
            </button>

            <button
              onClick={() => onAddToCart(matchedItem)}
              className="px-5 py-2.5 rounded-lg bg-[#C87941] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b56b37] transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" /> Add Bag To Order (${matchedItem.price.toFixed(2)})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
