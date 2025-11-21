import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search } from 'lucide-react';
import StyleFinder from './StyleFinder';
import MobileHeader from './MobileHeader';
import svgPaths from "../imports/svg-him158wfwa";
import { EnhancedFindMyStyleButton } from './EnhancedFindMyStyleButton';
import logoImage from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";
import imgDetailedVisualDissatisfiedGirlTryingCloseFullWardrobeHighDetail8K1 from "figma:asset/d3a5f31e949d9831878751581ecadffaa0859c99.png";
import heroImage1 from "figma:asset/7458b11fbcd7ce75bc1e297f3751755b665ce04b.png";
import heroImage2 from "figma:asset/0e7054ab40b64987a07ec8edf5b19d62a60b67dd.png";
import imgRectangle18 from "figma:asset/78668359ce449e5c0120d1a35e0efb99b3135558.png";
import imgRectangle21 from "figma:asset/78930f168801be5db77ccca51da0825ddf85cd96.png";
import imgRectangle20 from "figma:asset/ad3e3e7e77ffdfcf0ea4a88e66b636882cf4e476.png";
import imgFrame72_2 from "figma:asset/2ec01e6eef287b58b6b8efc6fa462172c32b218f.png";
import imgFrame72_3 from "figma:asset/ba7f9ddb4d4abed0f28a67c2db53faa21766374b.png";
import imgFrame72_4 from "figma:asset/27d6fd64567f36f83cbf6d0594367f97e68cc12f.png";
import imgFrame73_1 from "figma:asset/d67b75d5090028ad1a46d709ce7472136dd7d3fe.png";
import imgFrame73_2 from "figma:asset/0f1f8120a147e5453005616d8cad72a98c54aa84.png";
import imgFrame73_3 from "figma:asset/c4074f4dd7d86f37553614536ec2c66b19a6ce15.png";
import imgFrame74_1 from "figma:asset/85c24cd10b4059d4c97fd2c27b8f227f03309bf3.png";
import imgFrame74_3 from "figma:asset/ecf6460d503f53c49a9d22121c788b90bafb2548.png";
import imgRectangle38 from "figma:asset/effcba133f3e758678cc45fc1b30fcb2f4ec3c75.png";
import imgRectangle39 from "figma:asset/9df372a420558bad39a17a541b2a90654ca570c7.png";
import imgRectangle40 from "figma:asset/e72b2f7dc10480fe0aff9305adf3e3f0d83bc429.png";
import img58671 from "figma:asset/cf73be292bbc20ee0442fbd88f0ee8a2e8e3a121.png";

