'use client';

import { ShoppingCart, Star } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
    const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(product.rating || 5));

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
            {/* Image */}
            <div className="relative overflow-hidden h-52 bg-gradient-to-br from-[#95D5B2]/30 to-[#2D6A4F]/10">
                {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-[#F4A261] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {product.badge}
                    </span>
                )}
                <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                    {product.emoji || '🥚'}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                    <h3 className="font-heading font-semibold text-[#1B2D20] text-lg leading-tight">{product.name}</h3>
                    <span className="font-bold text-[#2D6A4F] text-lg ml-2 shrink-0">${product.price}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {stars.map((filled, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${filled ? 'fill-[#F4A261] text-[#F4A261]' : 'text-gray-200'}`} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({product.reviews || 42})</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                <button
                    onClick={() => onAddToCart?.(product)}
                    className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4D3A] text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-colors duration-200"
                >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
