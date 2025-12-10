"use client";
// import image_0adf8eb1507afe77eade045630101c74461742c0 from 'figma:asset/0adf8eb1507afe77eade045630101c74461742c0.png';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, Tag, ArrowRight, TrendingUp, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '@/components/ui/atoms/ImageWithFallback';

interface BlogPageProps {
  onClose?: () => void;
  onGoHome?: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
}

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  readTime?: string;
  fullContent?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Style Tips',
    date: 'March 15, 2025',
    title: 'Understanding Your Body Shape and Fashion Choices',
    excerpt: 'Learn how identifying your body shape can transform your fashion choices and style confidence.',
    image: "",
    featured: true,
    readTime: '5 min read',
    fullContent: `
      <p>Every body is unique and beautiful in its own way. Understanding your body shape is not about conforming to standards, but about celebrating what makes you, you. When you know your body shape, you can make fashion choices that enhance your natural features and boost your confidence.</p>
      
      <h3>The Five Main Body Shapes</h3>
      <p>Fashion experts typically categorize body shapes into five main types: Rectangle, Triangle (Pear), Inverted Triangle, Hourglass, and Apple. Each shape has its own beautiful characteristics and understanding yours helps you choose clothing that flatters your figure.</p>
      
      <h4>Rectangle Body Shape</h4>
      <p>If your shoulders, waist, and hips are relatively similar in width, you likely have a rectangle body shape. This athletic build looks amazing in clothing that creates curves and defines the waist. Try belted dresses, peplum tops, and fit-and-flare styles.</p>
      
      <h4>Triangle (Pear) Body Shape</h4>
      <p>With hips wider than shoulders, the pear shape is incredibly feminine. Emphasize your upper body with statement necklines, bright colors on top, and darker bottoms. A-line skirts and wide-leg pants are your best friends.</p>
      
      <h4>Inverted Triangle Body Shape</h4>
      <p>Broader shoulders with narrower hips create this strong, athletic silhouette. Balance your proportions with V-necks, A-line skirts, and details that draw attention to your lower half.</p>
      
      <h4>Hourglass Body Shape</h4>
      <p>With balanced shoulders and hips and a defined waist, the hourglass shape shines in fitted clothing. Wrap dresses, high-waisted styles, and anything that cinches at the waist will accentuate your curves beautifully.</p>
      
      <h4>Apple Body Shape</h4>
      <p>Carrying weight around the midsection with slimmer legs, apple shapes look fantastic in empire waist dresses, V-necklines that elongate the torso, and styles that skim over the middle while showing off those gorgeous legs.</p>
      
      <h3>Fashion Tips for Every Body Shape</h3>
      <p>Regardless of your body shape, certain universal principles apply. Always prioritize fit over size - a well-fitted garment in a larger size looks better than squeezing into something too small. Invest in quality undergarments that provide proper support and create a smooth silhouette.</p>
      
      <h3>The Power of Proportions</h3>
      <p>Understanding proportions is key to dressing your body shape. If you're petite, avoid overwhelming your frame with oversized pieces. If you're tall, embrace maxi lengths and longer layers. The goal is to create visual balance that makes you feel confident and comfortable.</p>
      
      <h3>Embrace Your Shape with StyleMyFit</h3>
      <p>Our revolutionary technology takes the guesswork out of finding clothes that fit and flatter your unique body shape. By analyzing your measurements and body type, we provide personalized recommendations that help you look and feel your absolute best. Fashion should be fun, not frustrating - and with the right knowledge and tools, you can build a wardrobe you love.</p>
    `,
  },
  {
    id: 2,
    category: 'Technology',
    date: 'April 8, 2025',
    title: 'The Science Behind Perfect Fit Clothing',
    excerpt: 'Discover how technology is changing the way we shop for clothes online with better fit predictions.',
    image: 'https://images.unsplash.com/photo-1758521960392-fe9c9e35aa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2xvdGhpbmclMjBmaXR8ZW58MXx8fHwxNzYyODE3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '7 min read',
    fullContent: `
      <p>Online fashion shopping has come a long way since its inception. What started as a risky proposition - buying clothes without trying them on - has evolved into a sophisticated industry powered by cutting-edge technology. Today, artificial intelligence and machine learning are revolutionizing how we find the perfect fit.</p>
      
      <h3>The Problem with Traditional Sizing</h3>
      <p>Anyone who's shopped for clothes knows the frustration: you're a size 10 in one brand, a size 12 in another, and a medium in yet another. Traditional sizing is inconsistent, outdated, and fails to account for the beautiful diversity of human bodies. This leads to high return rates, waste, and frustrated customers.</p>
      
      <h3>How AI Analyzes Your Body Shape</h3>
      <p>Modern body shape analysis uses sophisticated algorithms that go far beyond simple measurements. By analyzing key data points - shoulder width, bust, waist, hips, and more - AI can determine not just your size, but your unique body proportions and shape category.</p>
      
      <h3>Machine Learning and Fit Prediction</h3>
      <p>Machine learning models are trained on millions of data points from real customers. They learn which garments fit which body types, taking into account factors like fabric stretch, cut, and design. The more data the system processes, the more accurate its predictions become.</p>
      
      <h3>The Database of Perfect Fits</h3>
      <p>Behind every great fit recommendation is a comprehensive database. This database contains detailed information about thousands of garments - their measurements, how they drape, how the fabric behaves, and real customer feedback about fit. When you input your measurements, the system compares them against this database to find your perfect matches.</p>
      
      <h3>Virtual Try-On Technology</h3>
      <p>The future of online shopping includes augmented reality and virtual try-on features. Using your smartphone camera, you can see how clothes will look on your body before you buy. This technology creates a digital representation of you and overlays clothing items in real-time.</p>
      
      <h3>Reducing Returns and Environmental Impact</h3>
      <p>Better fit prediction doesn't just benefit customers - it's crucial for sustainability. The fashion industry generates massive waste through returns. When customers can confidently choose items that will fit, return rates drop dramatically, reducing the environmental impact of shipping and packaging.</p>
      
      <h3>The StyleMyFit Advantage</h3>
      <p>Our platform combines all these technologies into one seamless experience. From initial body shape analysis to personalized recommendations, we're using science and technology to ensure you get clothes that fit perfectly the first time. No more guesswork, no more disappointment - just fashion that works for your unique body.</p>
      
      <h3>The Future is Personalized</h3>
      <p>As technology continues to advance, the shopping experience will become increasingly personalized. Imagine a future where every online store knows your exact measurements and preferences, where virtual fitting rooms are as accurate as physical ones, and where every purchase fits perfectly. That future is closer than you think, and it's being built today with innovations in AI, machine learning, and computer vision.</p>
    `,
  },
  {
    id: 3,
    category: 'Sustainability',
    date: 'May 22, 2025',
    title: 'Sustainable Fashion: Making Ethical Choices',
    excerpt: 'How choosing well-fitted clothing reduces returns and contributes to sustainable fashion practices.',
    image: 'https://images.unsplash.com/photo-1699266811103-5039f618f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBldGhpY2FsfGVufDF8fHx8MTc2MjgxNzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min read',
    fullContent: `
      <p>The fashion industry is one of the world's largest polluters, responsible for 10% of global carbon emissions and 20% of wastewater. But there's a less-discussed contributor to this problem: returns. Every year, billions of items are returned, creating a massive environmental footprint through transportation, repackaging, and often, disposal.</p>
      
      <h3>The Return Rate Crisis</h3>
      <p>Online fashion retailers face return rates as high as 30-40%, with poor fit being the number one reason. Each return means double the shipping emissions, extra packaging waste, and significant energy consumption. Many returned items, especially those from fast fashion brands, end up in landfills rather than being resold.</p>
      
      <h3>How Perfect Fit Reduces Waste</h3>
      <p>When you find clothes that fit perfectly the first time, you keep them. This simple fact has profound environmental implications. Reducing returns by even 10% would save millions of tons of CO2 emissions annually. Technologies that help predict fit accurately are therefore crucial sustainability tools.</p>
      
      <h3>Quality Over Quantity</h3>
      <p>Sustainable fashion isn't just about materials - it's about mindset. When you invest in well-fitting, quality pieces that you'll wear for years, you reduce your overall consumption. A smaller wardrobe of perfect fits is more sustainable than a closet full of ill-fitting fast fashion.</p>
      
      <h3>The True Cost of Fast Fashion</h3>
      <p>Fast fashion's environmental impact extends beyond manufacturing. The business model encourages overconsumption, with trendy pieces designed to be worn a few times and discarded. Poor quality and inconsistent sizing lead to higher return rates and shorter garment lifespans.</p>
      
      <h3>Sustainable Materials Matter</h3>
      <p>Choosing clothing made from sustainable materials - organic cotton, recycled polyester, Tencel, hemp, or linen - reduces environmental impact. But even the most sustainable fabric becomes waste if the garment doesn't fit and gets returned or discarded.</p>
      
      <h3>The Circular Fashion Economy</h3>
      <p>The future of fashion is circular - designing with end-of-life in mind, using recyclable materials, and creating systems for garment repair, resale, and recycling. Well-fitting clothes are more likely to be worn, loved, repaired, and eventually passed on or recycled, keeping them in the circular economy longer.</p>
      
      <h3>Ethical Manufacturing Practices</h3>
      <p>Sustainable fashion also means fair wages and safe working conditions for garment workers. By supporting brands with ethical manufacturing practices and reducing overconsumption through better fit, we contribute to positive change throughout the fashion supply chain.</p>
      
      <h3>Your Role in Sustainable Fashion</h3>
      <p>As consumers, we have power. Every purchase is a vote for the kind of fashion industry we want. By prioritizing fit, quality, and sustainability over trends and quantity, we drive industry change. Use technology to find perfect fits, invest in quality pieces, care for your clothes properly, and choose brands aligned with your values.</p>
      
      <h3>StyleMyFit's Commitment to Sustainability</h3>
      <p>By helping you find clothes that fit perfectly the first time, we're reducing returns and their environmental impact. Our technology promotes mindful consumption - buying less but better. We believe the most sustainable garment is one you'll wear and love for years, and we're committed to helping you find exactly that.</p>
    `,
  },
];

