'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Egg, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-[#1B2D20] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Col 1: Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[#2D6A4F] flex items-center justify-center">
                                <Egg className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="font-heading font-bold text-xl block">Clucky Acres</span>
                                <span className="text-[#95D5B2] text-xs">Farm Fresh Eggs</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            A small hobby farm raising 20 happy chickens and 10 ducks with love, fresh air, and plenty of bugs.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors" aria-label="Facebook">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors" aria-label="Instagram">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors" aria-label="YouTube">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-[#95D5B2]">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about', label: 'About Us' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/gallery', label: 'Gallery' },
                                { href: '/donate', label: 'Support the Farm' },
                                { href: '/contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[#95D5B2] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Shop */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-[#95D5B2]">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/shop', label: 'Fresh Eggs' },
                                { href: '/shop', label: 'Duck Eggs' },
                                { href: '/shop', label: 'Farm Merchandise' },
                                { href: '/shop', label: 'Gift Cards' },
                                { href: '/faq', label: 'FAQ' },
                                { href: '/policies', label: 'Policies' },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-gray-400 hover:text-[#95D5B2] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact + Newsletter */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4 text-[#95D5B2]">Stay in Touch</h3>
                        <ul className="space-y-3 text-sm text-gray-400 mb-5">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#95D5B2] shrink-0" />
                                <span>Clucky Acres Farm, Rural Route</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#95D5B2] shrink-0" />
                                <a href="mailto:hello@cluckyacres.com" className="hover:text-[#95D5B2] transition-colors">hello@cluckyacres.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#95D5B2] shrink-0" />
                                <span>By appointment only</span>
                            </li>
                        </ul>
                        {subscribed ? (
                            <p className="text-[#95D5B2] text-sm font-medium">🎉 You're on the list!</p>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-[#95D5B2] transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#2D6A4F] hover:bg-[#95D5B2] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Join
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
                    <p>© 2025 Clucky Acres Farm. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/policies" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="/policies" className="hover:text-gray-300 transition-colors">Shipping Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
