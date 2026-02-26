import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const flockMembers = [
    { name: 'Duchess', breed: 'Buff Orpington', role: 'Head Hen', trait: 'Drama queen & top of the pecking order', emoji: '👸' },
    { name: 'Scrambled', breed: 'Rhode Island Red', role: 'First at the Feeder', trait: 'Always first for breakfast, every single day', emoji: '🔴' },
    { name: 'Pickles', breed: 'Barred Rock', role: 'Mud Enthusiast', trait: 'Happiest when it rains, loves a good puddle', emoji: '🖤' },
    { name: 'Goldie', breed: 'Golden Comet', role: 'Escape Artist', trait: 'Has escaped the run 7 times and counting', emoji: '🌟' },
    { name: 'Pebbles', breed: 'Easter Egger', role: 'Colorful Layer', trait: 'Lays the most beautiful blue-green eggs', emoji: '💙' },
    { name: 'Henrietta', breed: 'Australorp', role: 'Record Holder', trait: 'Our most consistent layer, rain or shine', emoji: '🏆' },
    { name: 'Maple', breed: 'Cinnamon Queen', role: 'People Person', trait: 'Will follow you around the yard all day', emoji: '🍁' },
    { name: 'Cleo', breed: 'Black Sexlink', role: 'Night Owl', trait: 'Last one to the coop every single evening', emoji: '🌙' },
    { name: 'Butterscotch', breed: 'Buff Brahma', role: 'Gentle Giant', trait: 'Biggest hen, softest personality', emoji: '🧈' },
    { name: 'Rosie', breed: 'Production Red', role: 'Busy Bee', trait: 'Always pecking, scratching, and exploring', emoji: '🌹' },
    { name: 'Daffy', breed: 'Pekin Duck', role: 'Fearless Explorer', trait: 'Not a duck who knows fear or fences', emoji: '🦆' },
    { name: 'Drake', breed: 'Pekin Drake', role: 'Head of Ducks', trait: 'Loud, proud, and in charge of nothing', emoji: '🎺' },
    { name: 'Waddles', breed: 'Khaki Campbell', role: 'Speed Walker', trait: 'Fastest duck you have ever seen', emoji: '💨' },
    { name: 'Splash', breed: 'Swedish Blue', role: 'Pool Captain', trait: 'Runs the kiddie pool with an iron wing', emoji: '💦' },
];

const practices = [
    { icon: '🌿', title: 'Free-Range Daily', desc: 'All animals have access to acres of outdoor space every day, weather permitting.' },
    { icon: '🌾', title: 'Non-GMO Feed', desc: 'We supplement natural foraging with premium non-GMO, hormone-free feed.' },
    { icon: '🚫', title: 'No Antibiotics', desc: 'We rely on preventive care, not antibiotics. Healthy animals from the start.' },
    { icon: '💧', title: 'Fresh Water Always', desc: 'Clean water available 24/7, refreshed twice daily in summer months.' },
    { icon: '🏡', title: 'Spacious Housing', desc: 'Each bird has far more space than industry standards. Comfort is priority.' },
    { icon: '❤️', title: 'Daily Welfare Checks', desc: 'Every animal is observed and interacted with daily. We know them by name.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />

            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B2D20] text-white text-center">
                <span className="font-accent text-[#95D5B2] text-lg">Our Story</span>
                <h1 className="font-heading font-bold text-5xl mt-1 mb-3">About Clucky Acres</h1>
                <p className="text-white/70 max-w-lg mx-auto">A hobby farm, a big dream, and a whole lot of feathers.</p>
            </div>

            {/* Farm Story */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mb-6">How It All Started</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>Clucky Acres began the way most great adventures do — impulsively. We brought home four baby chicks from a feed store on a whim, with a cardboard box and zero experience. That was five years ago.</p>
                                <p>What started as a fun backyard project quickly turned into a genuine passion. We learned everything the hard way: about feed ratios, predator-proofing, molting seasons, and which hens absolutely cannot stand each other.</p>
                                <p>Today, our little operation has 20 chickens across eight heritage breeds, 10 ducks waddling around the lower pasture, and a whole community of egg lovers who join us each week at pickup.</p>
                                <p>We started this website to share our journey, sell our surplus eggs, and build something we're proud of — one cluck at a time.</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#95D5B2]/30 to-[#2D6A4F]/10 rounded-3xl p-10 text-center">
                            <div className="text-8xl mb-4">🐣</div>
                            <div className="space-y-3 text-sm">
                                {[
                                    { year: '2020', event: 'First 4 chicks arrive' },
                                    { year: '2021', event: 'Expanded to 12 hens' },
                                    { year: '2022', event: 'Added our first 4 ducks' },
                                    { year: '2023', event: 'Built the big coop' },
                                    { year: '2024', event: 'Reached 30 animals!' },
                                    { year: '2025', event: 'Launched Clucky Acres' },
                                ].map((item) => (
                                    <div key={item.year} className="flex items-center justify-center gap-3">
                                        <span className="font-bold text-[#2D6A4F] w-10">{item.year}</span>
                                        <span className="text-gray-600">{item.event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Practices */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl font-bold text-[#1B2D20]">Our Practices</h2>
                        <p className="text-gray-500 mt-3 max-w-lg mx-auto">We believe farm animals deserve a genuinely good life. Here's how we make that happen.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {practices.map((p) => (
                            <div key={p.title} className="bg-[#FAFAF7] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-3">{p.icon}</div>
                                <h3 className="font-heading font-semibold text-lg text-[#1B2D20] mb-2">{p.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Flock */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="font-accent text-[#2D6A4F] text-lg">Our Feathered Family</span>
                        <h2 className="font-heading text-4xl font-bold text-[#1B2D20] mt-1">Meet the Flock</h2>
                        <p className="text-gray-500 mt-3">Every one of our animals has a name, a personality, and a place in our hearts.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {flockMembers.map((m) => (
                            <div key={m.name} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="text-5xl mb-3">{m.emoji}</div>
                                <h3 className="font-heading font-semibold text-lg text-[#1B2D20]">{m.name}</h3>
                                <p className="text-xs font-medium text-[#2D6A4F] mb-1">{m.breed}</p>
                                <p className="text-xs text-gray-400 italic mb-2">"{m.role}"</p>
                                <p className="text-xs text-gray-600">{m.trait}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
