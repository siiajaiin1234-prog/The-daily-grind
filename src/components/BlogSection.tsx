import React, { useState, useMemo } from 'react';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_ARTICLES } from '../data/blogArticles';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Brewing Guides',
    'Origins & Sourcing',
    'Barista Science',
    'Culture & Lifestyle',
    'Recipes',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_ARTICLES.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.subtitle.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_ARTICLES[0];

  return (
    <section id="journal" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD8C7] text-[#3B2A20] text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#C87941]" />
            Specialty Coffee Journal & Knowledge Base
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201712] tracking-tight">
            The Daily Grind Coffee Library
          </h2>
          <p className="text-base sm:text-lg text-[#6B5C50] font-light mt-3">
            Explore 12 in-depth articles on origin terroir, water chemistry, microfoam physics, and mindful morning rituals penned by our roasters and baristas.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 pb-6 border-b border-[#E8DEC8]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3B2A20] text-[#FAF7F2] shadow-sm'
                    : 'bg-white text-[#5A4B40] border border-[#E8DEC8] hover:border-[#C4B5A5]'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-1.5 opacity-70 font-normal">({BLOG_ARTICLES.length})</span>
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#7E7267] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brewing guides, origins, recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#E8DEC8] text-xs sm:text-sm text-[#201712] placeholder-[#9E8E81] focus:outline-none focus:ring-2 focus:ring-[#C87941]/30 focus:border-[#C87941]"
            />
          </div>
        </div>

        {/* Featured Card (Shown if 'All' is selected and no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="mb-14 bg-white rounded-3xl border border-[#E8DEC8] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.imageAlt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C87941] text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Masterclass
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7E7267]">
                    <span className="px-2.5 py-0.5 rounded bg-[#FAF3EC] text-[#C87941] font-bold">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#201712] leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#6B5C50] font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE7DC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#DE9B52]"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#201712]">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-[#7E7267]">{featuredPost.publishedDate}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPost(featuredPost)}
                    className="px-4 py-2.5 rounded-xl bg-[#3B2A20] hover:bg-[#201712] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DEC8] p-8">
            <p className="font-serif text-xl font-bold text-[#201712]">No articles found</p>
            <p className="text-sm text-[#7E7267] mt-1">Try searching for different brewing methods, origins, or tags.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#3B2A20] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group bg-white rounded-2xl border border-[#E8DEC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Card Picture */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8DEC8]">
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#201712]/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3" /> {post.readTimeMinutes} min
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-[#7E7267] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C87941]" /> {post.publishedDate}
                    </p>

                    <h3 className="font-serif text-xl font-bold text-[#201712] group-hover:text-[#C87941] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6B5C50] font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Card Footer with Author and Action */}
                  <div className="pt-4 border-t border-[#EFE7DC] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#DE9B52]"
                      />
                      <span className="text-xs font-medium text-[#4A3B30]">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-[#C87941] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Full Article →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
