"use client";
import { motion } from 'motion/react';
import { ChevronRight, Search, TrendingUp, ShoppingBag, Sparkles, Quote } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '@/components/ui/atoms/ImageWithFallback';

interface BodyShapeGuideProps {
  onClose: () => void;
  onGoHome: () => void;
  onShopClick: () => void;
  onWishlistClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onBlogClick: () => void;
  onSolutionClick: () => void;
  wishlistCount: number;
  onFindMyStyle: () => void;
}

export default function BodyShapeGuide({ 
  onClose, 
  onGoHome,
  onShopClick,
  onWishlistClick,
  onAboutClick,
  onContactClick,
  onBlogClick,
  onSolutionClick,
  wishlistCount,
  onFindMyStyle
}: BodyShapeGuideProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const handleMenuNavigate = (page: string) => {
    setIsMenuOpen(false);
    
    switch (page) {
      case 'home':
        onGoHome();
        break;
      case 'shop':
        onShopClick();
        break;
      case 'wishlist':
        onWishlistClick();
        break;
      case 'contact':
        onContactClick();
        break;
      case 'about':
        onAboutClick();
        break;
      case 'blog':
        onBlogClick();
        break;
      case 'solution':
        onSolutionClick();
        break;
      case 'body-shape-guide':
        // Already on this page, just close menu
        break;
    }
  };

  const bodyShapes = [
    {
      name: 'The Hourglass',
      subtitle: 'Balanced Symmetry',
      characteristics: 'The Hourglass is defined by a balanced bust and hips with a dramatically cinched waist. This guide focuses on highlighting this natural definition through silhouettes that embrace your curves while maintaining proportion.',
      keyFeatures: ['Balanced bust & hips', 'Defined waist', 'Proportionate shoulders'],
      stylingTips: 'Emphasize your waist with belted styles, wrap dresses, and fitted silhouettes.',
      image: 'https://images.unsplash.com/photo-1646932520067-81bdc09af07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VyZ2xhc3MlMjBib2R5JTIwc2hhcGUlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjkwMTQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#b2833a'
    },
    {
      name: 'The Pear',
      subtitle: 'Graceful Proportion',
      characteristics: 'The Pear silhouette features hips wider than the bust, creating a beautiful foundation. Our approach celebrates these proportions by drawing attention upward while honoring your natural curves.',
      keyFeatures: ['Narrow shoulders', 'Defined waist', 'Fuller hips & thighs'],
      stylingTips: 'Balance your silhouette with detailed necklines, structured shoulders, and A-line skirts.',
      image: 'https://images.unsplash.com/photo-1531171756984-969f6a9d783f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwYm9keSUyMHNoYXBlJTIwc3R5bGV8ZW58MXx8fHwxNzYyOTAxNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#D38436'
    },
    {
      name: 'The Apple',
      subtitle: 'Elegant Presence',
      characteristics: 'The Apple shape carries weight beautifully through the midsection with gorgeous legs. We focus on creating vertical lines and highlighting your best assets—your legs, shoulders, and décolletage.',
      keyFeatures: ['Broader shoulders', 'Fuller midsection', 'Slender legs'],
      stylingTips: 'Empire waists, V-necklines, and flowing fabrics create an elegant, elongated silhouette.',
      image: 'https://images.unsplash.com/photo-1700411350773-63678cf91674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGJvZHklMjBzaGFwZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYyOTAxNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#8B6F47'
    },
    {
      name: 'The Rectangle',
      subtitle: 'Athletic Grace',
      characteristics: 'The Rectangle features balanced measurements throughout, creating a naturally streamlined silhouette. Our styling philosophy adds dimension through strategic layering and thoughtful tailoring.',
      keyFeatures: ['Similar bust & hip width', 'Subtle waist definition', 'Athletic build'],
      stylingTips: 'Create curves with peplums, ruffles, and color blocking. Layer to add dimension.',
      image: 'https://images.unsplash.com/photo-1660681432965-7aa44f23880f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGJvZHklMjBzaGFwZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyOTAxNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#A67C52'
    },
    {
      name: 'The Inverted Triangle',
      subtitle: 'Powerful Elegance',
      characteristics: 'The Inverted Triangle showcases broader shoulders and bust with narrower hips—a naturally powerful silhouette. We create harmony by adding volume below while showcasing your strong upper body.',
      keyFeatures: ['Broad shoulders', 'Fuller bust', 'Narrow hips'],
      stylingTips: 'Balance with A-line skirts, wide-leg trousers, and detailed lower half pieces.',
      image: 'https://images.unsplash.com/photo-1646932520067-81bdc09af07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlcnRlZCUyMHRyaWFuZ2xlJTIwYm9keSUyMGZhc2hpb258ZW58MXx8fHwxNzYyOTAxNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#9B7B5C'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Identify',
      description: 'Take our quick, visually-driven quiz to accurately determine your body shape.',
      icon: Search
    },
    {
      number: '02',
      title: 'Analyze',
      description: 'Our proprietary algorithm cross-references your shape with thousands of styling rules and current trends.',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Style',
      description: 'Receive a curated, shoppable style guide with personalized outfit recommendations and tips tailored to your proportions.',
      icon: ShoppingBag
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inset-0 z-[9998] bg-[#F9F9F9] overflow-y-auto"
    >

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={""}
            alt="Diverse women in editorial fashion"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/85 via-[#1A1A1A]/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
                <Sparkles size={16} className="text-[#b2833a]" />
                <span className="font-['Poppins:Medium',sans-serif] text-white text-sm">Premium Styling Guide</span>
              </div>

              <h1 className="font-['Playfair_Display:700',serif] text-white mb-6">
                <span className="block text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-4">
                  The Ultimate
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[#b2833a]">
                  Body Shape Guide
                </span>
              </h1>

              <p className="font-['Poppins:Regular',sans-serif] text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                Transform your wardrobe with our comprehensive guide, providing personalized fashion knowledge tailored to your unique silhouette.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-['Poppins:Regular',sans-serif] text-white/70 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Five Shapes Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display:700',serif] text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl mb-6">
              Your Silhouette, Defined
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[#666666] text-lg md:text-xl max-w-3xl mx-auto">
              Our Five-Point System: Understanding your unique shape is the foundation of effortless style
            </p>
          </motion.div>

          {/* Body Shapes Grid */}
          <div className="space-y-24">
            {bodyShapes.map((shape, index) => (
              <motion.div
                key={shape.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-[24px] aspect-[3/4] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.15)]">
                    <ImageWithFallback
                      src={shape.image}
                      alt={shape.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                    
                    {/* Shape Icon/Label */}
                    <div className="absolute top-8 left-8">
                      <div 
                        className="px-6 py-3 rounded-full backdrop-blur-md border border-white/30"
                        style={{ backgroundColor: `${shape.color}20` }}
                      >
                        <span className="font-['Poppins:SemiBold',sans-serif] text-white text-sm">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="font-['Playfair_Display:700',serif] text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl mb-2">
                      {shape.name}
                    </h3>
                    <p 
                      className="font-['Poppins:Medium',sans-serif] text-xl mb-6"
                      style={{ color: shape.color }}
                    >
                      {shape.subtitle}
                    </p>
                  </div>

                  <p className="font-['Poppins:Regular',sans-serif] text-[#666666] text-base md:text-lg leading-relaxed">
                    {shape.characteristics}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1A1A1A] text-sm uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {shape.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: shape.color }}
                          />
                          <span className="font-['Poppins:Regular',sans-serif] text-[#666666] text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Styling Tips */}
                  <div 
                    className="p-6 rounded-[20px] border-l-4"
                    style={{ 
                      backgroundColor: `${shape.color}08`,
                      borderLeftColor: shape.color 
                    }}
                  >
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-[#1A1A1A] text-sm uppercase tracking-wider mb-3">
                      Styling Philosophy
                    </h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#666666] text-sm leading-relaxed">
                      {shape.stylingTips}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#b2833a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b2833a]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display:700',serif] text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              The Journey to Your
              <span className="block text-[#b2833a]">Best Wardrobe</span>
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
              A sophisticated, data-driven approach to personal styling
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[calc(50%+60px)] w-[calc(100%+48px)] h-[2px] bg-gradient-to-r from-[#b2833a] to-transparent" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm rounded-[24px] p-8 border border-white/10 hover:border-[#b2833a]/50 transition-all duration-500 group">
                  {/* Number */}
                  <div className="mb-6">
                    <span className="font-['Playfair_Display:700',serif] text-[#b2833a]/30 text-7xl md:text-8xl leading-none group-hover:text-[#b2833a]/50 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#b2833a]/20 flex items-center justify-center group-hover:bg-[#b2833a]/30 transition-colors duration-500">
                      <step.icon className="text-[#b2833a]" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-['Playfair_Display:600',serif] text-white text-2xl md:text-3xl mb-4">
                    {step.title}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-white/70 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Playfair_Display:700',serif] text-[#1A1A1A] text-4xl md:text-5xl mb-4">
              Beyond Trends
            </h2>
            <p className="font-['Poppins:Medium',sans-serif] text-[#b2833a] text-xl md:text-2xl">
              Confidence is the Ultimate Fit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Portrait */}
              <div className="w-full md:w-5/12 relative">
                <div className="relative overflow-hidden rounded-[24px] aspect-square shadow-[0px_20px_60px_0px_rgba(0,0,0,0.15)]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1592206934769-67dc0e88b5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVzdGltb25pYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5MDE0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Client testimonial"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="w-full md:w-7/12 relative">
                <Quote className="absolute -top-8 -left-4 text-[#b2833a]/20" size={80} />
                <div className="relative z-10">
                  <p className="font-['Playfair_Display:500',serif] text-[#1A1A1A] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 italic">
                    "This guide completely transformed how I shop. For the first time, I understand what works for my body and why. I feel confident, empowered, and absolutely beautiful in my clothes."
                  </p>
                  <div className="border-l-4 border-[#b2833a] pl-6">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[#1A1A1A] text-lg mb-1">
                      Sarah Mitchell
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-[#666666] text-sm">
                      Fashion Enthusiast, New York
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#b2833a 1px, transparent 1px), linear-gradient(90deg, #b2833a 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b2833a]/20 backdrop-blur-md rounded-full border border-[#b2833a]/30 mb-8">
              <Sparkles size={16} className="text-[#b2833a]" />
              <span className="font-['Poppins:Medium',sans-serif] text-white text-sm">Start Your Style Journey Today</span>
            </div>

            <h2 className="font-['Playfair_Display:700',serif] text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready to Revolutionize
              <span className="block text-[#b2833a]">Your Wardrobe?</span>
            </h2>

            <p className="font-['Poppins:Regular',sans-serif] text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop guessing and start dressing with intention. Your personalized style journey begins now.
            </p>

            <motion.button
              onClick={() => onFindMyStyle()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-12 py-6 bg-[#b2833a] text-white rounded-full font-['Poppins:SemiBold',sans-serif] text-xl shadow-[0px_25px_50px_0px_rgba(178,131,58,0.5)] hover:shadow-[0px_30px_60px_0px_rgba(178,131,58,0.6)] transition-all duration-300"
            >
              Get Started Today
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={28} />
            </motion.button>

            <p className="font-['Poppins:Regular',sans-serif] text-white/50 text-sm mt-8">
              Join thousands of women who have discovered their perfect style
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}