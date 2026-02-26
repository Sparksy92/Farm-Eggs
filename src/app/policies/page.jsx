'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const tabs = ['Shipping', 'Returns', 'Privacy'];

const policies = {
    Shipping: {
        emoji: '📦',
        content: [
            { title: 'Local Pickup Only', body: 'At this time, Clucky Acres eggs are available for local pickup only. We do not ship fresh eggs. Pickup is by appointment — after placing your order, we will contact you within 24 hours to schedule a convenient time.' },
            { title: 'Merchandise Shipping', body: 'Branded merchandise (tote bags, t-shirts, mugs) ships via USPS First Class or Priority Mail within 3–5 business days of order. Shipping rates are calculated at checkout based on weight and destination.' },
            { title: 'Order Notification', body: 'You will receive an email confirmation immediately after placing an order, and a second email when your order is ready or shipped.' },
        ],
    },
    Returns: {
        emoji: '🔄',
        content: [
            { title: 'Egg Quality Guarantee', body: 'We stand behind the quality of every egg we sell. If you receive an egg that is cracked, spoiled, or otherwise unsatisfactory, contact us within 48 hours of pickup and we will replace it or issue a full refund — no questions asked.' },
            { title: 'Merchandise Returns', body: 'Merchandise may be returned within 14 days of receipt for a full refund or exchange. Items must be unworn and in original condition. Contact us first to initiate a return.' },
            { title: 'How to Contact Us', body: 'Email hello@cluckyacres.com with your order number, a description of the issue, and (for egg quality concerns) a photo. We respond within 24 hours on business days.' },
        ],
    },
    Privacy: {
        emoji: '🔒',
        content: [
            { title: 'What We Collect', body: 'We collect your name, email address, and order details when you place an order or sign up for our newsletter. We do not collect payment information directly — that is handled securely by our payment processor.' },
            { title: 'How We Use Your Data', body: 'Your information is used solely to fulfill orders, communicate about your purchase, and (if you opt in) send our newsletter. We never sell or share your data with third parties for marketing purposes.' },
            { title: 'Newsletter', body: 'Our newsletter is opt-in only. You can unsubscribe at any time using the link in any email we send. We\'ll miss you, but we respect your inbox.' },
            { title: 'Cookies', body: 'Our website uses only essential cookies to maintain session state (e.g., your cart). We do not use tracking or advertising cookies.' },
            { title: 'Contact', body: 'For privacy concerns or data deletion requests, email hello@cluckyacres.com and we will respond within 5 business days.' },
        ],
    },
};

export default function PoliciesPage() {
    const [activeTab, setActiveTab] = useState('Shipping');
    const policy = policies[activeTab];

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />
            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B2D20] text-white text-center">
                <h1 className="font-heading font-bold text-5xl mt-8 mb-3">Our Policies</h1>
                <p className="text-white/70 max-w-lg mx-auto">We believe in transparency. Here's exactly how we operate.</p>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="flex border-b border-gray-200 mb-8">
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all ${activeTab === tab ? 'border-[#2D6A4F] text-[#2D6A4F]' : 'border-transparent text-gray-500 hover:text-[#2D6A4F]'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-8">
                    <span className="text-5xl">{policy.emoji}</span>
                    <h2 className="font-heading text-2xl font-bold text-[#1B2D20] mt-3">{activeTab} Policy</h2>
                </div>

                <div className="space-y-6">
                    {policy.content.map((section) => (
                        <div key={section.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-heading font-semibold text-lg text-[#1B2D20] mb-2">{section.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{section.body}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-400 mt-8">Last updated: February 2025 · Questions? <a href="mailto:hello@cluckyacres.com" className="text-[#2D6A4F] hover:underline">hello@cluckyacres.com</a></p>
            </div>
            <Footer />
        </div>
    );
}
