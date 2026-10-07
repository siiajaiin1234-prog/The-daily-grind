import React, { useState } from 'react';
import { BlogPost, CartItem, MenuItem } from './types';
import { BLOG_ARTICLES } from './data/blogArticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { RoastFinder } from './components/RoastFinder';
import { BlogSection } from './components/BlogSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showQuizSection, setShowQuizSection] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuiz = () => {
    setShowQuizSection(true);
    setTimeout(() => {
      const el = document.getElementById('roast-quiz');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { id: `cart-${Date.now()}-${item.id}`, item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#201712] flex flex-col font-sans selection:bg-[#C87941] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={handleNavigate}
        onOpenQuiz={handleOpenQuiz}
      />

      <main className="flex-1">
        {/* Hero Banner */}
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onExploreJournal={() => handleNavigate('journal')}
          onOpenQuiz={handleOpenQuiz}
        />

        {/* Cafe Story & Sourcing Philosophy */}
        <StorySection />

        {/* Cafe Beverage & Bean Menu */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Interactive Roast Finder Quiz Section */}
        <div id="roast-quiz" className="px-4 sm:px-6 lg:px-8">
          <RoastFinder onAddToCart={handleAddToCart} />
        </div>

        {/* 12 Contextual Coffee Journal Articles (Blog) */}
        <BlogSection onSelectPost={(post) => setActiveArticle(post)} />

        {/* Cafe Space, Vibe, and Amenities */}
        <AtmosphereSection />

        {/* Hours, Location, and Table Reservation */}
        <VisitSection />
      </main>

      {/* Footer with Newsletter & Contacts */}
      <Footer onNavigate={handleNavigate} onOpenQuiz={handleOpenQuiz} />

      {/* Full Length Article Reading Modal */}
      <ArticleModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
        onSelectPost={(post) => setActiveArticle(post)}
        allPosts={BLOG_ARTICLES}
      />

      {/* Shopping Bag / Express Pickup Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
