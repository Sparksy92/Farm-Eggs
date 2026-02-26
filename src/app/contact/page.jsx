'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B2D20] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">We'd Love to Hear From You</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">Contact Us</h1>
                <p className="text-white/70 max-w-lg mx-auto">Questions about eggs, orders, or just want to say hi? We answer every message personally.</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <MapPin className="w-6 h-6 text-[#2D6A4F] mb-3" />
                            <h3 className="font-heading font-semibold text-[#1B2D20] mb-1">Location</h3>
                            <p className="text-sm text-gray-600">Clucky Acres Farm<br />Rural Route, Local Area<br />Pickup by appointment only</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <Mail className="w-6 h-6 text-[#2D6A4F] mb-3" />
                            <h3 className="font-heading font-semibold text-[#1B2D20] mb-1">Email</h3>
                            <a href="mailto:hello@cluckyacres.com" className="text-sm text-[#2D6A4F] hover:underline">hello@cluckyacres.com</a>
                            <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <Phone className="w-6 h-6 text-[#2D6A4F] mb-3" />
                            <h3 className="font-heading font-semibold text-[#1B2D20] mb-1">Phone</h3>
                            <p className="text-sm text-gray-600">By appointment only<br />Email first to schedule a call</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                        {submitted ? (
                            <div className="text-center py-12">
                                <CheckCircle className="w-16 h-16 text-[#2D6A4F] mx-auto mb-4" />
                                <h2 className="font-heading text-2xl font-bold text-[#1B2D20] mb-2">Message Sent!</h2>
                                <p className="text-gray-600">Thanks, {form.name}! We'll get back to you within 24 hours. 🐔</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="font-heading text-2xl font-bold text-[#1B2D20] mb-6">Send a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors" placeholder="Your name" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors" placeholder="your@email.com" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors" required>
                                            <option value="">Select a topic...</option>
                                            <option>Egg Order / Pickup</option>
                                            <option>General Question</option>
                                            <option>Donation Inquiry</option>
                                            <option>Merchandise</option>
                                            <option>Just Saying Hi! 👋</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none" placeholder="What's on your mind?" required />
                                    </div>
                                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#1B4D3A] text-white py-3.5 rounded-xl font-semibold transition-colors">
                                        <Send className="w-4 h-4" /> Send Message
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
