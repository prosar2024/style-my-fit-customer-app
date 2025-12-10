"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Users, Heart, Sparkles, TrendingUp, Award } from "lucide-react";
// import SearchOverlay from "./SearchOverlay";
// import teamImage from "figma:asset/21c45383456fb6e2fc3f69487f67369aba92194c.png";
import LoginModal from "@/components/ui/molecules/LoginModal";
import { ImageWithFallback } from "@/components/ui/atoms/ImageWithFallback";

export default function AboutPage() {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

    const containerVariants = {

    };

    const itemVariants = {

    };

    const cardVariants = {

    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white overflow-y-auto"
        >
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f5f0] to-white"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-[#b2833a] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D38436] rounded-full blur-3xl"></div>
                </div>

                <motion.div
                    className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center py-16 lg:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-1.5 bg-[#b2833a]/10 text-[#b2833a] rounded-full mb-4 text-sm">
                            Our Story
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-[#222222] mb-4 px-4"
                        variants={itemVariants}
                    >
                        About StyleMyFit
                    </motion.h1>

                    <motion.p
                        className="text-[#666666] max-w-2xl mx-auto mb-6 leading-relaxed px-4"
                        variants={itemVariants}
                    >
                        StyleMyFit is committed to revolutionizing how people shop for clothes online by eliminating the guesswork from sizing.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 lg:gap-6 justify-center"
                        variants={itemVariants}
                    >
                        <div className="flex items-center gap-2 text-[#666666] text-sm">
                            <Sparkles className="w-4 h-4 text-[#b2833a]" />
                            <span>Personalized Fit</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666666] text-sm">
                            <TrendingUp className="w-4 h-4 text-[#b2833a]" />
                            <span>95% Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666666] text-sm">
                            <Award className="w-4 h-4 text-[#b2833a]" />
                            <span>Award-Winning</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-5 h-8 border-2 border-[#b2833a]/30 rounded-full flex items-start justify-center p-1.5">
                        <motion.div
                            className="w-1 h-1 bg-[#b2833a] rounded-full"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Mission & Vision Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover="hover"
                            variants={cardVariants}
                            className="group relative bg-gradient-to-br from-[#b2833a]/5 to-transparent rounded-3xl p-8 lg:p-12 border border-[#b2833a]/10 overflow-hidden"
                        >
                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b2833a]/5 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#b2833a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-[#222222] mb-4">Our Mission</h2>

                                <p className="text-[#666666] leading-relaxed">
                                    Our mission is to create a personalized shopping experience by matching your unique body measurements with clothing that fits perfectly, reducing returns and increasing customer satisfaction.
                                </p>

                                <motion.div
                                    className="mt-6 flex items-center gap-2 text-[#b2833a]"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Heart className="w-5 h-5" />
                                    <span className="text-sm">Customer-Centric Approach</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Vision Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover="hover"
                            variants={cardVariants}
                            className="group relative bg-gradient-to-br from-[#D38436]/5 to-transparent rounded-3xl p-8 lg:p-12 border border-[#D38436]/10 overflow-hidden"
                        >
                            {/* Decorative Element */}
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D38436]/5 rounded-full blur-2xl transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#D38436] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-[#222222] mb-4">Our Vision</h2>

                                <p className="text-[#666666] leading-relaxed">
                                    We envision a world where every online shopper can confidently purchase clothes knowing they&apos;ll fit perfectly the first time, every time.
                                </p>

                                <motion.div
                                    className="mt-6 flex items-center gap-2 text-[#D38436]"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Sparkles className="w-5 h-5" />
                                    <span className="text-sm">Future of Fashion</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#f8f5f0]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="text-center mb-16"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-2 bg-[#b2833a]/10 text-[#b2833a] rounded-full mb-4">
                                The People Behind StyleMyFit
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-[#222222] mb-6"
                            variants={itemVariants}
                        >
                            Our Team
                        </motion.h2>

                        <motion.p
                            className="text-[#666666] max-w-3xl mx-auto leading-relaxed text-lg"
                            variants={itemVariants}
                        >
                            StyleMyFit was founded by a team of fashion industry experts and technology innovators who recognized the need for better sizing solutions in online shopping.
                        </motion.p>
                    </motion.div>

                    {/* Team Image with Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
                    >
                        <div className="aspect-[16/9] relative">
                            <ImageWithFallback
                                src={"/images/about/fallback.png"}
                                alt="StyleMyFit Team"
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/60 via-transparent to-transparent"></div>

                            {/* Team Stats */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                                <div className="grid grid-cols-3 gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-center"
                                    >
                                        <div className="text-white text-3xl lg:text-4xl mb-2">15+</div>
                                        <div className="text-white/80 text-sm">Team Members</div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-center"
                                    >
                                        <div className="text-white text-3xl lg:text-4xl mb-2">10+</div>
                                        <div className="text-white/80 text-sm">Years Experience</div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-center"
                                    >
                                        <div className="text-white text-3xl lg:text-4xl mb-2">50K+</div>
                                        <div className="text-white/80 text-sm">Happy Customers</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-8 mt-16"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center p-6"
                        >
                            <div className="w-12 h-12 bg-[#b2833a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-[#b2833a]" />
                            </div>
                            <h3 className="text-[#222222] mb-2">Collaboration</h3>
                            <p className="text-[#666666] text-sm">Working together to create the best solutions</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center p-6"
                        >
                            <div className="w-12 h-12 bg-[#b2833a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-6 h-6 text-[#b2833a]" />
                            </div>
                            <h3 className="text-[#222222] mb-2">Innovation</h3>
                            <p className="text-[#666666] text-sm">Pushing boundaries in fashion technology</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center p-6"
                        >
                            <div className="w-12 h-12 bg-[#b2833a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-6 h-6 text-[#b2833a]" />
                            </div>
                            <h3 className="text-[#222222] mb-2">Passion</h3>
                            <p className="text-[#666666] text-sm">Dedicated to perfect fit for everyone</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center bg-gradient-to-br from-[#b2833a] to-[#D38436] rounded-3xl p-12 lg:p-16 text-white"
                    >
                        <h2 className="text-white mb-4">Ready to Find Your Perfect Fit?</h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who have discovered the joy of perfectly fitting clothes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {/* Navigate to shopping page */ }}
                                className="px-8 py-4 bg-white text-[#b2833a] rounded-full hover:shadow-xl transition-shadow"
                            >
                                Start Shopping
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {/* Navigate to contact page */ }}
                                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search Overlay */}
            {/* {showSearchOverlay && (
        <SearchOverlay onClose={() => setShowSearchOverlay(false)} />
      )} */}

            {/* Login Modal */}
            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} isOpen={true} />
            )}

            {/* --- REMOVE FOOTER: Now provided by RootLayout --- */}
        </motion.div>
    );
}
