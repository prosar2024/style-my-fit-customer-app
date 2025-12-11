"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/reusable/atoms/ProductCard';
import FilterSidebar from '@/components/modules/shop/FilterSidebar';
import { useFilters } from '@/hooks/use-filters';

export default function ShopPage() {
    const { filters, updateFilters, resetFilters, filteredProducts } = useFilters("");
    const [showFilters, setShowFilters] = useState(false);
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className=" inset-0 bg-white overflow-y-auto"
        >
            {/* Breadcrumb & Title Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9f7] via-white to-[#faf9f7]">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute top-10 right-20 w-64 h-64 bg-[#b2833a] rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#d38436] rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                            <motion.span
                                className="text-sm text-[#888] hover:text-[#b2833a] cursor-pointer transition-all duration-300 hover:scale-105"
                                onClick={() => router.push('/')}
                                whileHover={{ x: -2 }}
                            >
                                Home
                            </motion.span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#ccc]">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-sm text-[#222]">Clothing</span>
                        </motion.div>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <motion.h1 className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] mb-3 text-4xl lg:text-5xl text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                    Curated Collection
                                </motion.h1>
                                <motion.p className="text-base text-[#666] max-w-2xl text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    Discover our premium pieces, tailored to enhance your unique style and body shape.
                                </motion.p>
                                <div className="flex mt-6 flex-wrap gap-6 text-sm justify-center lg:justify-start text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#b2833a] rounded-full animate-pulse" />
                                        {/* <span className="font-medium">{filteredProducts.length} Available</span> */}
                                        <span className="font-medium">No products available.</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#b2833a]">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <span className="font-medium">Personalized Fit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content - No navbar padding */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

                    {/* Filters */}
                    <FilterSidebar
                        filters={filters}
                        updateFilters={updateFilters}
                        resetFilters={resetFilters}
                        showFilters={showFilters}
                        onShowFiltersToggle={() => setShowFilters(!showFilters)}
                    />

                    {/* Products */}
                    <div>
                        <div className="mb-8 flex flex-col flex-row items-center justify-between gap-4 pb-4 border-b border-gray-100">
                            <p className="text-sm text-gray-600">
                                Showing <span className="text-gray-900 font-semibold">{filteredProducts.length}</span> of {products.length} products
                            </p>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg font-medium"
                            >
                                <SlidersHorizontal size={18} />
                                <span>Filters</span>
                            </button>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={index}
                                        wishlist={[]}
                                        toggleWishlist={() => { }}
                                        onProductClick={() => router.push(`/product/${product.id}`)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-24">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
                                <button
                                    onClick={resetFilters}
                                    className="px-6 py-2.5 bg-[#b2833a] text-white rounded-xl hover:bg-[#b2833a] transition-all font-medium shadow-lg"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
