import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const postData = {
    'meet-our-flock': {
        title: 'Meet Our Flock: 30 Personalities, One Happy Farm',
        category: 'Farm Life',
        date: 'February 10, 2025',
        readTime: 5,
        emoji: '🐔',
        content: `Every morning when we open the coop door, it's the same joyful chaos. Duchess pushes to the front. Scrambled sprints past everyone. Daffy announces herself with a sound that could wake the neighbors. We wouldn't trade a single second of it.

We have 20 chickens and 10 ducks at Clucky Acres, and every single one of them has a name, a personality quirk, and a habit that either delights or baffles us daily.

## The Chicken Side of Things

**Duchess (Buff Orpington)** is our undisputed queen. She's the first out every morning and the last to forgive you if treats are late. She has an opinion about everything and isn't shy about sharing it.

**Scrambled (Rhode Island Red)** is our speed champion. She's at the feeder before you've finished opening the gate. Don't bother trying to count her calories — she has absolutely no interest in moderation.

**Pickles (Barred Rock)** lives for mud. Any puddle, any wet patch of grass, any freshly watered garden bed — Pickles will find it and investigate it thoroughly. Her feathers are perpetually a little questionable.

**Pebbles (Easter Egger)** is our artist. She's responsible for those gorgeous blue-green eggs you'll sometimes find in a mixed dozen. She's quiet, dignified, and completely unbothered by the chaos around her.

## The Duck Contingent

**Daffy (Pekin Duck)** was the first duck we brought home and immediately established herself as the farm's ambassador. She investigates everything new — new people, new tools, new puddles — with fearless enthusiasm.

**Drake (Pekin Drake)** is loud and proud and in charge of approximately nothing. He makes a lot of pronouncements. Nobody listens. He has come to terms with this.

**Waddles (Khaki Campbell)** is the fastest duck alive. She moves at a pace that seems physically impossible for something with that body shape.

## Why We Name Them

Some people think it's silly to name farm animals. We think it's the whole point. When you know who you're caring for — when Duchess has a bad day and you notice because you know what her good days look like — you give better care. Simple as that.

These animals give us eggs, joy, and an excuse to spend time outside every single day. The least we can do is learn their names.`,
    },
};

export default function BlogPostPage({ params }) {
    const post = postData[params.slug] || {
        title: 'Farm Life Post',
        category: 'Farm Life',
        date: 'February 2025',
        readTime: 5,
        emoji: '🐔',
        content: 'Full post coming soon!',
    };

    const paragraphs = post.content.split('\n\n');

    return (
        <div className="min-h-screen bg-[#FAFAF7]">
            <Navigation />

            <div className="pt-24 pb-12 px-6 bg-gradient-to-br from-[#2D6A4F] to-[#1B2D20] text-white">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#95D5B2] hover:text-white text-sm mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs">
                            <Tag className="w-3 h-3" /> {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-white/60 text-xs">
                            <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-white/60 text-xs">
                            <Clock className="w-3 h-3" /> {post.readTime} min read
                        </span>
                    </div>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight">{post.title}</h1>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="text-center text-8xl mb-10">{post.emoji}</div>
                <div className="prose prose-lg max-w-none">
                    {paragraphs.map((para, i) => {
                        if (para.startsWith('## ')) {
                            return <h2 key={i} className="font-heading text-2xl font-bold text-[#1B2D20] mt-8 mb-4">{para.replace('## ', '')}</h2>;
                        }
                        if (para.startsWith('**') && para.includes('**')) {
                            return <p key={i} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1B2D20]">$1</strong>') }} />;
                        }
                        return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
                    })}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#2D6A4F] hover:text-[#1B4D3A] font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to all posts
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