interface MobileLayoutProps {
  unit: string;
  onUnitChange: (unit: string) => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1040] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Search Box - Focused State */}
      <motion.div
        initial={{ scale: 0.95, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: -20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#f4f4f4] box-border flex gap-[6px] h-[50px] items-center px-[24px] py-[10px] rounded-[30px] w-full max-w-[600px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10"
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none rounded-[30px] border-2 border-[#b2833a]"
        />
        <Search size={20} className="text-black opacity-21 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search your item here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent font-['Poppins:Regular',sans-serif] leading-[40px] text-[14px] text-[#222222] outline-none placeholder:text-[#acacac]"
          autoFocus
        />
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setSearchQuery('');
            }}
            className="text-[#666666] hover:text-[#222222] transition-colors flex-shrink-0"
          >
            <X size={20} />
          </motion.button>
        )}
      </motion.div>
      
      {/* Search Results (if needed) */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[calc(50%+35px)] bg-white rounded-[16px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] w-full max-w-[600px] max-h-[400px] overflow-y-auto p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-[14px] text-[#999999] font-['Poppins:Regular',sans-serif] text-center py-8">
            No results found for "{searchQuery}"
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

// Product Card with Internal Image Sliding
function ProductCardWithSliding({ product, onBuyClick }: { product: { images: string[]; name: string; price: string }; onBuyClick: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    if (product.images.length <= 1 || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 3000); // 3-second delay between slides

    return () => clearInterval(timer);
  }, [product.images.length, isPaused]);

  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 50;
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swiped right - go to previous
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      } else {
        // Swiped left - go to next
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }
      setIsPaused(true);
      // Resume after 5 seconds
      setTimeout(() => setIsPaused(false), 5000);
    }
    setDragOffset(0);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    // Resume after 5 seconds
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div 
      className="w-full h-full relative overflow-hidden rounded-[10px] bg-[#e3e1e2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 5000);
      }}
    >
      {/* Image Slider Container - Horizontal Sliding */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{
            x: `calc(-${currentImageIndex * 100}% + ${dragOffset}px)`
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDrag={(_event, info) => setDragOffset(info.offset.x)}
          onDragEnd={handleDragEnd}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing curve
          }}
          style={{
            width: `${product.images.length * 100}%`
          }}
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              className="relative"
              style={{ 
                width: `${100 / product.images.length}%`,
                height: '100%'
              }}
            >
              <img
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Overlay - Fixed Position */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/75 via-black/40 to-transparent z-10 pointer-events-none">
        <h3 
          className="font-['Playfair_Display:600',serif] text-[22px] sm:text-[28px] text-white mb-2 sm:mb-3 drop-shadow-lg"
        >
          {product.name}
        </h3>
        <button 
          onClick={onBuyClick}
          className="bg-[#b2833a] text-white font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[16px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-[30px] hover:bg-[#a07534] active:scale-95 transition-all shadow-lg pointer-events-auto"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default function MobileLayout({ unit, onUnitChange, onShopClick, onWishlistClick }: MobileLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [productSlide, setProductSlide] = useState(0);
  const [brandSlide, setBrandSlide] = useState(0);
  const [showStyleFinder, setShowStyleFinder] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  const heroImages = [
    heroImage1,
    heroImage2,
    imgDetailedVisualDissatisfiedGirlTryingCloseFullWardrobeHighDetail8K1
  ];

  const products = [
    { 
      images: [imgFrame72_2, imgFrame72_3, imgFrame72_4],
      name: "Classic Black Blazer", 
      price: "$129.99" 
    },
    { 
      images: [imgFrame73_1, imgFrame73_2, imgFrame73_3],
      name: "Belted Black Dress", 
      price: "$89.99" 
    },
    { 
      images: [imgFrame74_1, imgFrame74_3],
      name: "Elegant White Dress", 
      price: "$119.99" 
    }
  ];

  const features = [
    { 
      image: imgRectangle38, 
      title: "Precise Recommendations",
      subtitle: "Get clothing suggestions perfectly matched to your unique body shape.",
      description: "AI-powered body shape analysis.\\nPersonalized style recommendations.\\nReal-time fit predictions."
    },
    { 
      image: imgRectangle39, 
      title: "Perfect Fit Every Time",
      subtitle: "Say goodbye to returns and exchanges with our tailored sizing solution.",
      description: "95% accuracy rate.\\nSize conversion across brands.\\nFit confidence scoring."
    },
    { 
      image: imgRectangle40, 
      title: "Styling Expertise",
      subtitle: "Discover which styles enhance your natural shape and personal style.",
      description: "Professional styling tips.\\nColor palette suggestions.\\nTrend-based recommendations."
    }
  ];

  const brands = [
    { image: imgRectangle18, name: "JuJu" },
    { image: imgRectangle21, name: "Landskein" },
    { image: imgRectangle20, name: "JuJu" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleStyleFinderComplete = () => {
    setShowStyleFinder(false);
    if (onShopClick) {
      onShopClick();
    }
  };

  return (
    <div className="mobile-only bg-white min-h-screen w-full overflow-x-hidden">
      {/* Mobile Header - New Figma Design */}
      <MobileHeader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        onSearchClick={() => setShowSearchOverlay(true)}
        onShopClick={onShopClick}
        onWishlistClick={onWishlistClick}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        activePage="home"
      />

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
          {/* Hero Images with Smooth Crossfade */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: index === 0 ? 1 : 0 }}
                animate={{ 
                  opacity: heroSlide === index ? 1 : 0,
                  scale: heroSlide === index ? [1, 1.05] : 1
                }}
                transition={{ 
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 10, ease: "linear" }
                }}
              >
                <img
                  src={image}
                  alt="Fashion Model"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </motion.div>
            ))}

            {/* Gradient Overlay (bottom dark → top transparent) */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)'
              }}
            />

            {/* Subtle Light Sweep Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2
              }}
              style={{
                background: 'linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%, transparent 100%)'
              }}
            />
            
            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-50">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}
                  animate={{
                    opacity: heroSlide === index ? 1 : 0.4,
                    scale: heroSlide === index ? 1.3 : 1
                  }}
                  transition={{
                    opacity: { duration: 0.4, ease: "easeInOut" },
                    scale: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => setHeroSlide(index)}
                />
              ))}
            </div>
          </div>
          
          {/* Fixed Hero Content Overlay - No Movement During Transitions */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Playfair_Display:700',serif] text-[40px] sm:text-[48px] leading-[1.15] mb-8"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #b2833a 50%, #D38436 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 20px rgba(178, 131, 58, 0.4))',
              }}
            >
              Where Style Meets the Perfect Fit.
            </motion.h1>
            
            {/* CTA Button - Fixed Position */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="scale-90">
                <EnhancedFindMyStyleButton onClick={() => setShowStyleFinder(true)} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
          <h2 className="font-['Playfair_Display:600',serif] text-[32px] sm:text-[40px] text-[#222222] text-center mb-8 sm:mb-12">
            Our Brands
          </h2>
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[380px] sm:h-[420px] rounded-[10px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={brandSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full w-full group cursor-pointer"
                >
                  <img
                    src={brands[brandSlide].image}
                    alt={brands[brandSlide].name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-[rgba(255,255,255,0.4)] backdrop-blur-sm px-5 py-2.5 rounded-[10px]">
                    <p className="font-['Playfair_Display:600',serif] text-[24px] sm:text-[28px] text-[#222222]">
                      {brands[brandSlide].name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setBrandSlide(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: '#b2833a',
                    opacity: index === brandSlide ? 1 : 0.35
                  }}
                  aria-label={`Go to brand ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Carousel Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
          <h2 className="font-['Playfair_Display:600',serif] text-[32px] sm:text-[40px] text-[#222222] text-center mb-8 sm:mb-12">
            Trending Now
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="h-[450px] sm:h-[500px] rounded-[10px] overflow-hidden bg-[#e3e1e2]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={productSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full h-full relative"
                >
                  <ProductCardWithSliding
                    product={products[productSlide]}
                    onBuyClick={() => {
                      if (onShopClick) {
                        onShopClick();
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setProductSlide(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: '#b2833a',
                    opacity: index === productSlide ? 1 : 0.35
                  }}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - Why Choose StyleMyFit */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 bg-[#fafafa]">
          <h2 className="font-['Playfair_Display:600',serif] text-[32px] sm:text-[40px] text-[#222222] text-center mb-8 sm:mb-12">
            Why Choose StyleMyFit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[10px] border border-[rgba(178,131,58,0.55)] overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-[240px] sm:h-[280px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display:600',serif] text-[20px] sm:text-[22px] text-[#222222] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] text-[#222222] mb-4">
                    {feature.subtitle}
                  </p>
                  <p className="font-['Poppins:Regular',sans-serif] text-[13px] sm:text-[14px] text-[rgba(34,34,34,0.7)] whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Banner Section - Style Meets Savings */}
        <section className="bg-[#e2e3e5] py-0">
          <div className="relative h-[500px] sm:h-[600px]">
            <img
              src={img58671}
              alt="Style Meets Savings"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 sm:pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-[16px] px-8 py-8 sm:px-12 sm:py-10 shadow-2xl text-center max-w-lg"
              >
                <h2 className="font-['Playfair_Display:600',serif] text-[36px] sm:text-[44px] text-[#222222] mb-3 leading-tight">
                  Style Meets Savings
                </h2>
                <div className="bg-white rounded-[12px] px-6 py-3 mb-4 inline-block">
                  <p className="font-['Playfair_Display:600',serif] text-[28px] sm:text-[36px] text-[#b2833a]">
                    Up to 80% OFF
                  </p>
                </div>
                <p className="font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] text-[rgba(34,34,34,0.7)] mb-6">
                  Discover timeless outfits made to fit beautifully — now at a special price.
                </p>
                <button 
                  onClick={() => {
                    if (onShopClick) {
                      onShopClick();
                    }
                  }}
                  className="bg-[#b2833a] text-white font-['Poppins:Regular',sans-serif] text-[16px] px-10 py-3.5 rounded-[30px] hover:bg-[#a07534] active:scale-95 transition-all shadow-lg w-full sm:w-auto"
                >
                  Shop Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-[#4a4a4a] via-[#363636] to-[#222222]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display:600',serif] text-[36px] sm:text-[50px] text-white mb-5 leading-tight">
                For Fashion Businesses
              </h2>
              <p className="font-['Poppins:Regular',sans-serif] text-[15px] sm:text-[16px] leading-[24px] text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
                Transform your customer experience with StyleMyFit's powerful sizing and recommendation engine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {[
                {
                  icon: (
                    <svg className="w-[45px] h-[45px]" fill="none" viewBox="0 0 45 45">
                      <path d="M22.5 0C17.5363 0 12.785 2.05178 9.28453 5.65507C5.78408 9.25837 3.79004 14.1399 3.79004 19.237C3.79004 33.585 22.5 45 22.5 45C22.5 45 41.21 33.585 41.21 19.237C41.21 14.1399 39.2159 9.25837 35.7155 5.65507C32.215 2.05178 27.4637 0 22.5 0ZM22.5 26.0625C20.6489 26.0625 18.8555 25.4976 17.3777 24.4512C15.8998 23.4047 14.8139 21.9296 14.2843 20.2334C13.7546 18.5372 13.8088 16.7068 14.4395 15.0422C15.0703 13.3777 16.2445 11.9631 17.8128 10.9922C19.381 10.0213 21.2658 9.54395 23.1656 9.63404C25.0653 9.72413 26.8892 10.3761 28.3513 11.4919C29.8134 12.6077 30.8405 14.1277 31.2849 15.8309C31.7292 17.5341 31.5674 19.3347 30.8209 20.9438C30.3698 21.9614 29.7014 22.8705 28.8606 23.6088C28.0199 24.347 27.0257 24.8977 25.9446 25.2243C24.8635 25.551 23.7202 25.6461 22.5956 25.5037C21.471 25.3612 20.3905 24.9845 19.4281 24.3998C18.4657 23.8151 17.6434 23.0357 17.0143 22.1106C16.3852 21.1854 15.9632 20.1351 15.7762 19.0303C15.5892 17.9255 15.6414 16.7918 15.9295 15.7086C16.2175 14.6253 16.7352 13.6172 17.4488 12.7497C18.1625 11.8821 19.0565 11.1748 20.0717 10.674C21.087 10.1732 22.2005 9.89011 23.3417 9.84463C24.483 9.79916 25.6168 10 26.6696 10.4354" fill="white"/>
                      <path d="M22.5 15.1875C21.4004 15.1875 20.3262 15.5427 19.4166 16.2088C18.507 16.8749 17.8035 17.8229 17.4028 18.9303C17.0021 20.0377 16.9217 21.2512 17.1721 22.4185C17.4224 23.5858 18.0921 24.6533 18.0987 24.6623C18.4163 25.1064 18.8318 25.4736 19.3154 25.7377C19.799 26.0017 20.3391 26.1563 20.8941 26.1899C21.4491 26.2234 22.0044 26.1351 22.5211 25.9315C23.0378 25.7278 23.5035 25.414 23.8853 25.0124L23.9053 24.9899C24.5735 24.2713 24.9754 23.3478 25.0452 22.3718C25.115 21.3958 24.849 20.4257 24.2908 19.6237C23.7327 18.8218 22.9156 18.2362 21.9758 17.9599C21.0359 17.6835 20.0283 17.7329 19.1203 18.0999" fill="white"/>
                    </svg>
                  ),
                  title: "Increase Revenue",
                  description: "Boost conversions by up to 35% with accurate fit recommendations.",
                  sectionTitle: "Key Benefits:",
                  features: ["• Higher conversion rates", "• Increased average order value", "• Better customer satisfaction"]
                },
                {
                  icon: (
                    <svg className="w-[45px] h-[45px]" fill="none" viewBox="0 0 45 45">
                      <rect x="5" y="10" width="35" height="28" rx="2" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 18 L40 18" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 26 L40 26" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 14 L15 22" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M25 14 L25 34" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M35 22 L35 34" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Reduce Returns",
                  description: "Cut return rates by as much as 42% by getting the fit right the first time.",
                  sectionTitle: "Impact Metrics:",
                  features: ["• 42% reduction in returns", "• Faster inventory turnover", "• Improved profit margins"]
                },
                {
                  icon: (
                    <svg className="w-[45px] h-[45px]" fill="none" viewBox="0 0 45 45">
                      <path d="M8 35 L16 25 L24 30 L37 10" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28 10 L37 10 L37 19" stroke="white" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="25" r="2" fill="white"/>
                      <circle cx="24" cy="30" r="2" fill="white"/>
                      <circle cx="37" cy="10" r="2" fill="white"/>
                    </svg>
                  ),
                  title: "Actionable Analytics",
                  description: "Gain insights that help you make smarter inventory and marketing decisions.",
                  sectionTitle: "Data Insights:",
                  features: ["• Customer size trends", "• Popular fit preferences", "• Real-time demand signals"]
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[rgba(74,74,74,0.5)] backdrop-blur-sm rounded-[10px] p-6 sm:p-8 hover:bg-[rgba(74,74,74,0.7)] transition-all border border-[rgba(255,255,255,0.1)]"
                >
                  <div className="mb-4">{item.icon}</div>
                  <div className="mb-5">
                    <h3 className="font-['Playfair_Display:600',serif] text-[20px] leading-[35px] text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[21px] text-[rgba(255,255,255,0.7)]">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <p className="font-['Poppins:Medium',sans-serif] text-[14px] leading-[21px] text-white mb-2.5">
                      {item.sectionTitle}
                    </p>
                    <div className="font-['Poppins:Regular',sans-serif] text-[14px] leading-[21px] text-[rgba(255,255,255,0.7)]">
                      {item.features.map((feature, idx) => (
                        <p key={idx} className={idx < item.features.length - 1 ? "mb-0" : ""}>{feature}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
              <button className="bg-[#b2833a] text-white font-['Poppins:Regular',sans-serif] text-[16px] leading-[40px] px-10 py-2.5 rounded-[30px] hover:bg-[#a07534] active:scale-95 transition-all inline-flex items-center gap-3 shadow-[0px_15px_26.4px_0px_rgba(0,0,0,0.15)]">
                Partner With StyleMyFit
                <svg className="w-3 h-2" fill="white" viewBox="0 0 12 8">
                  <path d={svgPaths.p38e004c0} />
                </svg>
              </button>
              <button className="border border-[#b2833a] text-[#b2833a] bg-transparent font-['Poppins:Regular',sans-serif] text-[16px] leading-[40px] px-10 py-2.5 rounded-[30px] hover:bg-white/5 active:scale-95 transition-all shadow-[0px_15px_26.4px_0px_rgba(0,0,0,0.15)]">
                Live Preview
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-['Arial:Regular',sans-serif] text-[30px] sm:text-[36px] text-neutral-950 mb-4">
              Join Our Newsletter
            </h2>
            <p className="font-['Arial:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#4a5565] mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-[8px] bg-[#f3f3f5] font-['Arial:Regular',sans-serif] text-[14px] text-[#717182] outline-none focus:ring-2 focus:ring-[#b2833a]"
              />
              <button className="bg-black text-white font-['Arial:Regular',sans-serif] text-[14px] px-6 py-3 rounded-[8px] hover:bg-[#222] active:scale-95 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#222222] px-4 sm:px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-['Poppins:Regular',sans-serif] text-white text-[16px] mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Features</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Pricing</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Solutions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-['Poppins:Regular',sans-serif] text-white text-[16px] mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">About</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Careers</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-['Poppins:Regular',sans-serif] text-white text-[16px] mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Blog</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Help Center</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-['Poppins:Regular',sans-serif] text-white text-[16px] mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Privacy</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Terms</a></li>
                  <li><a href="#" className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px] hover:text-[#d38436] transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-[#1e2939] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px]">
                © 2025 BelleMode. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <p className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px]">🇬🇧 United Kingdom</p>
                <span className="text-[#99a1af]">|</span>
                <p className="font-['Poppins:Regular',sans-serif] text-[#99a1af] text-[14px]">GBP £</p>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Style Finder Modal */}
      <AnimatePresence>
        {showStyleFinder && <StyleFinder unit={unit} onUnitChange={onUnitChange} onClose={() => setShowStyleFinder(false)} onComplete={handleStyleFinderComplete} />}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearchOverlay && <SearchOverlay onClose={() => setShowSearchOverlay(false)} />}
      </AnimatePresence>
    </div>
  );
}