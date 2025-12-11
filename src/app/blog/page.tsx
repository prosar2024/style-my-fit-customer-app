"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Calendar, Tag, ArrowRight, TrendingUp, X } from 'lucide-react';
import { ImageWithFallback } from '@/components/reusable/atoms/ImageWithFallback';
import { BlogPost, blogPosts, categories, popularPosts } from '@/data/blogPost';

export default function BlogPage() {
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
                className="text-[#d1d5db] text-[16px] sm:text-[18px] leading-relaxed mb-8 font-poppins"
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
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Search className="text-[#999999]" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-[16px] bg-white text-[#222222] placeholder:text-[#999999] font-poppins text-[15px] focus:outline-none focus:ring-2 focus:ring-[#b2833a] transition-all"
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
                      <div className="bg-[#b2833a] text-white px-4 py-2 rounded-[12px] shadow-lg font-poppins font-semibold text-[12px] flex items-center gap-2">
                        <TrendingUp size={14} />
                        Featured
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    {/* Category & Date */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#b2833a]/10 text-[#b2833a] rounded-[8px] font-poppins font-semibold text-[12px]">
                        <Tag size={12} />
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#999999] font-poppins font-normal text-[13px]">
                        <Calendar size={13} />
                        {blogPosts[0].date}
                      </span>
                    </div>

                    <h2 className="text-[#222222] mb-3 group-hover:text-[#b2833a] transition-colors duration-300">
                      {blogPosts[0].title}
                    </h2>

                    <p className="text-[#666666] font-poppins font-normal text-[15px] leading-relaxed mb-4">
                      {blogPosts[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#999999] font-poppins font-medium text-[13px]">
                        {blogPosts[0].readTime}
                      </span>

                      <motion.button
                        className="inline-flex items-center gap-2 text-[#b2833a] font-poppins font-semibold text-[14px] group/btn"
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
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-poppins font-semibold text-[11px] shadow-md">
                          <Tag size={11} />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-[#999999] font-poppins font-normal text-[12px] mb-3">
                        <Calendar size={12} />
                        {post.date}
                      </div>

                      <h3 className="text-[#222222] text-[18px] sm:text-[20px] leading-[1.3] mb-3 group-hover:text-[#b2833a] transition-colors duration-300 font-poppins font-medium">
                        {post.title}
                      </h3>

                      <p className="text-[#666666] font-poppins font-normal text-[14px] leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-[#f0f0f0]">
                        <span className="text-[#999999] font-poppins font-medium text-[12px]">
                          {post.readTime}
                        </span>

                        <motion.button
                          className="inline-flex items-center gap-2 text-[#b2833a] font-poppins font-semibold text-[13px]"
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
                  <h3 className="text-[#222222] text-[18px] mb-4 font-poppins font-medium flex items-center gap-2">
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
                          <span className="flex-shrink-0 w-8 h-8 bg-[#b2833a]/10 rounded-[8px] flex items-center justify-center text-[#b2833a] font-poppins font-semibold text-[13px] group-hover:bg-[#b2833a] group-hover:text-white transition-all">
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-[#222222] font-poppins font-medium text-[13px] leading-snug mb-1 group-hover:text-[#b2833a] transition-colors line-clamp-2">
                              {post.title}
                            </p>
                            <span className="text-[#999999] font-poppins font-normal text-[11px]">
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
                  <h3 className="text-[#222222] text-[18px] mb-4 font-poppins font-medium flex items-center gap-2">
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
                        <span className="text-[#666666] font-poppins font-medium text-[13px] group-hover:text-[#b2833a] transition-colors">
                          {category.name}
                        </span>
                        <span className="flex items-center justify-center min-w-[28px] h-6 bg-white rounded-[6px] text-[#999999] font-poppins font-semibold text-[11px] group-hover:bg-[#b2833a] group-hover:text-white transition-all">
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-poppins font-semibold text-[12px] shadow-md">
                    <Tag size={12} />
                    {selectedPost.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#666666] rounded-[8px] font-poppins font-normal text-[12px] shadow-md">
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
                    <h2 className="text-[#222222] mb-3 font-poppins font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-tight">
                      {selectedPost.title}
                    </h2>
                    <div className="flex items-center gap-4 text-[#999999] font-poppins font-normal text-[14px]">
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-[#666666] font-poppins font-normal text-[16px] leading-relaxed mb-8 pb-8 border-b border-[#f0f0f0]">
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