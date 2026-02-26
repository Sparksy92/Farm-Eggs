'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import BlogCard from './components/BlogCard';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import DonationWidget from './components/DonationWidget';
import { Leaf, Heart, MapPin, Award, ArrowRight, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Farm Fresh Chicken Dozen',
    price: '6.00',
    description: 'A full dozen free-range chicken eggs from our happy flock. Rich orange yolks packed with nutrition.',
    emoji: '🥚',
    badge: 'Best Seller',
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Duck Egg Half-Dozen',
    price: '7.50',
    description: 'Six rich, creamy duck eggs perfect for baking and gourmet cooking. Larger with a richer flavor.',
    emoji: '🦆',
    badge: 'Premium',
    rating: 5,
    reviews: 64,
  },
  {
    id: 3,
    name: 'Clucky Acres Tote Bag',
    price: '18.00',
    description: 'Carry your farm haul in style with our branded canvas tote. Durable, reusable, and adorable.',
    emoji: '👜',
    badge: 'New',
    rating: 4,
    reviews: 21,
  },
];

const posts = [
  {
    slug: 'meet-our-flock',
    title: 'Meet Our Flock: 30 Personalities, One Happy Farm',
    excerpt: 'From Duchess the dramatic Buff Orpington to Daffy the fearless Pekin duck, get to know the stars of Clucky Acres.',
    category: 'Farm Life',
    date: 'Feb 10, 2025',
    readTime: 5,
    emoji: '🐔',
  },
  {
    slug: 'how-to-store-farm-eggs',
    title: 'How to Properly Store Farm-Fresh Eggs',
    excerpt: 'Fresh farm eggs don\'t follow the same rules as store-bought. Here\'s everything you need to know about washing, refrigerating, and shelf life.',
    category: 'Egg Care',
    date: 'Jan 28, 2025',
    readTime: 4,
    emoji: '🥚',
  },
  {
    slug: 'duck-egg-quiche',
    title: 'Farmhouse Duck Egg Quiche Recipe',
    excerpt: 'Duck eggs make the richest, creamiest quiche you\'ve ever tasted. This recipe is a weekend brunch showstopper.',
    category: 'Recipes',
    date: 'Jan 15, 2025',
    readTime: 8,
    emoji: '🍳',
  },
];

const flockMembers = [
  { name: 'Duchess', breed: 'Buff Orpington', emoji: '👸', trait: 'The queen of the coop' },
  { name: 'Scrambled', breed: 'Rhode Island Red', emoji: '🔴', trait: 'First at the feeder' },
  { name: 'Pickles', breed: 'Barred Rock', emoji: '🖤', trait: 'Loves the mud puddles' },
  { name: 'Daffy', breed: 'Pekin Duck', emoji: '🦆', trait: 'Fearless explorer' },
];

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navigation cartCount={cartItems.length} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B2D20] via-[#2D6A4F] to-[#1B4D3A] pt-20">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#95D5B2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#F4A261]/10 rounded-full blur-3xl" />

        {/* Floating emoji farm elements */}
        <div className="absolute top-32 left-16 text-5xl opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐔</div>
        <div className="absolute top-48 right-24 text-4xl opacity-25 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>🦆</div>
        <div className="absolute bottom-40 left-1/4 text-3xl opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>🥚</div>
        <div className="absolute bottom-32 right-1/3 text-4xl opacity-25 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>🌾</div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <span className="font-accent text-[#95D5B2] text-xl mb-4 block">Welcome to our little farm 🌿</span>
          <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight mb-6">
            Fresh From Our Flock<br />
            <span className="text-[#95D5B2]">To Your Table</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We raise 20 chickens and 10 ducks on our hobby farm with love, fresh air, and plenty of space to roam. Our eggs are collected daily — you can taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-[#F4A261] hover:bg-[#e8923f] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            >
              🛒 Shop Eggs
            </Link>
            <Link
              href="/blog"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              📖 Read the Blog
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-white/20 rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#2D6A4F] py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {[
              { icon: '🌿', label: 'Free-Range' },
              { icon: '🚫', label: 'No Hormones' },
              { icon: '🏡', label: 'Local Farm' },
              { icon: '❤️', label: 'Community Supported' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 text-sm font-medium">
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-accent text-[#2D6A4F] text-lg">From the Nest</span>
            <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1">Featured Products</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Everything in our shop comes straight from our farm — or is made with it in mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              View Full Shop <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-accent text-[#2D6A4F] text-lg">Stories & Tips</span>
            <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1">Latest from the Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Read All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Flock Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-accent text-[#2D6A4F] text-lg">Our Feathered Family</span>
              <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1 mb-4">Meet the Flock</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every egg has a story. Our 20 chickens and 10 ducks each have names, personalities, and a whole lot of attitude. From Duchess the drama queen to Daffy the fearless explorer — they're more than farm animals, they're family.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {flockMembers.map((m) => (
                  <div key={m.name} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center gap-3">
                    <span className="text-2xl">{m.emoji}</span>
                    <div>
                      <p className="font-semibold text-[#1B2D20] text-sm">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.trait}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#2D6A4F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1B4D3A] transition-colors"
              >
                Meet All 30 Animals <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#95D5B2]/30 to-[#2D6A4F]/10 rounded-3xl h-80 flex items-center justify-center text-center p-8">
              <div>
                <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>🐔</div>
                <p className="font-accent text-2xl text-[#2D6A4F]">"Every cluck is a hello!"</p>
                <p className="text-sm text-gray-500 mt-2">— Duchess, Head Hen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F4A261]/10 to-[#95D5B2]/10">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="font-accent text-[#F4A261] text-lg">Support The Farm</span>
          <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1 mb-4">Help Our Flock Grow</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Your donations directly fund better housing, premium feed, and veterinary care for our animals. Every contribution, big or small, makes a real difference.</p>
        </div>
        <DonationWidget />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-accent text-[#2D6A4F] text-lg">Happy Customers</span>
            <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1">What Our Community Says</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-[#2D6A4F]">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="font-heading text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-[#95D5B2] mb-8">Get seasonal farm updates, egg availability alerts, new blog posts, and exclusive offers delivered to your inbox.</p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#95D5B2] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F4A261] hover:bg-[#e8923f] text-white px-6 py-3 rounded-full font-semibold transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime. 🐔</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
