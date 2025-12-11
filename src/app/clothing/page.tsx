"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '@/data/products';
import ProductCard from '@/components/reusable/atoms/ProductCard';
import FilterSidebar from '@/components/modules/shop/FilterSidebar';
import { useFilters } from '@/hooks/use-filters';
import { useRouter } from 'next/navigation';
import { SlidersHorizontal } from 'lucide-react';

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
            className="inset-0 bg-white overflow-y-auto shop-open"
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#faf9f7] via-white to-[#faf9f7] py-12 lg:py-15">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-sm">
                            <button
                                onClick={() => router.push("/")}
                                className="text-gray-600 hover:text-[#b2833a] transition-all duration-300 hover:scale-105 flex items-center gap-1 font-medium"
                            >
                                Home
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <span className="text-gray-900 font-semibold">Clothing</span>
                        </div>
                        <h1 className="font-[Playfair_Display] text-4xl lg:text-5xl font-medium text-gray mb-6 leading-tight">
                            Curated Collection
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Discover our premium pieces, tailored to enhance your unique style and body shape.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm justify-center lg:justify-start text-gray-600">
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
            </section>

            {/* Main Content - No navbar padding */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] xl:grid-cols-[minmax(0,350px)_1fr] gap-8 lg:gap-12">

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
            </main>
        </motion.div>
    );
}
