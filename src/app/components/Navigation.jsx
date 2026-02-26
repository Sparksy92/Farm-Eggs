'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Egg } from 'lucide-react';

export default function Navigation({ cartCount = 0 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/shop', label: 'Shop' },
        { href: '/blog', label: 'Blog' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/donate', label: 'Donate' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-full bg-[#2D6A4F] flex items-center justify-center group-hover:bg-[#1B4D3A] transition-colors">
                            <Egg className="w-5 h-5 text-white" />
                        </div>
                        <div className="leading-tight">
                            <span className="font-heading font-bold text-[#1B2D20] text-xl block">Clucky Acres</span>
                            <span className="text-[#2D6A4F] text-xs block -mt-0.5">Farm Fresh Eggs</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="px-3 py-2 rounded-lg text-[#1B2D20] hover:text-[#2D6A4F] hover:bg-[#95D5B2]/20 text-sm font-medium transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Cart + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/shop"
                            className="relative flex items-center gap-1.5 bg-[#2D6A4F] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1B4D3A] transition-colors"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            <span className="hidden sm:block">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-[#F4A261] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-100 py-3">
                        <ul className="flex flex-col gap-1">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="block px-4 py-2.5 rounded-lg text-[#1B2D20] hover:text-[#2D6A4F] hover:bg-[#95D5B2]/20 font-medium transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
