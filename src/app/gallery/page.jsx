'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const photos = [
    { emoji: '🐔', category: 'Chickens', label: 'Duchess in the morning sun', size: 'large' },
    { emoji: '🦆', category: 'Ducks', label: 'Daffy exploring the yard', size: 'medium' },
    { emoji: '🥚', category: 'Eggs', label: 'Fresh morning collection', size: 'small' },
    { emoji: '🐣', category: 'Farm Life', label: 'Spring baby chicks', size: 'medium' },
    { emoji: '🌾', category: 'Farm Life', label: 'Harvest afternoon light', size: 'large' },
    { emoji: '🐔', category: 'Chickens', label: 'The whole flock free-ranging', size: 'small' },
    { emoji: '🦆', category: 'Ducks', label: 'Bath time at the pond', size: 'large' },
    { emoji: '🥚', category: 'Eggs', label: 'Blue-green Easter Egger eggs', size: 'medium' },
    { emoji: '🐔', category: 'Chickens', label: 'Scrambled getting treats', size: 'small' },
    { emoji: '🌿', category: 'Farm Life', label: 'The vegetable garden', size: 'medium' },
    { emoji: '🦆', category: 'Ducks', label: 'Drake keeping watch', size: 'small' },
    { emoji: '🥚', category: 'Eggs', label: 'Duck and chicken eggs side by side', size: 'large' },
];

const categories = ['All', 'Chickens', 'Ducks', 'Eggs', 'Farm Life'];
const sizeClass = { large: 'row-span-2 col-span-2', medium: 'row-span-2', small: '' };

export default function GalleryPage() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active);

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B2D20] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">Life on the Farm</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">Gallery</h1>
                <p className="text-white/70 max-w-lg mx-auto">A peek into our daily farm life — from morning egg collection to afternoon free-ranging chaos.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all ${active === cat ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]' : 'border-gray-200 text-gray-600 hover:border-[#2D6A4F]'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {filtered.map((photo, i) => (
                        <div key={i}
                            className={`${sizeClass[photo.size]} bg-gradient-to-br from-[#95D5B2]/30 to-[#2D6A4F]/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow cursor-pointer group border border-gray-100`}>
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{photo.emoji}</span>
                            <p className="text-xs text-gray-500 text-center px-3">{photo.label}</p>
                            <span className="text-xs bg-[#2D6A4F]/10 text-[#2D6A4F] px-2 py-0.5 rounded-full">{photo.category}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
