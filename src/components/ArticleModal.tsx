import React, { useState } from 'react';
import { X, Clock, Calendar, User, Share2, Bookmark, Check, ArrowRight, Lightbulb, Coffee, Droplets } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
  allPosts: BlogPost[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onSelectPost,
  allPosts,
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Main Reading Container */}
      <div className="relative bg-[#FAF7F2] text-[#201712] rounded-2xl sm:rounded-3xl max-w-4xl w-full mx-auto my-auto shadow-2xl z-10 overflow-hidden flex flex-col max-h-[92vh] border border-[#E8DEC8]">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8DEC8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-[#7E7267] hidden sm:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C87941]" /> {post.readTimeMinutes} min in-depth read
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                saved ? 'bg-[#DE9B52] text-white' : 'hover:bg-[#EFE7DC] text-[#5A4B40]'
              }`}
              title={saved ? 'Saved to bookmarks' : 'Save article'}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-[#EFE7DC] text-[#5A4B40] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Share article link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE7DC] text-[#201712] transition-colors cursor-pointer ml-1"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-8">
          {/* Article Header Titles */}
          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201712] tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#6B5C50] font-light leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#EFE7DC]">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#DE9B52]"
                />
                <div>
                  <p className="font-semibold text-sm text-[#201712]">{post.author.name}</p>
                  <p className="text-xs text-[#7E7267]">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#7E7267] ml-auto">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C87941]" /> {post.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C87941]" /> {post.readTimeMinutes} min read
                </span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DEC8] aspect-[16/9] relative">
            <img
              src={post.featuredImage}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-white/90">
              {post.imageAlt}
            </div>
          </div>

          {/* Tasting Notes (if available) */}
          {post.tastingNotes && post.tastingNotes.length > 0 && (
            <div className="p-4 rounded-xl bg-[#FAF3EC] border border-[#E8DEC8] flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87941] flex items-center gap-1.5">
                <Coffee className="w-4 h-4" /> Distinct Cupping Notes:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white text-xs font-medium text-[#3B2A20] shadow-sm border border-[#E8DEC8]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-[#3B2A20]">
            <p className="text-base sm:text-lg leading-relaxed font-light">
              {post.content.introduction}
            </p>
          </div>

          {/* Pull Quote */}
          {post.content.pullQuote && (
            <div className="my-6 p-6 sm:p-8 rounded-2xl bg-[#F2EAE0] border-l-4 border-[#C87941] relative">
              <span className="font-serif text-5xl text-[#C87941]/30 absolute top-2 left-3 select-none">“</span>
              <p className="font-serif text-xl sm:text-2xl italic text-[#201712] leading-snug pl-6">
                {post.content.pullQuote}
              </p>
            </div>
          )}

          {/* Sections with Inline Pictures */}
          <div className="space-y-10">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4 border-t border-[#EFE7DC] first:border-0">
                <h3 className="font-serif text-2xl font-bold text-[#201712]">
                  {section.heading}
                </h3>

                <div className="text-base sm:text-lg leading-relaxed text-[#4A3B30] space-y-3 whitespace-pre-line font-light">
                  {section.body}
                </div>

                {/* Section Specific Inline Picture */}
                {section.image && (
                  <div className="my-6 rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-md">
                    <img
                      src={section.image.url}
                      alt={section.image.alt}
                      className="w-full max-h-96 object-cover"
                    />
                    {section.image.caption && (
                      <p className="p-3 bg-[#F2EAE0] text-xs text-[#6B5C50] italic border-t border-[#E8DEC8]">
                        📷 {section.image.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <ul className="my-4 space-y-2 pl-2">
                    {section.bulletPoints.map((bp, bidx) => (
                      <li key={bidx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#4A3B30]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C87941] mt-2 shrink-0"></span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Barista Tip Callout */}
                {section.tip && (
                  <div className="p-4 rounded-xl bg-[#FAF3EC] border border-[#DE9B52]/40 flex items-start gap-3 my-4">
                    <div className="p-1.5 rounded-md bg-[#DE9B52]/20 text-[#C87941] shrink-0 mt-0.5">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C87941]">Barista Pro-Tip</p>
                      <p className="text-xs sm:text-sm text-[#5A4B40] mt-0.5">{section.tip}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Brew Recipe Card (If present) */}
          {post.content.brewRecipe && (
            <div className="p-6 rounded-2xl bg-[#3B2A20] text-[#FAF7F2] shadow-xl space-y-4 my-8">
              <div className="flex items-center justify-between border-b border-[#523B2D] pb-3">
                <div className="flex items-center gap-2 text-[#DE9B52]">
                  <Droplets className="w-5 h-5" />
                  <h4 className="font-serif text-lg font-bold">Recommended Brew Parameters</h4>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-[#523B2D] text-[#DE9B52] font-semibold">
                  Lab Calibrated
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-sm">
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Dose Mass</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.coffeeGrams}g Coffee</p>
                </div>
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Water Mass</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.waterGrams}g Water</p>
                </div>
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Ratio</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.ratio}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Water Temp</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.tempCelsius}°C / 200°F</p>
                </div>
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Grind Size</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.grindSize}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9E8E81] uppercase">Total Contact Time</p>
                  <p className="font-bold text-base text-[#FAF7F2]">{post.content.brewRecipe.brewTime}</p>
                </div>
              </div>

              {post.content.brewRecipe.waterType && (
                <p className="text-xs text-[#C4B5A5] pt-2 border-t border-[#523B2D]">
                  <strong className="text-[#DE9B52]">Water Specification:</strong> {post.content.brewRecipe.waterType}
                </p>
              )}
            </div>
          )}

          {/* Conclusion */}
          <div className="p-6 rounded-2xl bg-[#F2EAE0] border border-[#E8DEC8] space-y-2">
            <h4 className="font-serif text-xl font-bold text-[#201712]">Final Reflections</h4>
            <p className="text-base text-[#4A3B30] leading-relaxed font-light">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#EFE7DC] text-[#5A4B40] text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8DEC8] flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#DE9B52]"
            />
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-serif font-bold text-lg text-[#201712]">{post.author.name}</p>
              <p className="text-xs font-semibold text-[#C87941]">{post.author.role}</p>
              <p className="text-xs text-[#6B5C50] leading-relaxed">
                {post.author.bio || 'Resident coffee craftsman and quality director at The Daily Grind roastery.'}
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-[#E8DEC8] space-y-4">
              <h4 className="font-serif text-xl font-bold text-[#201712]">
                Continue Reading Our Coffee Journal
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectPost(rel);
                      const modalEl = document.querySelector('.overflow-y-auto');
                      if (modalEl) modalEl.scrollTop = 0;
                    }}
                    className="group bg-white rounded-xl border border-[#E8DEC8] p-3 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
                  >
                    <div className="rounded-lg overflow-hidden aspect-[16/10] mb-2">
                      <img
                        src={rel.featuredImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#C87941] mb-1">
                      {rel.category}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-[#201712] line-clamp-2 group-hover:text-[#C87941] transition-colors flex-1">
                      {rel.title}
                    </h5>
                    <p className="text-[11px] text-[#7E7267] mt-2 flex items-center gap-1 font-medium">
                      Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
