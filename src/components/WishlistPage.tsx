import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Heart, X, ShoppingBag, Trash2, AlertCircle } from 'lucide-react';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import logoImage from 'figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png';
import { products } from '../data/products';
import Vector from '../imports/Vector';

interface WishlistItem {
  id: number;
  image: string;
  brand: string;
  name: string;
  price: number;
  category: string;
  bodyShape: string[];
  inStock: boolean;
}

// Confirmation Dialog Component
function ConfirmationDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message,
  type = 'single'
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onConfirm: () => void; 
  title: string;
  message: string;
  type?: 'single' | 'all';
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Dialog */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
        >
          {/* Decorative top bar */}
          <div className={`h-1.5 w-full ${type === 'all' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-[#b2833a] to-[#d38436]'}`} />
          
          <div className="p-8">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center"
            >
              <AlertCircle className="text-red-500" size={32} strokeWidth={2} />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] text-2xl text-center mb-3"
            >
              {title}
            </motion.h3>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#666] text-center mb-8 font-['Poppins:Regular',sans-serif] leading-relaxed"
            >
              {message}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex gap-3"
            >
              {/* Cancel Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 px-6 py-3.5 bg-gray-100 text-[#222] rounded-2xl font-['Poppins:Medium',sans-serif] hover:bg-gray-200 transition-all"
              >
                Cancel
              </motion.button>

              {/* Confirm Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
              >
                Yes, Delete
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Search Icon SVG Component
function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" strokeOpacity="0.21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

// Search Overlay Component
function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] flex items-center justify-center"
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
        className="relative bg-[#f4f4f4] box-border flex gap-[6px] h-[50px] items-center px-[24px] py-[10px] rounded-[30px] w-[90vw] max-w-[600px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10"
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none rounded-[30px] border-2 border-[#b2833a]"
        />
        <IconamoonSearch />
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
            className="text-[#666666] hover:text-[#222222] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </motion.div>
      
      {/* Search Results (if needed) */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[calc(50%+35px)] bg-white rounded-[16px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] w-[90vw] max-w-[600px] max-h-[400px] overflow-y-auto p-4"
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

// Wishlist Item Card Component
function WishlistCard({ 
  item, 
  index, 
  onRemoveClick,
  onProductClick 
}: { 
  item: WishlistItem; 
  index: number; 
  onRemoveClick: (id: number, name: string) => void;
  onProductClick?: (source: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative bg-white rounded-[24px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(178,131,58,0.15)] transition-all duration-500">
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
          onClick={() => onProductClick && onProductClick('wishlist')}
        >
          <motion.img
            animate={{ 
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          />

          {/* Remove Button */}
          <motion.button
            initial={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClick(item.id, item.name);
            }}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-full shadow-lg transition-all duration-300 text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={20} strokeWidth={2} />
          </motion.button>

          {/* Category Badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.15 }}
            className="absolute top-5 left-5"
          >
            <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs tracking-wide text-[#222] shadow-md">
              {item.category}
            </div>
          </motion.div>

          {/* Stock Status */}
          {!item.inStock && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.2 }}
              className="absolute bottom-5 left-5 right-5"
            >
              <div className="px-3 py-2 bg-red-500/95 backdrop-blur-sm rounded-lg text-xs text-white text-center shadow-md">
                Out of Stock
              </div>
            </motion.div>
          )}

          {/* Quick Actions Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobile ? 1 : (isHovered ? 1 : 0), 
              y: isMobile ? 0 : (isHovered ? 0 : 20) 
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-5 bottom-5 flex gap-2"
          >
            <div 
              className="w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-4 h-4">
                <Vector />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <motion.p 
            className="text-xs text-[#b2833a] tracking-[0.15em] mb-2 font-['Poppins:Medium',sans-serif] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.25 }}
          >
            {item.brand}
          </motion.p>
          <motion.h3 
            className="font-['Playfair_Display:600',serif] text-[#222] mb-3 line-clamp-1 group-hover:text-[#b2833a] transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 + 0.3 }}
          >
            {item.name}
          </motion.h3>
          
          {/* Price */}
          <motion.div 
            className="flex items-center justify-between gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 + 0.35 }}
          >
            <div className="flex flex-col">
              <p className="font-['Playfair_Display:600',serif] text-[#222] text-xl">
                ${item.price}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Free Shipping</p>
            </div>
          </motion.div>

          {/* Body Shape Tags */}
          <motion.div 
            className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.4 }}
          >
            {item.bodyShape.slice(0, 2).map((shape, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-gray-50 text-[10px] text-gray-600 rounded-md border border-gray-200"
              >
                {shape}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Empty Wishlist State
function EmptyWishlist({ onShopClick }: { onShopClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center py-20 px-6"
    >
      {/* Animated Heart Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="relative mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#b2833a]/10 to-[#d38436]/10 flex items-center justify-center">
          <Heart size={64} className="text-[#b2833a]/30" strokeWidth={1.5} />
        </div>
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#b2833a] rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, (Math.cos(i * 60 * Math.PI / 180) * 60)],
              y: [0, (Math.sin(i * 60 * Math.PI / 180) * 60)],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </motion.div>

      {/* Text Content */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222] text-3xl mb-3 text-center"
      >
        Your Wishlist is Empty
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-[#666] text-center max-w-md mb-8 font-['Poppins:Regular',sans-serif]"
      >
        Save your favorite items here and never lose track of the pieces you love. Start exploring our collection!
      </motion.p>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(178, 131, 58, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onShopClick}
        className="flex items-center gap-3 px-8 py-4 bg-[#b2833a] text-white rounded-full font-['Poppins:Medium',sans-serif] shadow-lg hover:bg-[#a07534] transition-all"
      >
        <ShoppingBag size={20} />
        Start Shopping
      </motion.button>
    </motion.div>
  );
}

export default function WishlistPage({ 
  onClose, 
  onShopClick,
  onGoHome,
  onProductClick,
  onContactClick,
  onAboutClick,
  onBlogClick,
  onSolutionClick
}: { 
  onClose: () => void;
  onShopClick: () => void;
  onGoHome?: () => void;
  onProductClick?: (source: 'shop' | 'wishlist') => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState<{
    isOpen: boolean;
    type: 'single' | 'all';
    itemId?: number;
    itemName?: string;
  }>({
    isOpen: false,
    type: 'single'
  });
  
  // Load wishlist from localStorage and map to actual products
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        const wishlistIds: number[] = JSON.parse(savedWishlist);
        return wishlistIds.map(id => {
          const product = products.find(p => p.id === id);
          return product ? { ...product, inStock: true } : null;
        }).filter((item): item is WishlistItem => item !== null);
      } catch {
        return [];
      }
    }
    return [];
  });

  // Listen for wishlist changes from other components
  useEffect(() => {
    const handleWishlistUpdate = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlistIds: number[] = JSON.parse(savedWishlist);
          const items = wishlistIds.map(id => {
            const product = products.find(p => p.id === id);
            return product ? { ...product, inStock: true } : null;
          }).filter((item): item is WishlistItem => item !== null);
          setWishlistItems(items);
          console.log('💛 WishlistPage: Loaded', items.length, 'items from localStorage');
        } catch {
          setWishlistItems([]);
        }
      } else {
        setWishlistItems([]);
      }
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    return () => window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
  }, []);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    // Update localStorage
    const currentWishlist = localStorage.getItem('wishlist');
    if (currentWishlist) {
      try {
        const wishlistIds: number[] = JSON.parse(currentWishlist);
        const updatedIds = wishlistIds.filter(wishlistId => wishlistId !== id);
        localStorage.setItem('wishlist', JSON.stringify(updatedIds));
        console.log('💛 Removed item', id, 'from wishlist. New count:', updatedIds.length);
        // Dispatch event to update count everywhere
        window.dispatchEvent(new Event('wishlistUpdated'));
      } catch (e) {
        console.error('Error removing from wishlist:', e);
      }
    }
  };

  const clearAllWishlist = () => {
    setWishlistItems([]);
    localStorage.setItem('wishlist', JSON.stringify([]));
    console.log('💛 Cleared all wishlist items');
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const handleAddToBag = (id: number) => {
    // In real app, this would add to cart
    console.log('Added to bag:', id);
    // Show toast notification or similar feedback
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
  const inStockCount = wishlistItems.filter(item => item.inStock).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="fixed inset-0 bg-white z-[100] overflow-y-auto"
    >
      {/* Hide the homepage hamburger icon when WishlistPage is active */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide the mobile hamburger icon from homepage when Wishlist page is open */
        #mobile-hamburger-icon {
          display: none !important;
        }
        /* Hide the AnimatedWeb DesktopHeader when Wishlist page is open */
        #desktop-header-wrapper {
          display: none !important;
        }
      `}} />

      {/* Header Navigation */}
      {/* Mobile Header - Visible only on Mobile (< 768px) */}
      <div className="block md:hidden sticky top-0 z-50">
        <MobileHeader
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          onSearchClick={() => setSearchOpen(true)}
          onShopClick={onShopClick}
          onWishlistClick={() => {}} // Already on wishlist page
          onLogoClick={onGoHome || onClose}
          activePage="wishlist"
          wishlistCount={wishlistItems.length}
        />
      </div>

      {/* Desktop/Tablet Header - Hidden on Mobile (>= 768px) */}
      <div className="hidden md:block sticky top-0 z-50">
        <DesktopHeader
          onLogoClick={onGoHome || onClose}
          onShopClick={onShopClick}
          onWishlistClick={() => {}} // Already on wishlist page
          onSearchClick={() => setSearchOpen(true)}
          onContactClick={onContactClick}
          onAboutClick={onAboutClick}
          onBlogClick={onBlogClick}
          onSolutionClick={onSolutionClick}
          wishlistCount={wishlistItems.length}
          activePage="wishlist"
        />
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay onClose={() => setSearchOpen(false)} />
        )}
      </AnimatePresence>

      {/* Breadcrumb & Title Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9f7] via-white to-[#faf9f7]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 right-20 w-64 h-64 bg-[#b2833a] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#d38436] rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <motion.span 
                className="text-sm text-[#888] hover:text-[#b2833a] cursor-pointer transition-all duration-300 hover:scale-105" 
                onClick={onGoHome || onClose}
                whileHover={{ x: -2 }}
              >
                Home
              </motion.span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ccc]">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-[#222]">Wishlist</span>
            </motion.div>

            {/* Title & Info */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <motion.h1 
                  className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] mb-3 text-4xl lg:text-5xl text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  My Wishlist
                </motion.h1>
                
                <motion.p 
                  className="text-base text-[#666] max-w-2xl text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {wishlistItems.length > 0 
                    ? `You have ${wishlistItems.length} ${wishlistItems.length === 1 ? 'item' : 'items'} saved in your wishlist`
                    : 'Save your favorite pieces and shop them later'
                  }
                </motion.p>
              </div>

              {/* Wishlist Stats */}
              {wishlistItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100 flex items-center gap-6 mx-auto lg:mx-0"
                >
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-[#888] font-['Poppins:Regular',sans-serif] uppercase tracking-wider">Total Value</p>
                    <p className="font-['Playfair_Display:600',serif] text-[#b2833a]">
                      ${totalValue}
                    </p>
                  </div>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-[#888] font-['Poppins:Regular',sans-serif] uppercase tracking-wider">In Stock</p>
                    <p className="font-['Playfair_Display:600',serif] text-[#222]">
                      {inStockCount}/{wishlistItems.length}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8 lg:py-12">
        {wishlistItems.length === 0 ? (
          <EmptyWishlist onShopClick={onShopClick} />
        ) : (
          <>
            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100"
            >
              <p className="text-sm text-[#666] font-['Poppins:Regular',sans-serif]">
                Showing <span className="text-[#222]">{wishlistItems.length}</span> saved {wishlistItems.length === 1 ? 'item' : 'items'}
              </p>
              
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setConfirmDialog({ isOpen: true, type: 'all' })}
                  className="px-4 py-2 text-sm text-[#666] hover:text-red-500 font-['Poppins:Regular',sans-serif] transition-colors flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Clear All
                </motion.button>
              </div>
            </motion.div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item, index) => (
                <WishlistCard 
                  key={item.id}
                  item={item}
                  index={index}
                  onRemoveClick={(id, name) => setConfirmDialog({ isOpen: true, type: 'single', itemId: id, itemName: name })}
                  onProductClick={onProductClick}
                />
              ))}
            </div>

            {/* Continue Shopping CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-[#666] mb-4 font-['Poppins:Regular',sans-serif]">
                Looking for more?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onShopClick}
                className="px-8 py-3 border-2 border-[#b2833a] text-[#b2833a] rounded-full font-['Poppins:Medium',sans-serif] hover:bg-[#b2833a] hover:text-white transition-all"
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {confirmDialog.isOpen && (
          <ConfirmationDialog
            isOpen={confirmDialog.isOpen}
            onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
            onConfirm={() => {
              if (confirmDialog.type === 'all') {
                clearAllWishlist();
              } else if (confirmDialog.itemId) {
                removeFromWishlist(confirmDialog.itemId);
              }
            }}
            title={
              confirmDialog.type === 'all' 
                ? 'Delete All Items?' 
                : 'Remove from Wishlist?'
            }
            message={
              confirmDialog.type === 'all'
                ? `Are you sure you want to remove all ${wishlistItems.length} items from your wishlist? This action cannot be undone.`
                : `Are you sure you want to remove "${confirmDialog.itemName}" from your wishlist?`
            }
            type={confirmDialog.type}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}