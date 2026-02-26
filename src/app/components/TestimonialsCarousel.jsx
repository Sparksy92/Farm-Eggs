'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah M.',
        location: 'Maplewood, WI',
        quote: "The eggs from Clucky Acres are unlike anything I've bought at the store. The yolks are this gorgeous deep orange — you can just tell the hens are living their best lives!",
        avatar: '👩‍🦰',
    },
    {
        name: 'Tom & Linda K.',
        location: 'Cedar Falls',
        quote: "We've been weekly customers for two years now. The duck eggs are particularly special for our weekend baking — richer, creamier, just divine.",
        avatar: '👨‍👩‍👦',
    },
    {
        name: 'Chef James R.',
        location: 'Local Restaurant Owner',
        quote: "As a chef, I'm picky about my sources. Clucky Acres delivers consistently beautiful eggs with the most vibrant yolks. My farm-to-table brunch menu wouldn't be the same.",
        avatar: '👨‍🍳',
    },
    {
        name: 'Emily T.',
        location: 'Brookside Community Garden',
        quote: "Finding this farm was a blessing. Knowing the animals are free-range and cared for by a wonderful family makes every bite taste even better.",
        avatar: '🌱',
    },
];

export default function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const t = testimonials[current];

    return (
        <div className="relative max-w-3xl mx-auto text-center px-8">
            <Quote className="w-10 h-10 text-[#95D5B2] mx-auto mb-6" />

            <blockquote className="font-accent text-2xl text-[#1B2D20] leading-relaxed mb-8 min-h-[120px] transition-all duration-500">
                "{t.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-3xl">{t.avatar}</span>
                <div className="text-left">
                    <p className="font-heading font-semibold text-[#1B2D20]">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mb-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#2D6A4F] w-6' : 'bg-gray-300'}`}
                        aria-label={`Testimonial ${i + 1}`}
                    />
                ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-3">
                <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Next"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
