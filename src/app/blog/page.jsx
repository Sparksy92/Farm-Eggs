'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';

const allPosts = [
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
        excerpt: "Fresh farm eggs don't follow the same rules as store-bought. Here's everything you need to know about washing, refrigerating, and shelf life.",
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
    {
        slug: 'spring-hatching-season',
        title: 'Spring Hatching Season: What to Expect',
        excerpt: 'Spring means baby chicks! We walk through our incubation setup, hatch rates, and the joy of welcoming new flock members.',
        category: 'Seasonal',
        date: 'Mar 1, 2025',
        readTime: 6,
        emoji: '🐣',
    },
    {
        slug: 'why-orange-yolks',
        title: 'Why Do Our Yolks Look So Different?',
        excerpt: 'That deep orange color isn\'t a filter — it\'s real. The science behind why pasture-raised egg yolks are vibrant and nutritious.',
        category: 'Egg Care',
        date: 'Dec 20, 2024',
        readTime: 5,
        emoji: '🌅',
    },
    {
        slug: 'chicken-care-winter',
        title: '5 Tips for Keeping Your Chickens Happy in Winter',
        excerpt: 'Cold weather presents unique challenges for backyard flocks. Here are our tried-and-true strategies for keeping hens warm and laying.',
        category: 'Tips & Tricks',
        date: 'Nov 30, 2024',
        readTime: 7,
        emoji: '❄️',
    },
];

const categories = ['All', 'Farm Life', 'Egg Care', 'Recipes', 'Seasonal', 'Tips & Tricks'];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = allPosts.filter((p) => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />

            {/* Header */}
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B4D3A] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">Stories & Tips</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">The Coop Blog</h1>
                <p className="text-white/70 max-w-lg mx-auto">Farm life, egg care, recipes, and seasonal updates straight from our little patch of land.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Search + Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${activeCategory === cat
                                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                                        : 'border-gray-200 text-gray-600 hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">
                        <div className="text-5xl mb-4">🔍</div>
                        <p className="text-lg">No posts found for that search.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
