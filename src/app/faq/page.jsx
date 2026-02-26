'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: 'Where are you located?', a: "We're a small hobby farm located in a rural area. We do local pickup only — reach out via the Contact page to arrange a time.", category: 'General' },
    { q: 'How do I order eggs?', a: 'Visit our Shop page and add items to your cart. We offer local pickup only. Once you complete checkout, we\'ll email you a pickup time.', category: 'Ordering' },
    { q: 'How fresh are the eggs?', a: 'Eggs are collected daily. Your order will never be more than 48 hours old at pickup time.', category: 'Eggs' },
    { q: 'Should I refrigerate farm-fresh eggs?', a: 'Once washed, yes — refrigerate them. Unwashed eggs with the bloom intact can sit at room temp for up to 2 weeks. We recommend refrigerating for best shelf life.', category: 'Eggs' },
    { q: 'Do you wash the eggs before selling?', a: 'Yes, all eggs are gently washed and inspected before sale. Once washed, keep them refrigerated.', category: 'Eggs' },
    { q: 'What makes duck eggs special?', a: 'Duck eggs have a higher fat content and larger yolk, making them richer in flavor. Bakers love them because they create fluffier cakes and richer custards.', category: 'Eggs' },
    { q: 'Are your eggs certified organic?', a: 'We are not currently USDA certified organic (certification is expensive for small farms), but we follow organic practices: no GMO feed, no antibiotics, no pesticides on range.', category: 'Eggs' },
    { q: 'How long do farm eggs last?', a: 'Refrigerated washed farm eggs last 4–6 weeks. Commercial eggs can sit for months before getting to stores — ours are genuinely fresh.', category: 'Eggs' },
    { q: 'Do you ship eggs?', a: "No — fresh eggs don't travel well and we want to ensure quality. We offer local pickup only in our area.", category: 'Ordering' },
    { q: 'Can I get a recurring weekly order?', a: 'Yes! We love our weekly regulars. Contact us to set up a subscription and we\'ll reserve your allotment each week.', category: 'Ordering' },
    { q: 'How can I donate to the farm?', a: 'Visit our Donate page to make a one-time or monthly donation. Every dollar goes directly to animal care, feed, and housing improvements.', category: 'General' },
    { q: 'Do you offer farm tours?', a: 'We occasionally host open farm days, especially in spring! Follow us on social media or subscribe to our newsletter for announcements.', category: 'General' },
    { q: 'Can I buy merchandise separately from eggs?', a: 'Absolutely! The merchandise section of our shop is always open and ships standard mail.', category: 'Ordering' },
    { q: 'What breeds do you have?', a: 'Chickens: Buff Orpington, Rhode Island Red, Barred Rock, Golden Comet, Easter Egger, Australorp, Cinnamon Queen, and Black Sexlink. Ducks: Pekin, Khaki Campbell, and Swedish Blue.', category: 'Animals' },
    { q: 'Do you sell chicks or ducklings?', a: "Not at this time. We focus on eggs and running a sustainable, happy flock. Maybe someday!", category: 'Animals' },
];

const categories = ['All', 'General', 'Eggs', 'Ordering', 'Animals'];

export default function FAQPage() {
    const [open, setOpen] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B4D3A] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">Got Questions?</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">Frequently Asked Questions</h1>
                <p className="text-white/70 max-w-lg mx-auto">Everything you wanted to know about our eggs, our animals, and how we operate.</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${activeCategory === cat ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]' : 'border-gray-200 text-gray-600 hover:border-[#2D6A4F]'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="space-y-2">
                    {filtered.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full text-left flex items-center justify-between gap-3 px-6 py-5 hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-[#1B2D20]">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-[#2D6A4F] shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
