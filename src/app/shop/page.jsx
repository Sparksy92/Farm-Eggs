'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, X, Trash2, Package } from 'lucide-react';

const allProducts = [
    {
        id: 1,
        name: 'Chicken Eggs — Dozen',
        price: '6.00',
        description: 'A full dozen free-range chicken eggs from our happy hens. Vibrant orange yolks, firm whites, collected fresh daily.',
        emoji: '🥚',
        badge: 'Best Seller',
        category: 'Fresh Eggs',
        rating: 5,
        reviews: 128,
    },
    {
        id: 2,
        name: 'Chicken Eggs — Half Dozen',
        price: '3.50',
        description: 'Six farm-fresh chicken eggs, perfect for smaller households. Same quality, smaller quantity.',
        emoji: '🥚',
        category: 'Fresh Eggs',
        rating: 5,
        reviews: 89,
    },
    {
        id: 3,
        name: 'Duck Eggs — Half Dozen',
        price: '7.50',
        description: 'Rich, creamy duck eggs prized by bakers and chefs. Higher protein, larger yolk, unforgettable flavor.',
        emoji: '🦆',
        badge: 'Premium',
        category: 'Fresh Eggs',
        rating: 5,
        reviews: 64,
    },
    {
        id: 4,
        name: 'Mixed Flock Dozen',
        price: '8.50',
        description: 'A curated mix of chicken and duck eggs — a little of everything from our flock. Great for adventurous cooks.',
        emoji: '🫙',
        category: 'Fresh Eggs',
        rating: 5,
        reviews: 41,
    },
    {
        id: 5,
        name: 'Clucky Acres Tote Bag',
        price: '18.00',
        description: 'Natural canvas tote with our hand-drawn farm logo. Durable, reusable, and conversation-starting.',
        emoji: '👜',
        badge: 'New',
        category: 'Merchandise',
        rating: 4,
        reviews: 21,
    },
    {
        id: 6,
        name: 'Farm Logo T-Shirt',
        price: '24.00',
        description: 'Soft, unisex tee featuring the Clucky Acres illustrated logo. Available in S–2XL. Show your farm pride!',
        emoji: '👕',
        category: 'Merchandise',
        rating: 5,
        reviews: 15,
    },
    {
        id: 7,
        name: 'Enamel Mug — Hen House',
        price: '16.00',
        description: 'A cozy 12oz enamel mug with our illustrated hen house design. Microwave & dishwasher safe.',
        emoji: '☕',
        category: 'Merchandise',
        rating: 5,
        reviews: 33,
    },
    {
        id: 8,
        name: 'Gift Card',
        price: '25.00',
        description: 'Give the gift of farm-fresh goodness! Available in $15, $25, and $50 values.',
        emoji: '🎁',
        category: 'Gift Cards',
        rating: 5,
        reviews: 8,
    },
];

const categories = ['All', 'Fresh Eggs', 'Merchandise', 'Gift Cards'];

export default function ShopPage() {
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [cartOpen, setCartOpen] = useState(false);

    const filtered = activeCategory === 'All' ? allProducts : allProducts.filter((p) => p.category === activeCategory);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((i) => i.id === product.id);
            if (existing) {
                return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...product, qty: 1 }];
        });
        setCartOpen(true);
    };

    const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cart.reduce((s, i) => s + parseFloat(i.price) * i.qty, 0).toFixed(2);

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation cartCount={totalQty} />

            {/* Header */}
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B4D3A] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">Farm to Table</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">Our Shop</h1>
                <p className="text-white/70 max-w-lg mx-auto">Farm-fresh eggs and Clucky Acres goods, available for local pickup or delivery.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all ${activeCategory === cat
                                    ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                                    : 'border-gray-200 text-gray-600 hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                    ))}
                </div>
            </div>

            {/* Cart Sidebar */}
            {cartOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="flex-1 bg-black/40" onClick={() => setCartOpen(false)} />
                    <div className="w-full max-w-sm bg-white h-full flex flex-col shadow-2xl">
                        <div className="flex items-center justify-between p-5 border-b">
                            <h2 className="font-heading font-bold text-xl flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 text-[#2D6A4F]" /> Cart ({totalQty})
                            </h2>
                            <button onClick={() => setCartOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-5 space-y-4">
                            {cart.length === 0 ? (
                                <div className="text-center py-12 text-gray-400">
                                    <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                    <p>Your cart is empty</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                        <span className="text-3xl">{item.emoji}</span>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm text-[#1B2D20]">{item.name}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.qty} · ${(parseFloat(item.price) * item.qty).toFixed(2)}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-red-50 hover:text-red-500 rounded transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-5 border-t">
                                <div className="flex justify-between font-semibold text-lg mb-4">
                                    <span>Total</span>
                                    <span className="text-[#2D6A4F]">${totalPrice}</span>
                                </div>
                                <button className="w-full bg-[#2D6A4F] hover:bg-[#1B4D3A] text-white py-3.5 rounded-xl font-semibold transition-colors">
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
