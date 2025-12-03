import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import WebLayout from './components/WebLayout';
import TabletLayoutNew from './components/TabletLayoutNew';
import MobileLayoutNew from './components/MobileLayoutNew';
import ShopPage from './components/ShopPage';
import WishlistPage from './components/WishlistPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import SolutionPage from './components/SolutionPage';
import PageLoader from './components/PageLoader';
import WelcomePopup from './components/WelcomePopup';
import StyleFinder from './components/StyleFinder';
import ProductDetailPage from './components/ProductDetailPage';
import BodyShapeGuide from './pages/BodyShapeGuide';

export default function App() {
  const [measurementUnit, setMeasurementUnit] = useState('inches');
  const [showShopPage, setShowShopPage] = useState(false);
  const [showWishlistPage, setShowWishlistPage] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showContactPage, setShowContactPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showBlogPage, setShowBlogPage] = useState(false);
  const [showSolutionPage, setShowSolutionPage] = useState(false);
  const [showBodyShapeGuide, setShowBodyShapeGuide] = useState(false);
  const [selectedProductSource, setSelectedProductSource] = useState<'shop' | 'wishlist'>('shop');
  const [userBodyShape, setUserBodyShape] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showStyleFinder, setShowStyleFinder] = useState(false);

  // Load wishlist count from localStorage on mount
  useEffect(() => {
    const loadWishlistCount = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          const count = Array.isArray(wishlist) ? wishlist.length : 0;
          setWishlistCount(count);
          console.log('💛 Wishlist Count Updated:', count);
        } catch {
          setWishlistCount(0);
        }
      } else {
        setWishlistCount(0);
      }
    };

    loadWishlistCount();
    
    // Listen for wishlist changes
    const handleStorageChange = () => {
      loadWishlistCount();
    };

    window.addEventListener('storage', handleStorageChange);
    // Custom event for same-tab updates
    window.addEventListener('wishlistUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Simulate page loading - wait for content to be ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Show loader for 2.5 seconds minimum

    // Also check if document is loaded
    if (document.readyState === 'complete') {
      const minTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Minimum 1.5s for better UX
      return () => clearTimeout(minTimer);
    }

    return () => clearTimeout(timer);
  }, []);

  // Auto-show Welcome Popup after 5 seconds
  useEffect(() => {
    // Check if this is the first visit or if popup was never shown automatically
    const hasShownWelcomePopup = sessionStorage.getItem('welcomePopupShown');
    
    if (!hasShownWelcomePopup && !isLoading && !showShopPage && !showWishlistPage) {
      const welcomeTimer = setTimeout(() => {
        setShowWelcomePopup(true);
        sessionStorage.setItem('welcomePopupShown', 'true');
        console.log('✨ Auto-showing Welcome popup after 5 seconds');
      }, 5000); // 5 seconds after page loads

      return () => clearTimeout(welcomeTimer);
    }
  }, [isLoading, showShopPage, showWishlistPage]);

  const openShopPage = () => {
    setShowShopPage(true);
    setShowWishlistPage(false);
    setShowContactPage(false);
    setShowProductDetail(false);
    setShowAboutPage(false);
    setShowBlogPage(false);
    setShowSolutionPage(false);
    setShowBodyShapeGuide(false);
  };

  const closeShopPage = () => {
    setShowShopPage(false);
  };

  const openWishlistPage = () => {
    setShowWishlistPage(true);
    setShowShopPage(false);
    setShowContactPage(false);
    setShowProductDetail(false);
    setShowBodyShapeGuide(false);
  };

  const closeWishlistPage = () => {
    setShowWishlistPage(false);
  };

  const handleShopFromWishlist = () => {
    setShowWishlistPage(false);
    setShowShopPage(true);
  };

  const handleGoHome = () => {
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowContactPage(false);
    setShowProductDetail(false);
    setShowAboutPage(false);
    setShowBlogPage(false);
    setShowSolutionPage(false);
    setShowBodyShapeGuide(false);
  };

  const handleFindMyStyle = () => {
    console.log('🎯 handleFindMyStyle called!');
    console.log('📊 Current showStyleFinder state:', showStyleFinder);
    // Open StyleFinder when Find My Style is clicked
    setShowStyleFinder(true);
    console.log('✅ setShowStyleFinder(true) executed');
  };

  const handleWelcomeYes = () => {
    setShowWelcomePopup(false);
    // Trigger StyleFinder to open in all layouts
    setShowStyleFinder(true);
  };

  const handleWelcomeNotNow = () => {
    setShowWelcomePopup(false);
  };

  const handleStyleFinderClose = () => {
    setShowStyleFinder(false);
  };

  const handleStyleFinderComplete = (measurements: any, bodyShape: string) => {
    console.log('✅ StyleFinder Complete!', { measurements, bodyShape });
    setUserBodyShape(bodyShape);
    setShowStyleFinder(false);
    
    // Small delay to ensure StyleFinder closes smoothly
    setTimeout(() => {
      console.log('🛍️ Opening Shop Page with body shape:', bodyShape);
      openShopPage();
    }, 100);
  };

  const openProductDetail = (source: 'shop' | 'wishlist') => {
    setSelectedProductSource(source);
    setShowProductDetail(true);
  };

  const closeProductDetail = () => {
    setShowProductDetail(false);
  };

  const handleWishlistClickFromProduct = () => {
    setShowProductDetail(false);
    setShowWishlistPage(true);
    setShowShopPage(false);
  };

  const openContactPage = () => {
    setShowContactPage(true);
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowProductDetail(false);
    setShowAboutPage(false);
    setShowBlogPage(false);
    setShowSolutionPage(false);
    setShowBodyShapeGuide(false);
  };

  const closeContactPage = () => {
    setShowContactPage(false);
  };

  const openAboutPage = () => {
    setShowAboutPage(true);
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowProductDetail(false);
    setShowContactPage(false);
    setShowBlogPage(false);
    setShowSolutionPage(false);
    setShowBodyShapeGuide(false);
  };

  const closeAboutPage = () => {
    setShowAboutPage(false);
  };

  const openBlogPage = () => {
    setShowBlogPage(true);
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowProductDetail(false);
    setShowContactPage(false);
    setShowAboutPage(false);
    setShowSolutionPage(false);
    setShowBodyShapeGuide(false);
  };

  const closeBlogPage = () => {
    setShowBlogPage(false);
  };

  const openSolutionPage = () => {
    setShowSolutionPage(true);
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowProductDetail(false);
    setShowContactPage(false);
    setShowAboutPage(false);
    setShowBlogPage(false);
    setShowBodyShapeGuide(false);
  };

  const closeSolutionPage = () => {
    setShowSolutionPage(false);
  };

  const openBodyShapeGuide = () => {
    setShowBodyShapeGuide(true);
    setShowShopPage(false);
    setShowWishlistPage(false);
    setShowProductDetail(false);
    setShowContactPage(false);
    setShowAboutPage(false);
    setShowBlogPage(false);
    setShowSolutionPage(false);
  };

  const closeBodyShapeGuide = () => {
    setShowBodyShapeGuide(false);
  };

  return (
    <>
      {/* Desktop Layout - 1024px and above */}
      <WebLayout
        onFindMyStyle={handleFindMyStyle}
        onShopClick={openShopPage}
        onWishlistClick={openWishlistPage}
        onLogoClick={handleGoHome}
        onContactClick={openContactPage}
        onAboutClick={openAboutPage}
        onBlogClick={openBlogPage}
        onSolutionClick={openSolutionPage}
        onBodyShapeGuideClick={openBodyShapeGuide}
        wishlistCount={wishlistCount}
        unit={measurementUnit}
        onUnitChange={setMeasurementUnit}
        triggerStyleFinder={showStyleFinder}
        onStyleFinderClose={handleStyleFinderClose}
      />

      {/* Tablet Layout - 768px to 1023px */}
      <TabletLayoutNew
        onFindMyStyle={handleFindMyStyle}
        onShopClick={openShopPage}
        onWishlistClick={openWishlistPage}
        onGoHome={handleGoHome}
        onContactClick={openContactPage}
        onAboutClick={openAboutPage}
        onBlogClick={openBlogPage}
        onSolutionClick={openSolutionPage}
        onBodyShapeGuideClick={openBodyShapeGuide}
        unit={measurementUnit}
        onUnitChange={setMeasurementUnit}
        triggerStyleFinder={showStyleFinder}
        onStyleFinderClose={handleStyleFinderClose}
      />

      {/* Mobile Layout - Below 768px */}
      <MobileLayoutNew
        onFindMyStyle={handleFindMyStyle}
        onShopClick={openShopPage}
        onWishlistClick={openWishlistPage}
        onGoHome={handleGoHome}
        onContactClick={openContactPage}
        onAboutClick={openAboutPage}
        onBlogClick={openBlogPage}
        onSolutionClick={openSolutionPage}
        onBodyShapeGuideClick={openBodyShapeGuide}
        unit={measurementUnit}
        onUnitChange={setMeasurementUnit}
        wishlistCount={wishlistCount}
        triggerStyleFinder={showStyleFinder}
        onStyleFinderClose={handleStyleFinderClose}
      />

      {/* Shop Page - Available for all screen sizes */}
      <AnimatePresence>
        {showShopPage && (
          <ShopPage
            onClose={handleGoHome}
            filterByBodyShape={userBodyShape}
            onWishlistClick={openWishlistPage}
            onProductClick={openProductDetail}
            onContactClick={openContactPage}
            onAboutClick={openAboutPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
          />
        )}
      </AnimatePresence>

      {/* Wishlist Page - Available for all screen sizes */}
      <AnimatePresence>
        {showWishlistPage && (
          <WishlistPage
            onClose={closeWishlistPage}
            onShopClick={handleShopFromWishlist}
            onGoHome={handleGoHome}
            onProductClick={openProductDetail}
            onContactClick={openContactPage}
            onAboutClick={openAboutPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
          />
        )}
      </AnimatePresence>

      {/* Product Detail Page - Available for all screen sizes */}
      <AnimatePresence>
        {showProductDetail && (
          <ProductDetailPage
            onClose={closeProductDetail}
            wishlistCount={wishlistCount}
            onWishlistClick={handleWishlistClickFromProduct}
            source={selectedProductSource}
            onStyleFinderClick={handleFindMyStyle}
            onContactClick={openContactPage}
            onAboutClick={openAboutPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
          />
        )}
      </AnimatePresence>

      {/* Contact Page - Available for all screen sizes */}
      <AnimatePresence>
        {showContactPage && (
          <ContactPage
            onClose={closeContactPage}
            onGoHome={handleGoHome}
            onShopClick={openShopPage}
            onWishlistClick={openWishlistPage}
            onAboutClick={openAboutPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
            wishlistCount={wishlistCount}
          />
        )}
      </AnimatePresence>

      {/* About Page - Available for all screen sizes */}
      <AnimatePresence>
        {showAboutPage && (
          <AboutPage
            onClose={closeAboutPage}
            onGoHome={handleGoHome}
            onShopClick={openShopPage}
            onWishlistClick={openWishlistPage}
            onContactClick={openContactPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
            wishlistCount={wishlistCount}
          />
        )}
      </AnimatePresence>

      {/* Blog Page - Available for all screen sizes */}
      <AnimatePresence>
        {showBlogPage && (
          <BlogPage
            onClose={closeBlogPage}
            onGoHome={handleGoHome}
            onShopClick={openShopPage}
            onWishlistClick={openWishlistPage}
            onAboutClick={openAboutPage}
            onContactClick={openContactPage}
            onSolutionClick={openSolutionPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
            wishlistCount={wishlistCount}
          />
        )}
      </AnimatePresence>

      {/* Solution Page - Available for all screen sizes */}
      <AnimatePresence>
        {showSolutionPage && (
          <SolutionPage
            onClose={closeSolutionPage}
            onGoHome={handleGoHome}
            onShopClick={openShopPage}
            onWishlistClick={openWishlistPage}
            onAboutClick={openAboutPage}
            onContactClick={openContactPage}
            onBlogClick={openBlogPage}
            onBodyShapeGuideClick={openBodyShapeGuide}
            wishlistCount={wishlistCount}
          />
        )}
      </AnimatePresence>

      {/* Body Shape Guide Page - Available for all screen sizes */}
      <AnimatePresence>
        {showBodyShapeGuide && (
          <BodyShapeGuide
            onClose={closeBodyShapeGuide}
            onGoHome={handleGoHome}
            onShopClick={openShopPage}
            onWishlistClick={openWishlistPage}
            onAboutClick={openAboutPage}
            onContactClick={openContactPage}
            onBlogClick={openBlogPage}
            onSolutionClick={openSolutionPage}
            wishlistCount={wishlistCount}
            onFindMyStyle={handleFindMyStyle}
          />
        )}
      </AnimatePresence>

      {/* Page Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader />}
      </AnimatePresence>

      {/* Welcome Popup - Appears after 5 seconds */}
      <AnimatePresence>
        {showWelcomePopup && (
          <WelcomePopup
            onYes={handleWelcomeYes}
            onNotNow={handleWelcomeNotNow}
          />
        )}
      </AnimatePresence>

      {/* StyleFinder Popup - Single instance for all layouts */}
      <AnimatePresence>
        {showStyleFinder && (
          <>
            {console.log('🎨 Rendering StyleFinder popup, showStyleFinder:', showStyleFinder)}
            <StyleFinder
              unit={measurementUnit}
              onUnitChange={setMeasurementUnit}
              onClose={handleStyleFinderClose}
              onComplete={handleStyleFinderComplete}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}