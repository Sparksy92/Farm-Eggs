'use client';

import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

export default function BlogCard({ post }) {
    const categoryColors = {
        'Farm Life': 'bg-[#95D5B2]/20 text-[#2D6A4F]',
        'Egg Care': 'bg-amber-100 text-amber-700',
        'Recipes': 'bg-orange-100 text-orange-700',
        'Seasonal': 'bg-blue-100 text-blue-700',
        'Tips & Tricks': 'bg-purple-100 text-purple-700',
    };
    const colorClass = categoryColors[post.category] || 'bg-gray-100 text-gray-600';

    return (
        <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Thumbnail */}
            <div className="h-48 bg-gradient-to-br from-[#95D5B2]/40 to-[#2D6A4F]/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {post.emoji || '🐔'}
            </div>

            <div className="p-5">
                {/* Category */}
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colorClass}`}>
                    <Tag className="w-3 h-3" />
                    {post.category}
                </span>

                <h3 className="font-heading font-semibold text-[#1B2D20] text-lg leading-tight mb-2 group-hover:text-[#2D6A4F] transition-colors">
                    {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    {post.readTime && (
                        <>
                            <span>·</span>
                            <span>{post.readTime} min read</span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
