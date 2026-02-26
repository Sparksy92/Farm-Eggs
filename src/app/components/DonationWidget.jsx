'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

const goals = [
    {
        id: 'coop',
        name: 'New Coop Fund',
        goal: 2500,
        raised: 1740,
        emoji: '🏡',
        description: 'Building a bigger, better home for our flock.',
    },
    {
        id: 'feed',
        name: 'Monthly Feed Fund',
        goal: 500,
        raised: 320,
        emoji: '🌾',
        description: 'Premium non-GMO feed for our chickens and ducks.',
    },
    {
        id: 'vet',
        name: 'Vet Care Fund',
        goal: 1000,
        raised: 480,
        emoji: '💉',
        description: 'Annual checkups and emergency care for the flock.',
    },
];

export default function DonationWidget({ compact = false }) {
    const [selected, setSelected] = useState(25);
    const [custom, setCustom] = useState('');
    const [recurring, setRecurring] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const amounts = [10, 25, 50, 100];
    const finalAmount = custom || selected;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-8">
                <div className="text-5xl mb-4">🐔</div>
                <h3 className="font-heading text-2xl font-bold text-[#1B2D20] mb-2">Thank You!</h3>
                <p className="text-gray-600">Your generous donation of <strong>${finalAmount}</strong> helps keep our flock happy and healthy.</p>
            </div>
        );
    }

    return (
        <div className={compact ? '' : 'max-w-2xl mx-auto'}>
            {/* Progress Bars */}
            {!compact && (
                <div className="space-y-5 mb-10">
                    {goals.map((g) => {
                        const pct = Math.round((g.raised / g.goal) * 100);
                        return (
                            <div key={g.id}>
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="flex items-center gap-2 font-medium text-[#1B2D20]">
                                        <span>{g.emoji}</span> {g.name}
                                    </span>
                                    <span className="text-sm text-gray-500">${g.raised.toLocaleString()} / ${g.goal.toLocaleString()}</span>
                                </div>
                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#2D6A4F] to-[#95D5B2] rounded-full transition-all duration-700"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-1">{pct}% funded · {g.description}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
                {/* One-time vs Recurring */}
                <div className="flex rounded-xl overflow-hidden border border-[#2D6A4F] mb-5 w-fit">
                    <button
                        type="button"
                        onClick={() => setRecurring(false)}
                        className={`px-5 py-2 text-sm font-medium transition-colors ${!recurring ? 'bg-[#2D6A4F] text-white' : 'text-[#2D6A4F] hover:bg-[#95D5B2]/20'}`}
                    >
                        One-Time
                    </button>
                    <button
                        type="button"
                        onClick={() => setRecurring(true)}
                        className={`px-5 py-2 text-sm font-medium transition-colors ${recurring ? 'bg-[#2D6A4F] text-white' : 'text-[#2D6A4F] hover:bg-[#95D5B2]/20'}`}
                    >
                        Monthly
                    </button>
                </div>

                {/* Amount Presets */}
                <div className="grid grid-cols-4 gap-2 mb-3">
                    {amounts.map((a) => (
                        <button
                            key={a}
                            type="button"
                            onClick={() => { setSelected(a); setCustom(''); }}
                            className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${selected === a && !custom
                                    ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                                    : 'border-gray-200 text-gray-700 hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
                                }`}
                        >
                            ${a}
                        </button>
                    ))}
                </div>

                {/* Custom Amount */}
                <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-2.5 mb-5 focus-within:border-[#2D6A4F] transition-colors">
                    <span className="text-gray-400 mr-2">$</span>
                    <input
                        type="number"
                        placeholder="Custom amount"
                        value={custom}
                        onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                        className="flex-1 outline-none text-sm"
                        min="1"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#F4A261] hover:bg-[#e8923f] text-white py-3.5 rounded-xl font-semibold text-base transition-colors"
                >
                    <Heart className="w-5 h-5" />
                    Donate ${finalAmount}{recurring ? '/mo' : ''}
                </button>
            </form>
        </div>
    );
}