const popularPosts = [
  { title: 'Top 10 Fashion Trends for 2025', views: '12.5K' },
  { title: 'How to Build a Capsule Wardrobe', views: '9.8K' },
  { title: 'The Ultimate Guide to Body Measurements', views: '8.2K' },
  { title: 'Color Theory in Fashion', views: '7.1K' },
];

const categories = [
  { name: 'Style Tips', count: 24 },
  { name: 'Technology', count: 18 },
  { name: 'Sustainability', count: 15 },
  { name: 'Body Positivity', count: 21 },
  { name: 'Fashion Trends', count: 32 },
];

export default function BlogPage({ onGoHome, onShopClick, onWishlistClick, onAboutClick, onContactClick, onSolutionClick, onBodyShapeGuideClick }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPostModal = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = '';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inset-0 z-[9998] bg-white overflow-y-auto"
    >

      {/* Animated Search Overlay */}
      {/* <AnimatePresence>
        {showSearchOverlay && (
          <AnimatedSearchBox 
            onClose={() => setShowSearchOverlay(false)}
          />
        )}
      </AnimatePresence> */}

      {/* Main Content */}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#222222] via-[#2d2d2d] to-[#1a1a1a] text-white overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, #b2833a 0px, #b2833a 1px, transparent 1px, transparent 20px)`,
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="text-center max-w-4xl mx-auto">
              {/* Kinetic Typography - Animated Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <motion.h1
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    className="inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #ffffff, #b2833a, #D38436, #ffffff)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Blog
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-[#d1d5db] text-[16px] sm:text-[18px] leading-relaxed mb-8 font-['Poppins:Regular',sans-serif]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                The latest news, articles, and resources on fashion, body positivity, and finding your perfect fit.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-[16px] bg-white text-[#222222] placeholder:text-[#999999] font-['Poppins:Regular',sans-serif] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#b2833a] transition-all"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-12 sm:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
            {/* Blog Posts - Bento Grid */}
            <div>
              {/* Featured Post */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(178,131,58,0.15)] transition-all duration-500 mb-8"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                  {/* Image */}
                  <div className="relative h-[280px] sm:h-[320px] lg:h-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                    />
                    <ImageWithFallback
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 px-[-32px] py-[0px]"
                    />
                    
                    {/* Featured Badge */}
                    <motion.div
                      className="absolute top-6 left-6 z-20"
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                    >
                      <div className="bg-[#b2833a] text-white px-4 py-2 rounded-[12px] shadow-lg font-['Poppins:SemiBold',sans-serif] text-[12px] flex items-center gap-2">
                        <TrendingUp size={14} />
                        Featured
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#b2833a]/10 text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[12px]">
                        <Tag size={12} />
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#999999] font-['Poppins:Regular',sans-serif] text-[13px]">
                        <Calendar size={13} />
                        {blogPosts[0].date}
                      </span>
                    </div>

                    <h2 className="text-[#222222] mb-3 group-hover:text-[#b2833a] transition-colors duration-300">
                      {blogPosts[0].title}
                    </h2>

                    <p className="text-[#666666] font-['Poppins:Regular',sans-serif] text-[15px] leading-relaxed mb-4">
                      {blogPosts[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#999999] font-['Poppins:Medium',sans-serif] text-[13px]">
                        {blogPosts[0].readTime}
                      </span>
                      
                      <motion.button
                        className="inline-flex items-center gap-2 text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[14px] group/btn"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        onClick={() => openPostModal(blogPosts[0])}
                      >
                        Read More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={16} className="group-hover/btn:text-[#D38436] transition-colors" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Regular Posts Grid */}
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(178,131,58,0.15)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.4 }}
                      />
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[11px] shadow-md">
                          <Tag size={11} />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-[#999999] font-['Poppins:Regular',sans-serif] text-[12px] mb-3">
                        <Calendar size={12} />
                        {post.date}
                      </div>

                      <h3 className="text-[#222222] text-[18px] sm:text-[20px] leading-[1.3] mb-3 group-hover:text-[#b2833a] transition-colors duration-300 font-['Playfair_Display:600',serif]">
                        {post.title}
                      </h3>

                      <p className="text-[#666666] font-['Poppins:Regular',sans-serif] text-[14px] leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
                        <span className="text-[#999999] font-['Poppins:Medium',sans-serif] text-[12px]">
                          {post.readTime}
                        </span>
                        
                        <motion.button
                          className="inline-flex items-center gap-2 text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[13px]"
                          whileHover={{ x: 3 }}
                          onClick={() => openPostModal(post)}
                        >
                          Read More
                          <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                {/* Popular Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-[#222222] text-[18px] mb-4 font-['Playfair_Display:600',serif] flex items-center gap-2">
                    <TrendingUp size={20} className="text-[#b2833a]" />
                    Popular Posts
                  </h3>
                  
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <motion.button
                        key={index}
                        className="w-full text-left group"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-[#b2833a]/10 rounded-[8px] flex items-center justify-center text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[13px] group-hover:bg-[#b2833a] group-hover:text-white transition-all">
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#222222] font-['Poppins:Medium',sans-serif] text-[13px] leading-snug mb-1 group-hover:text-[#b2833a] transition-colors line-clamp-2">
                              {post.title}
                            </p>
                            <span className="text-[#999999] font-['Poppins:Regular',sans-serif] text-[11px]">
                              {post.views} views
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <h3 className="text-[#222222] text-[18px] mb-4 font-['Playfair_Display:600',serif] flex items-center gap-2">
                    <Tag size={20} className="text-[#b2833a]" />
                    Categories
                  </h3>
                  
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <motion.button
                        key={index}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-[12px] bg-[#fafafa] hover:bg-[#b2833a]/10 transition-all group"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-[#666666] font-['Poppins:Medium',sans-serif] text-[13px] group-hover:text-[#b2833a] transition-colors">
                          {category.name}
                        </span>
                        <span className="flex items-center justify-center min-w-[28px] h-6 bg-white rounded-[6px] text-[#999999] font-['Poppins:SemiBold',sans-serif] text-[11px] group-hover:bg-[#b2833a] group-hover:text-white transition-all">
                          {category.count}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            onClick={closePostModal}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[24px] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closePostModal}
              >
                <X size={20} className="text-[#222222]" />
              </motion.button>

              {/* Header Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <ImageWithFallback
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Category & Date Badge */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[12px] shadow-md">
                    <Tag size={12} />
                    {selectedPost.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#666666] rounded-[8px] font-['Poppins:Regular',sans-serif] text-[12px] shadow-md">
                    <Calendar size={12} />
                    {selectedPost.date}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-16rem)] sm:max-h-[calc(90vh-18rem)]">
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Title & Meta */}
                  <div className="mb-6">
                    <h2 className="text-[#222222] mb-3 font-['Playfair_Display:700',serif] text-[28px] sm:text-[32px] lg:text-[36px] leading-tight">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center gap-4 text-[#999999] font-['Poppins:Regular',sans-serif] text-[14px]">
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-[#666666] font-['Poppins:Regular',sans-serif] text-[16px] leading-relaxed mb-8 pb-8 border-b border-[#f0f0f0]">
                    {selectedPost.excerpt}
                  </p>

                  {/* Full Content */}
                  {selectedPost.fullContent && (
                    <div 
                      className="blog-post-content prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}