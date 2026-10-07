import React, { useState, useMemo } from 'react';
import { Coffee, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories = [
    'All',
    'Espresso',
    'Pour-Over',
    'Cold Brew',
    'Signature',
    'Bakery',
    'Whole Bean',
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1200);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-semibold uppercase tracking-wider mb-3">
            <Coffee className="w-3.5 h-3.5 text-[#C87941]" />
            Seasonal Bar & Roastery Menu
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201712] tracking-tight">
            Slow-Crafted Drinks & Fresh Bakes
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C50] font-light mt-3">
            Every espresso shot is weighed to 0.1g, every morning bun is hand-braided before sunrise, and our retail beans are roasted within 7 days of delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#3B2A20] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#5A4B40] border border-[#E8DEC8] hover:border-[#C4B5A5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-[#E8DEC8] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#EFE7DC]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-[#201712]/80 backdrop-blur-sm text-white text-[10px] font-semibold">
                      {item.category}
                    </span>
                    {item.roastLevel && (
                      <span className="px-2 py-0.5 rounded bg-[#DE9B52] text-[#201712] text-[10px] font-bold">
                        {item.roastLevel} Roast
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm text-[#201712] font-serif font-bold text-sm shadow-md">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#201712] group-hover:text-[#C87941] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  {item.origin && (
                    <p className="text-xs text-[#C87941] font-semibold flex items-center gap-1">
                      📍 {item.origin}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#6B5C50] font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tasting notes pills */}
                  {item.notes && item.notes.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.notes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#E8DEC8] text-[11px] font-medium text-[#4A3B30]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Add to order action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleAdd(item)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    addedItemId === item.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-[#FAF7F2] hover:bg-[#3B2A20] text-[#3B2A20] hover:text-white border border-[#E8DEC8]'
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <Check className="w-4 h-4 text-white" /> Added to Order!
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Order • ${item.price.toFixed(2)}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
