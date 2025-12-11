"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Ruler, Cpu, CheckCircle, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ImageWithFallback } from '@/components/reusable/atoms/ImageWithFallback';

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState<'measurement' | 'database'>('measurement');
  const router = useRouter();

  const steps = [
    {
      number: 1,
      icon: Ruler,
      title: 'Measurement Analysis',
      description: 'We analyze key measurements including chest, waist, hips, and height to determine your body shape.'
    },
    {
      number: 2,
      icon: Cpu,
      title: 'Algorithmic Matching',
      description: 'Our proprietary algorithm processes your measurements and compares them against thousands of clothing items in our database.'
    },
    {
      number: 3,
      icon: CheckCircle,
      title: 'Perfect Recommendations',
      description: 'Receive personalized clothing recommendations that complement your unique physique. No more guessing or returns.'
    }
  ];

  const featuresColumn1 = [
    'Body shape analysis based on measurements',
    'Personalized clothing recommendations',
    'Size matching across different brands'
  ];

  const featuresColumn2 = [
    'Style suggestions based on body type',
    'Virtual try-on technology'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="inset-0 z-[9998] bg-[#fafaf8] overflow-y-auto"
    >
      {/* Main Content */}
      <div className="min-h-screen">
        {/* Hero Introduction Section */}
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
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
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
                    Our Solution
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-[#d1d5db] text-[16px] sm:text-[18px] leading-relaxed font-['Poppins:Regular',sans-serif]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  StyleMyFit provides innovative solutions to the common problems in online clothing shopping. Our advanced technology ensures you find the perfect fit every time.
                </motion.p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-10 lg:mt-0"
              >
                <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(178,131,58,0.3)]">
                  <ImageWithFallback
                    src={"/images/solutions/hero-image.png"}
                    alt="Fashion Technology"
                    className="w-full h-[300px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/60 via-transparent to-transparent bg-[rgba(216,124,124,0)]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-12 sm:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                fill="#fafaf8"
              />
            </svg>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[#222222] mb-4 font-poppins font-semibold text-[28px] sm:text-[32px]">
              How It Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b2833a] to-[#D38436] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(178,131,58,0.15)] transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#b2833a] to-[#D38436] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-poppins font-bold text-[20px]">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#b2833a]/10 to-[#D38436]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-[#b2833a]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-[#222222] text-[20px] sm:text-[22px] mb-3 font-poppins font-semibold text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] font-poppins text-[15px] leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow - Hidden on mobile, shown on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#b2833a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-[#222222] mb-4 font-poppins font-semibold text-[28px] sm:text-[32px]">
                Key Features
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#b2833a] to-[#D38436] mx-auto rounded-full" />
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {/* Column 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5"
                >
                  {featuresColumn1.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#b2833a] to-[#D38436] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#222222] font-poppins font-medium text-[16px] leading-relaxed pt-1">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Column 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-5"
                >
                  {featuresColumn2.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#b2833a] to-[#D38436] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <p className="text-[#222222] font-poppins font-medium text-[16px] leading-relaxed pt-1">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Technology Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[#222222] mb-4 font-poppins font-semibold text-[28px] sm:text-[32px]">
              The Technology
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b2833a] to-[#D38436] mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-[#e5e5e5]">
              <button
                onClick={() => setActiveTab('measurement')}
                className={`relative px-6 py-4 font-poppins font-semibold text-[16px] transition-all ${activeTab === 'measurement'
                  ? 'text-[#b2833a]'
                  : 'text-[#666666] hover:text-[#222222]'
                  }`}
              >
                Measurement Analysis
                {activeTab === 'measurement' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b2833a] to-[#D38436] rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab('database')}
                className={`relative px-6 py-4 font-poppins font-semibold text-[16px] transition-all ${activeTab === 'database'
                  ? 'text-[#b2833a]'
                  : 'text-[#666666] hover:text-[#222222]'
                  }`}
              >
                Clothing Database
                {activeTab === 'database' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#b2833a] to-[#D38436] rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'measurement' && (
                <motion.div
                  key="measurement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#b2833a]/10 to-[#D38436]/10 rounded-[16px] flex items-center justify-center">
                      <Ruler className="w-8 h-8 text-[#b2833a]" />
                    </div>
                    <div>
                      <h3 className="text-[#222222] text-[22px] mb-4 font-poppins font-semibold">
                        Measurement Analysis
                      </h3>
                      <p className="text-[#666666] font-poppins text-[16px] leading-relaxed">
                        We analyze key measurements including chest, waist, hips, and height to determine your body shape category. Our advanced algorithms use precise anthropometric data to ensure accurate body shape classification, providing you with the most reliable foundation for perfect fit recommendations.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'database' && (
                <motion.div
                  key="database"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#b2833a]/10 to-[#D38436]/10 rounded-[16px] flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-[#b2833a]" />
                    </div>
                    <div>
                      <h3 className="text-[#222222] text-[22px] mb-4 font-poppins font-semibold">
                        Clothing Database
                      </h3>
                      <p className="text-[#666666] font-poppins text-[16px] leading-relaxed">
                        Our extensive database contains detailed measurements for thousands of clothing items from popular brands, allowing for precise matching with your body shape. We continuously update our database with new styles and brands to ensure you always have access to the latest fashion that fits perfectly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-[#b2833a] to-[#D38436] py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-6 font-poppins font-semibold text-[28px] sm:text-[32px]">
                Ready to Find Your Perfect Fit?
              </h2>
              <p className="text-white/90 font-poppins text-[16px] sm:text-[18px] leading-relaxed mb-8">
                Experience the future of online shopping with StyleMyFit&apos;s personalized recommendations.
              </p>
              <motion.button
                onClick={() => router.push('/clothing')}
                className="px-8 py-4 bg-white text-[#b2833a] rounded-full font-poppins font-semibold text-[16px] shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Shopping Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}