"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Send, CheckCircle2, X } from 'lucide-react';


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
            No results found for &quot;{searchQuery}&quot;
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

// Success Modal Component
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-[#222222] mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem' }}>
                Message Sent!
              </h3>
              
              <p className="text-gray-600 mb-6 font-['Poppins:Regular',sans-serif]">
                Thank you for reaching out. We&apos;ve received your message and will get back to you within 24 hours.
              </p>
              
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white rounded-full shadow-lg hover:shadow-xl transition-all font-['Poppins:Medium',sans-serif]"
              >
                Got it
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ContactPageProps {
  onClose?: () => void;
  onGoHome?: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
}

export default function ContactPage({ 
}: ContactPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccessModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Fashion Street', 'San Francisco, CA 94105', 'United States'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@stylemyfit.com', 'support@stylemyfit.com'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Mon-Fri, 9am-5pm PST'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#b2833a]/5 via-[#D38436]/5 to-transparent py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#b2833a] rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D38436] rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-[#222222] mb-6" 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)'
                }}
              >
                Contact Us
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins:Regular',sans-serif] text-lg md:text-xl">
                Have questions about StyleMyFit? We&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Form & Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 border border-gray-100">
                <h2 
                  className="text-[#222222] mb-2" 
                  style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}
                >
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-8 font-['Poppins:Regular',sans-serif]">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Poppins:Regular',sans-serif] ${
                        focusedField === 'name' || formData.name
                          ? '-top-6 text-sm text-[#b2833a]'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pb-3 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-[#b2833a] outline-none transition-colors font-['Poppins:Regular',sans-serif] text-[#222222]"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Poppins:Regular',sans-serif] ${
                        focusedField === 'email' || formData.email
                          ? '-top-6 text-sm text-[#b2833a]'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pb-3 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-[#b2833a] outline-none transition-colors font-['Poppins:Regular',sans-serif] text-[#222222]"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-0 transition-all duration-200 pointer-events-none font-['Poppins:Regular',sans-serif] ${
                        focusedField === 'message' || formData.message
                          ? '-top-6 text-sm text-[#b2833a]'
                          : 'top-3 text-gray-500'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full pb-3 pt-3 bg-transparent border-b-2 border-gray-200 focus:border-[#b2833a] outline-none transition-colors resize-none font-['Poppins:Regular',sans-serif] text-[#222222]"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all font-['Poppins:Medium',sans-serif] text-lg flex items-center justify-center gap-3 group relative overflow-hidden"
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
                    <span className="relative">Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 
                className="text-[#222222] mb-8" 
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}
              >
                Get in Touch
              </h2>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#222222] mb-2 font-['Poppins:SemiBold',sans-serif] text-lg">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p 
                            key={idx} 
                            className="text-gray-600 font-['Poppins:Regular',sans-serif] text-sm leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-br from-[#b2833a]/10 via-[#D38436]/10 to-transparent rounded-2xl p-6 border-2 border-[#b2833a]/20"
              >
                <h3 className="text-[#222222] mb-3 font-['Poppins:SemiBold',sans-serif] text-lg">
                  Quick Response
                </h3>
                <p className="text-gray-600 font-['Poppins:Regular',sans-serif] text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly during business hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Map Section (Optional decorative element) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24"
        >
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden h-[400px] relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#b2833a] mx-auto mb-4" />
                <p className="text-gray-600 font-['Poppins:Regular',sans-serif]">
                  Interactive map placeholder
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearchOverlay && <SearchOverlay onClose={() => setShowSearchOverlay(false)} />}
      </AnimatePresence>

     

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />

     
    </>
  );
}