import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, ChevronLeft, ChevronRight, X, Truck, Shield, RotateCcw, Share2, ZoomIn, Check, ArrowLeft, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import DesktopHeader from './DesktopHeader';
import TabletHeader from './TabletHeader';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import LoginModal from './LoginModal';
import CustomCartIcon from './CustomCartIcon';
import BodyShapePopup from './BodyShapePopup';
import Footer from './Footer';
import hoodieImage1 from 'figma:asset/cdf1fdfc21e897b560f280cdd0fed07e128d47ac.png';

// Icon component for search
function IconamoonSearch() {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[22px] w-[22px]"
    >
      <path
        d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
        stroke="#222222"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
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
      className="fixed inset-0 z-[9999] flex items-center justify-center"
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

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  images?: string[];
}

interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductDetailPageProps {
  onClose?: () => void;
  wishlistCount?: number;
  onWishlistClick?: () => void;
  source?: 'shop' | 'wishlist';
  onStyleFinderClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
}

export default function ProductDetailPage({ onClose, wishlistCount = 0, onWishlistClick, source = 'shop', onStyleFinderClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick }: ProductDetailPageProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [reviewImages, setReviewImages] = useState<string[]>([]);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [showReviewImagePreview, setShowReviewImagePreview] = useState(false);
  const [selectedReviewImages, setSelectedReviewImages] = useState<string[]>([]);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 5;
  
  // Login state - simulating user not logged in
  const [isLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Body Shape Popup state
  const [showBodyShapePopup, setShowBodyShapePopup] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState('inches');

  const productImages = [
    hoodieImage1,
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const colors = [
    { name: 'beige', hex: '#D4C5B9', label: 'Sand Beige' },
    { name: 'black', hex: '#1A1A1A', label: 'Midnight Black' },
    { name: 'white', hex: '#F5F5F5', label: 'Cloud White' },
    { name: 'sage', hex: '#A8B5A0', label: 'Sage Green' },
  ];

  // Sample reviews with images
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      rating: 5,
      date: 'November 2, 2025',
      comment: 'Absolutely love this hoodie! The fabric is incredibly soft and the fit is perfect. It\'s become my go-to piece for casual days. I\'ve attached some photos showing how great it looks!',
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1745825219087-802850857308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBob29kaWV8ZW58MXx8fHwxNzYyOTYyNTI5fDA&ixlib=rb-4.1.0&q=80&w=400',
        'https://images.unsplash.com/photo-1636923611438-8fd1e53ed06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBjbG9zZSUyMHVwJTIwZGV0YWlsfGVufDF8fHx8MTc2Mjk2MjUzMnww&ixlib=rb-4.1.0&q=80&w=400',
      ],
    },
    {
      id: 2,
      name: 'Emma Rodriguez',
      rating: 5,
      date: 'October 28, 2025',
      comment: 'The quality exceeded my expectations. True to size and the minimalist design goes with everything in my wardrobe.',
      verified: true,
    },
    {
      id: 3,
      name: 'Jessica Chen',
      rating: 4,
      date: 'October 25, 2025',
      comment: 'Great hoodie! Very comfortable and stylish. Only minor note is that it\'s slightly longer than I expected, but I actually like the oversized look. Here\'s how it looks on me!',
      verified: true,
      images: [
        'https://images.unsplash.com/photo-1760661696925-85cd09cac428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21meSUyMGNsb3RoaW5nJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2Mjk2MjUzNXww&ixlib=rb-4.1.0&q=80&w=400',
      ],
    },
    {
      id: 4,
      name: 'Olivia Parker',
      rating: 5,
      date: 'October 20, 2025',
      comment: 'This is hands down the best hoodie I\'ve ever owned. The attention to detail is remarkable and it washes beautifully.',
      verified: true,
    },
    {
      id: 5,
      name: 'Maya Thompson',
      rating: 5,
      date: 'October 15, 2025',
      comment: 'Worth every penny! The fabric quality is outstanding and it\'s so cozy. I\'ve already recommended it to all my friends. Perfect for layering or wearing alone.',
      verified: true,
    },
    {
      id: 6,
      name: 'Sophia Anderson',
      rating: 4,
      date: 'October 10, 2025',
      comment: 'Really impressed with the sustainable materials and ethical production. The hoodie is comfortable and the color is exactly as shown. Would have given 5 stars but wish it had more color options.',
      verified: true,
    },
    {
      id: 7,
      name: 'Ava Martinez',
      rating: 5,
      date: 'October 5, 2025',
      comment: 'This hoodie has become a staple in my wardrobe! The oversized fit is flattering and the kangaroo pocket is surprisingly spacious. Love that it\'s made from organic cotton too.',
      verified: true,
    },
  ];

  const relatedProducts: RelatedProduct[] = [
    {
      id: 1,
      name: 'Cashmere Blend Cardigan',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1724405095085-06d4246a2af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzYyNTIwMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Silk Relaxed Trousers',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBmYXNoaW9ufGVufDF8fHx8MTc2MjQ2NjE5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Organic Cotton Tee',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1584061516874-ed56f46d8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBmbGF0JTIwbGF5fGVufDF8fHx8MTc2MjU0NDU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'Merino Wool Sweater',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1745284504844-7979176dc29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2xvdGhpbmclMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzYyNTQ0NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Pagination calculations
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startReview = (currentReviewPage - 1) * reviewsPerPage;
  const endReview = startReview + reviewsPerPage;
  const currentReviews = reviews.slice(startReview, endReview);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            imageUrls.push(event.target.result as string);
            if (imageUrls.length === files.length) {
              setReviewImages([...reviewImages, ...imageUrls]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeReviewImage = (index: number) => {
    setReviewImages(reviewImages.filter((_, i) => i !== index));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is logged in
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    
    console.log('Review submitted:', { ...newReview, images: reviewImages });
    setShowReviewForm(false);
    setNewReview({ rating: 5, comment: '' });
    setReviewImages([]);
  };

  const handleViewImages = (images: string[], startIndex: number = 0) => {
    setSelectedReviewImages(images);
    setPreviewImageIndex(startIndex);
    setShowReviewImagePreview(true);
  };

  const handlePreviewPrevious = () => {
    setPreviewImageIndex((prev) => 
      prev === 0 ? selectedReviewImages.length - 1 : prev - 1
    );
  };

  const handlePreviewNext = () => {
    setPreviewImageIndex((prev) => 
      prev === selectedReviewImages.length - 1 ? 0 : prev + 1
    );
  };

  // Handle menu navigation
  const handleMenuNavigate = (section: string) => {
    console.log('Navigate to:', section);
    if (section === 'Clothing' && onClose) {
      onClose();
    }
    if (section === 'Wishlist' && onWishlistClick) {
      onWishlistClick();
    }
    if (section === 'Home') {
      if (onClose) {
        onClose();
      }
    }
    setMenuOpen(false);
  };

  // Add to wishlist function
  const handleAddToWishlist = () => {
    const product = {
      id: 'hoodie-001',
      name: 'Minimalist Oversized Hoodie',
      price: 79.99,
      image: productImages[0],
      size: selectedSize,
      color: colors.find(c => c.name === selectedColor)?.label || 'Sand Beige',
    };

    const savedWishlist = localStorage.getItem('wishlist');
    let wishlist = [];
    
    if (savedWishlist) {
      try {
        wishlist = JSON.parse(savedWishlist);
      } catch (e) {
        wishlist = [];
      }
    }

    const existingIndex = wishlist.findIndex((item: any) => item.id === product.id);
    
    if (existingIndex >= 0) {
      wishlist.splice(existingIndex, 1);
      setIsWishlisted(false);
      console.log('💔 Removed from wishlist');
    } else {
      wishlist.push(product);
      setIsWishlisted(true);
      console.log('💛 Added to wishlist');
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9998] bg-white overflow-y-auto"
    >
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <DesktopHeader 
          onLogoClick={onClose}
          onShopClick={onClose}
          onWishlistClick={onWishlistClick}
          onSearchClick={() => setShowSearchOverlay(true)}
          onContactClick={onContactClick}
          onAboutClick={onAboutClick}
          onBlogClick={onBlogClick}
          onSolutionClick={onSolutionClick}
          wishlistCount={wishlistCount}
          activePage="clothing"
        />
      </div>

      {/* Tablet Header */}
      <div className="hidden md:block lg:hidden">
        <TabletHeader 
          onLogoClick={onClose}
          onMenuClick={() => setMenuOpen(!menuOpen)}
          onSearchClick={() => setShowSearchOverlay(true)}
        />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader 
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          onSearchClick={() => setShowSearchOverlay(true)}
          onShopClick={onClose}
          onWishlistClick={onWishlistClick}
          onLogoClick={onClose}
          onLoginClick={() => setShowLoginModal(true)}
          activePage="clothing"
          wishlistCount={wishlistCount}
        />
      </div>

      <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <motion.span 
              className="text-sm text-[#888] hover:text-[#b2833a] cursor-pointer transition-all duration-300" 
              onClick={onClose}
              whileHover={{ x: -2 }}
            >
              Home
            </motion.span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ccc]">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <motion.span 
              className="text-sm text-[#888] hover:text-[#b2833a] cursor-pointer transition-all duration-300" 
              onClick={source === 'wishlist' ? onWishlistClick : onClose}
              whileHover={{ x: -2 }}
            >
              {source === 'wishlist' ? 'Wishlist' : 'Clothing'}
            </motion.span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ccc]">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-[#222]">Minimalist Oversized Hoodie</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Product Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div 
              className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={productImages[currentImageIndex]}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Zoom Button */}
              <motion.button
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowImageZoom(true)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="w-5 h-5 text-[#222222]" />
              </motion.button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5 text-[#222222]" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronRight className="w-5 h-5 text-[#222222]" />
              </button>

              {/* Sale Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white px-4 py-2 rounded-full text-sm shadow-lg">
                Save 20%
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-[#b2833a] shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Product Title & Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-3">
                <p className="text-sm text-gray-500 mb-1 tracking-wide uppercase">Premium Collection</p>
                <h1 className="text-[#222222] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Minimalist Oversized Hoodie
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? 'fill-[#D38436] text-[#D38436]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-baseline gap-3"
            >
              <span className="text-[#222222]" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif' }}>
                $79.99
              </span>
              <span className="text-gray-400 line-through text-xl">$99.99</span>
              <span className="text-green-600 text-sm px-3 py-1 bg-green-50 rounded-full">
                20% OFF
              </span>
            </motion.div>

            {/* Color Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">
                  Color: <span className="text-[#222222]">{colors.find(c => c.name === selectedColor)?.label}</span>
                </label>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-[#b2833a] shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor === color.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check className="w-5 h-5 text-white drop-shadow-lg" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Body Shape Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-gradient-to-br from-[#b2833a]/5 via-[#D38436]/5 to-transparent border border-[#b2833a]/20 rounded-xl p-4"
            >
              <p className="text-sm text-[#666666] mb-3">
                Not sure if this is right for your body shape?
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBodyShapePopup(true)}
                className="px-4 py-2 bg-white border-2 border-[#b2833a] text-[#b2833a] rounded-lg hover:bg-[#b2833a] hover:text-white transition-all text-sm"
              >
                Know your body shape
              </motion.button>
            </motion.div>

            {/* Size Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">
                  Size: <span className="text-[#222222]">{selectedSize}</span>
                </label>
                <button className="text-sm text-[#b2833a] hover:underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-xl border-2 text-sm transition-all ${
                      selectedSize === size
                        ? 'border-[#b2833a] bg-[#b2833a] text-white shadow-lg'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative flex items-center justify-center gap-2">
                  <CustomCartIcon className="w-5 h-5" />
                  Buy Now
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToWishlist}
                className="w-full bg-white border-2 border-[#b2833a] text-[#b2833a] py-4 px-6 rounded-full hover:bg-[#b2833a] hover:text-white transition-all text-center"
              >
                {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </motion.button>

              <button className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-[#b2833a] transition-colors py-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b border-gray-200 bg-transparent rounded-none h-auto p-0 mb-8">
              <TabsTrigger
                value="details"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#b2833a] rounded-none px-8 py-4 data-[state=active]:bg-transparent"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="material"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#b2833a] rounded-none px-8 py-4 data-[state=active]:bg-transparent"
              >
                Material & Care
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Elevate your casual wardrobe with our Minimalist Oversized Hoodie. Crafted from premium
                organic cotton blend, this hoodie combines contemporary design with ultimate comfort.
              </p>
              <p>
                The relaxed oversized fit provides a modern silhouette while maintaining a polished look.
                Features include a spacious kangaroo pocket, adjustable drawstring hood, and ribbed cuffs
                for a secure fit.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Oversized, relaxed fit for maximum comfort</li>
                <li>Premium organic cotton blend fabric</li>
                <li>Kangaroo front pocket with hidden phone compartment</li>
                <li>Adjustable drawstring hood</li>
                <li>Ribbed cuffs and hem</li>
                <li>Unisex design</li>
                <li>Ethically manufactured</li>
              </ul>
            </TabsContent>

            <TabsContent value="material" className="space-y-4 text-gray-600 leading-relaxed">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#222222] mb-2">Fabric Composition</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>80% Organic Cotton</li>
                    <li>20% Recycled Polyester</li>
                    <li>Weight: 320 GSM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#222222] mb-2">Care Instructions</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Machine wash cold with similar colors</li>
                    <li>Use gentle cycle</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low or hang to dry</li>
                    <li>Iron on low heat if needed</li>
                    <li>Do not dry clean</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#222222] mb-2">Sustainability</h3>
                  <p>
                    This hoodie is made from GOTS-certified organic cotton and recycled materials.
                    Manufactured in facilities with fair labor practices and minimal environmental impact.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* You Might Also Like Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-16"
        >
          <h2 className="text-[#222222] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden mb-4 relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-5 h-5 text-gray-400" />
                  </motion.button>
                </div>
                <h3 className="text-[#222222] mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[#222222] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Customer Reviews
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? 'fill-[#D38436] text-[#D38436]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm sm:text-base">
                  {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-3 bg-white border-2 border-[#b2833a] text-[#b2833a] rounded-full hover:bg-[#b2833a] hover:text-white transition-all text-sm sm:text-base"
            >
              Write a Review
            </motion.button>
          </div>

          {/* Review Form */}
          <AnimatePresence>
            {showReviewForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 bg-gray-50 rounded-2xl p-4 sm:p-6 overflow-hidden"
              >
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                        >
                          <Star
                            className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition-colors ${
                              star <= newReview.rating
                                ? 'fill-[#D38436] text-[#D38436]'
                                : 'text-gray-300'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Your Review</label>
                    <textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#b2833a] focus:outline-none transition-colors resize-none font-['Poppins:Regular',sans-serif] text-sm"
                      rows={4}
                      placeholder="Share your experience with this product..."
                      required
                    />
                  </div>

                  {/* Image Upload Section */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Add Photos (Optional)</label>
                    <div className="space-y-3">
                      {/* Upload Button */}
                      <label className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#b2833a] hover:bg-gray-50 transition-all">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">Upload images (up to 5)</span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>

                      {/* Image Previews */}
                      {reviewImages.length > 0 && (
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                          {reviewImages.map((img, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="relative aspect-square rounded-lg overflow-hidden group"
                            >
                              <img
                                src={img}
                                alt={`Preview ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeReviewImage(idx)}
                                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white rounded-full hover:shadow-lg transition-shadow"
                    >
                      Submit Review
                    </motion.button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowReviewForm(false);
                        setReviewImages([]);
                      }}
                      className="px-6 py-3 text-gray-600 hover:text-[#222222] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reviews List */}
          <div className="space-y-6">
            {currentReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="text-[#222222]">{review.name}</p>
                      {review.verified && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'fill-[#D38436] text-[#D38436]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{review.comment}</p>

                {/* Review Images */}
                {review.images && review.images.length > 0 && (
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {review.images.map((img, imgIdx) => (
                        <motion.button
                          key={imgIdx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleViewImages(review.images!, imgIdx)}
                          className="relative aspect-square rounded-lg overflow-hidden group"
                        >
                          <img
                            src={img}
                            alt={`Review image ${imgIdx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    <button
                      onClick={() => handleViewImages(review.images!, 0)}
                      className="text-sm text-[#b2833a] hover:underline flex items-center gap-1"
                    >
                      <ImageIcon className="w-4 h-4" />
                      View {review.images.length} {review.images.length === 1 ? 'Image' : 'Images'}
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pagination - Only show if there are more than 5 reviews */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentReviewPage(prev => Math.max(1, prev - 1))}
                disabled={currentReviewPage === 1}
                className={`p-2 rounded-full transition-all ${
                  currentReviewPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-[#b2833a] hover:bg-[#b2833a]/10'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <motion.button
                    key={pageNumber}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentReviewPage(pageNumber)}
                    className={`w-10 h-10 rounded-full transition-all flex items-center justify-center ${
                      currentReviewPage === pageNumber
                        ? 'bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNumber}
                  </motion.button>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentReviewPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentReviewPage === totalPages}
                className={`p-2 rounded-full transition-all ${
                  currentReviewPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-[#b2833a] hover:bg-[#b2833a]/10'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {showImageZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageZoom(false)}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setShowImageZoom(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl max-h-[90vh]"
            >
              <ImageWithFallback
                src={productImages[currentImageIndex]}
                alt="Zoomed product"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Review Image Preview Modal */}
      <AnimatePresence>
        {showReviewImagePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowReviewImagePreview(false)}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setShowReviewImagePreview(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            {selectedReviewImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviewPrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviewNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {selectedReviewImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm">
                {previewImageIndex + 1} / {selectedReviewImages.length}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={previewImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedReviewImages[previewImageIndex]}
                  alt={`Review image ${previewImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearchOverlay && <SearchOverlay onClose={() => setShowSearchOverlay(false)} />}
      </AnimatePresence>
      
      {/* Mobile Menu Drawer - Only for mobile view */}
      <div className="block md:hidden">
        <MobileMenu 
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          onNavigate={handleMenuNavigate}
        />
      </div>
      
      {/* Login Modal */}
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      
      {/* Body Shape Popup */}
      <BodyShapePopup
        isOpen={showBodyShapePopup}
        onClose={() => setShowBodyShapePopup(false)}
        unit={measurementUnit}
        onUnitChange={setMeasurementUnit}
      />
      </div>
      <Footer />
    </motion.div>
  );
}
