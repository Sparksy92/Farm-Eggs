import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DonationWidget from '../components/DonationWidget';
import { Heart } from 'lucide-react';

const supporters = [
    { name: 'The Johnson Family', amount: '$100', emoji: '👨‍👩‍👧' },
    { name: 'Sarah M.', amount: '$50', emoji: '🌟' },
    { name: 'Green Valley Co-op', amount: '$250', emoji: '🌿' },
    { name: 'Chef James R.', amount: '$75', emoji: '👨‍🍳' },
    { name: 'Anonymous Friend', amount: '$25', emoji: '❤️' },
    { name: 'Tom & Linda K.', amount: '$50', emoji: '🫶' },
];

const impacts = [
    { amount: '$10', description: 'Covers one week of fresh water systems maintenance', emoji: '💧' },
    { amount: '$25', description: 'Buys one bag of premium non-GMO feed for the flock', emoji: '🌾' },
    { amount: '$50', description: 'Funds one annual wellness check for five animals', emoji: '🩺' },
    { amount: '$100', description: 'Contributes toward new coop materials or fencing', emoji: '🏡' },
];

export default function DonatePage() {
    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />

            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#F4A261]/80 to-[#2D6A4F] text-white text-center">
                <span className="font-accent text-yellow-100 text-lg">Support the Farm</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">Help Our Flock Thrive</h1>
                <p className="text-white/80 max-w-lg mx-auto">Clucky Acres is a labor of love. Your donations help us provide the best care for our 30 feathered family members.</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Intro */}
                <div className="text-center mb-14 max-w-2xl mx-auto">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Running a small hobby farm means big hearts and tight budgets. Every donation — no matter the size — goes directly to the animals. We publish transparent breakdowns of how every dollar is spent.
                    </p>
                </div>

                {/* Donation Form */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
                    <h2 className="font-heading text-3xl font-bold text-[#1B2D20] text-center mb-8">Make a Donation</h2>
                    <DonationWidget />
                </div>

                {/* Impact Statements */}
                <div className="mb-16">
                    <h2 className="font-heading text-3xl font-bold text-[#1B2D20] text-center mb-8">Your Impact</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {impacts.map((item) => (
                            <div key={item.amount} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-3">{item.emoji}</div>
                                <div className="font-heading font-bold text-2xl text-[#2D6A4F] mb-2">{item.amount}</div>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supporter Perch */}
                <div className="bg-gradient-to-br from-[#95D5B2]/20 to-[#2D6A4F]/10 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <Heart className="w-8 h-8 text-[#F4A261] mx-auto mb-3" />
                        <h2 className="font-heading text-3xl font-bold text-[#1B2D20]">The Supporter Perch</h2>
                        <p className="text-gray-500 mt-2">Our wonderful community of donors who keep the farm going.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {supporters.map((s, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                <span className="text-2xl">{s.emoji}</span>
                                <div>
                                    <p className="font-medium text-sm text-[#1B2D20]">{s.name}</p>
                                    <p className="text-xs text-[#2D6A4F] font-semibold">{s.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
