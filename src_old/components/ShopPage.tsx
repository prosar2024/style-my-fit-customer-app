import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Heart, SlidersHorizontal, X } from 'lucide-react';
import { Slider } from './ui/slider';
import Footer from './Footer';
import exampleImage from 'figma:asset/855d2f95533ff97e7389688318e61d2d482ef31c.png';
import logoImage from 'figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png';
import svgPaths from '../imports/svg-0lxz1bgzsy';
import { products, Product } from '../data/products';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

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

// Separate component for ProductCard to properly use hooks
function ProductCard({ 
  product, 
  index, 
  wishlist, 
  toggleWishlist,
  onProductClick
}: { 
  product: Product; 
  index: number; 
  wishlist: number[]; 
  toggleWishlist: (id: number) => void;
  onProductClick?: (source: 'shop' | 'wishlist') => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onProductClick && onProductClick('shop')}
    >
      <div className="relative bg-white rounded-[24px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(178,131,58,0.15)] transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.img
            animate={{ 
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
          />

          {/* Wishlist Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.2 }}
            whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`absolute top-5 right-5 w-11 h-11 flex items-center justify-center backdrop-blur-xl rounded-full shadow-lg transition-all duration-300 ${
              wishlist.includes(product.id) 
                ? 'bg-[#b2833a] text-white' 
                : 'bg-white/95 text-gray-700 hover:bg-[#b2833a] hover:text-white'
            }`}
          >
            <Heart 
              size={20} 
              className={wishlist.includes(product.id) ? 'fill-current' : ''} 
              strokeWidth={2}
            />
          </motion.button>

          {/* Category Badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.08 + 0.15 }}
            className="absolute top-5 left-5"
          >
            <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs tracking-wide text-[#222] shadow-md">
              {product.category}
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
            {product.brand}
          </motion.p>
          <motion.h3 
            className="font-['Playfair_Display:600',serif] text-[#222] mb-3 line-clamp-1 group-hover:text-[#b2833a] transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 + 0.3 }}
          >
            {product.name}
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
                ${product.price}
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
            {product.bodyShape.slice(0, 2).map((shape, idx) => (
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

export default function ShopPage({ onClose, filterByBodyShape, onWishlistClick, onProductClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick, onBodyShapeGuideClick }: { 
  onClose: () => void; 
  filterByBodyShape?: string | null; 
  onWishlistClick?: () => void; 
  onProductClick?: (source: 'shop' | 'wishlist') => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
}) {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    // Load wishlist from localStorage on mount
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [sortBy, setSortBy] = useState('name-asc');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBodyShapes, setSelectedBodyShapes] = useState<string[]>(
    filterByBodyShape ? [filterByBodyShape] : []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    console.log('✅ Wishlist updated:', wishlist, 'Count:', wishlist.length);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('wishlistUpdated'));
  }, [wishlist]);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleBodyShape = (shape: string) => {
    setSelectedBodyShapes(prev =>
      prev.includes(shape) ? prev.filter(s => s !== shape) : [...prev, shape]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products
    .filter(p => {
      const bodyShapeMatch = selectedBodyShapes.length === 0 || 
        p.bodyShape.some(shape => selectedBodyShapes.includes(shape));
      const categoryMatch = selectedCategories.length === 0 || 
        selectedCategories.includes(p.category);
      const brandMatch = selectedBrands.length === 0 || 
        selectedBrands.includes(p.brand);
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      
      return bodyShapeMatch && categoryMatch && brandMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        default: return 0;
      }
    });

  const FilterSection = () => (
    <div className="space-y-8">
      {/* Sort By */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#222] text-[15px]">Sort By</h3>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-0 py-2 border-0 border-b border-gray-200 bg-transparent focus:border-[#b2833a] focus:ring-0 outline-none transition-all cursor-pointer font-['Poppins:Regular',sans-serif] text-[13px] text-[#666] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px] bg-[right_0px_center] bg-no-repeat"
        >
          <option value="name-asc">Name A-Z</option>
          <option value="name-desc">Name Z-A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </motion.div>

      {/* Price Range */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#222] text-[15px]">Price Range</h3>
        <div className="space-y-4 pt-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1000}
            step={10}
            className="w-full"
          />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-[#999] mb-1 block">Min</label>
              <div className="border border-gray-200 rounded-md px-3 py-2 text-[13px] text-[#222]">
                ${priceRange[0]}
              </div>
            </div>
            <div>
              <label className="text-[11px] text-[#999] mb-1 block">Max</label>
              <div className="border border-gray-200 rounded-md px-3 py-2 text-[13px] text-[#222]">
                ${priceRange[1]}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Body Shape */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#222] text-[15px]">Body Shape</h3>
        <div className="space-y-1">
          {['Hourglass', 'Pear', 'Apple', 'Rectangle', 'Inverted Triangle'].map((shape, idx) => (
            <motion.label 
              key={shape} 
              className="flex items-center justify-between py-2 cursor-pointer group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + idx * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-4 h-4">
                  <input
                    type="checkbox"
                    checked={selectedBodyShapes.includes(shape)}
                    onChange={() => toggleBodyShape(shape)}
                    className="peer absolute opacity-0 w-4 h-4 cursor-pointer"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selectedBodyShapes.includes(shape) 
                      ? 'border-[#b2833a] bg-[#b2833a]' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedBodyShapes.includes(shape) && (
                      <svg className="w-full h-full text-white p-0.5" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#444] group-hover:text-[#b2833a] transition-colors">
                  {shape}
                </span>
              </div>
              <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#999]">
                {products.filter(p => p.bodyShape.includes(shape)).length}
              </span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Category */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#222] text-[15px]">Category</h3>
        <div className="space-y-1">
          {['Top wear', 'Full-length Dress', 'Coat/Jacket', 'Skirts', 'Knitwear', 'Trousers'].map((category, idx) => (
            <motion.label 
              key={category} 
              className="flex items-center justify-between py-2 cursor-pointer group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + idx * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-4 h-4">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="peer absolute opacity-0 w-4 h-4 cursor-pointer"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selectedCategories.includes(category) 
                      ? 'border-[#b2833a] bg-[#b2833a]' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedCategories.includes(category) && (
                      <svg className="w-full h-full text-white p-0.5" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#444] group-hover:text-[#b2833a] transition-colors">
                  {category}
                </span>
              </div>
              <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#999]">
                {products.filter(p => p.category === category).length}
              </span>
            </motion.label>
          ))}
        </div>
      </motion.div>

      {/* Brand */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#222] text-[15px]">Brand</h3>
        <div className="space-y-1">
          {['DRESSES', 'TOPS', 'OUTERWEAR', 'TROUSERS', 'SHIRTS'].map((brand, idx) => (
            <motion.label 
              key={brand} 
              className="flex items-center justify-between py-2 cursor-pointer group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55 + idx * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-4 h-4">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="peer absolute opacity-0 w-4 h-4 cursor-pointer"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selectedBrands.includes(brand) 
                      ? 'border-[#b2833a] bg-[#b2833a]' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    {selectedBrands.includes(brand) && (
                      <svg className="w-full h-full text-white p-0.5" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#444] group-hover:text-[#b2833a] transition-colors">
                  {brand}
                </span>
              </div>
              <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#999]">
                {products.filter(p => p.brand === brand).length}
              </span>
            </motion.label>
          ))}
        </div>
      </motion.div>
    </div>
  );

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
      {/* Hide the DesktopHeader from AnimatedWeb when ShopPage is active */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hide the AnimatedWeb DesktopHeader when Shop page is open */
        #desktop-header-wrapper {
          display: none !important;
        }
        /* Hide the mobile hamburger icon from homepage when Shop page is open */
        #mobile-hamburger-icon {
          display: none !important;
        }
      `}} />

      {/* Home Page Header Design */}
      <div className="sticky top-0 z-50">
        {/* Desktop/Tablet Header - Hidden on Mobile */}
        <div className="hidden md:block">
          <DesktopHeader 
            onLogoClick={onClose}
            onShopClick={() => {}} // Already on shop page
            onWishlistClick={onWishlistClick}
            onSearchClick={() => setSearchOpen(true)}
            onContactClick={onContactClick}
            onAboutClick={onAboutClick}
            onBlogClick={onBlogClick}
            onSolutionClick={onSolutionClick}
            onBodyShapeGuideClick={onBodyShapeGuideClick}
            wishlistCount={wishlist.length}
            activePage="clothing"
          />
        </div>

        {/* Mobile Header - Visible only on Mobile */}
        <div className="block md:hidden">
          <MobileHeader
            menuOpen={menuOpen}
            onMenuToggle={() => setMenuOpen(!menuOpen)}
            onSearchClick={() => setSearchOpen(true)}
            onShopClick={() => {}} // Already on shop page
            onWishlistClick={onWishlistClick}
            onLogoClick={onClose}
            activePage="clothing"
            wishlistCount={wishlist.length}
          />
        </div>
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
            className="text-center lg:text-left"
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
                onClick={onClose}
                whileHover={{ x: -2 }}
              >
                Home
              </motion.span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ccc]">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm text-[#222]">Clothing</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] mb-3 text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {filterByBodyShape ? `Perfect Fit for ${filterByBodyShape}` : 'Curated Collection'}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-base text-[#666] max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {filterByBodyShape 
                ? `Based on your measurements, we've curated ${filteredProducts.length} pieces specifically designed to flatter your ${filterByBodyShape} body shape.`
                : `Discover our handpicked selection of ${products.length} premium pieces, tailored to enhance your unique style and body shape.`
              }
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-8 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#b2833a] rounded-full animate-pulse" />
                <span className="text-sm text-[#888]">{filteredProducts.length} Available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#b2833a]">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="text-sm text-[#888]">Personalized Fit</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Recoleta_Alt:Medium',sans-serif] text-[#222222]">Filters</h2>
                  <button 
                    onClick={() => {
                      setSelectedBodyShapes([]);
                      setSelectedCategories([]);
                      setSelectedBrands([]);
                      setPriceRange([0, 1000]);
                    }}
                    className="text-xs text-[#b2833a] hover:underline"
                  >
                    Clear all
                  </button>
                </div>
                <FilterSection />
              </div>
            </div>
          </div>

          {/* Mobile Filters Drawer */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="absolute left-0 top-0 bottom-0 w-[280px] bg-white p-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-['Recoleta_Alt:Medium',sans-serif] text-[#222222]">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterSection />
              </motion.div>
            </motion.div>
          )}

          {/* Products Grid */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-[#666]">
                Showing <span className="text-[#222]">{filteredProducts.length}</span> products
              </p>
              
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#222222] text-white rounded-lg hover:bg-[#333333] transition-colors"
              >
                <SlidersHorizontal size={18} />
                <span className="font-['Poppins:Regular',sans-serif] text-[14px]">Filters</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  index={index}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  onProductClick={onProductClick}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-[#666] mb-4">No products found matching your filters</p>
                <button
                  onClick={() => {
                    setSelectedBodyShapes([]);
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 1000]);
                  }}
                  className="text-[#b2833a] hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}