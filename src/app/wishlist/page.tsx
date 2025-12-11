"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2 } from 'lucide-react';
import { products } from '@/data/products';
import { useRouter } from 'next/navigation';
import WishlistCard from '@/components/reusable/atoms/WishlistCard';
import ConfirmationDialog from '@/components/reusable/atoms/ConfirmationDialog';
import EmptyWishlist from '@/components/modules/wishlist/EmptyWishlist';

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

export default function WishlistPage() {
    const [confirmDialog, setConfirmDialog] = useState<{
        isOpen: boolean;
        type: 'single' | 'all';
        itemId?: number;
        itemName?: string;
    }>({
        isOpen: false,
        type: 'single'
    });
    const router = useRouter()
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
        return [];
    });

    useEffect(() => {
        const handleWishlistUpdate = () => {
            const savedWishlist: any = [];
            if (savedWishlist) {
                try {
                    const wishlistIds: number[] = JSON.parse(savedWishlist);
                    const items = wishlistIds.map(id => {
                        const product = products.find(p => p.id === id);
                        return product ? { ...product, inStock: true } : null;
                    }).filter((item): item is WishlistItem => item !== null);
                    setWishlistItems(items);
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
    };

    const clearAllWishlist = () => {
        setWishlistItems([]);
    };

    const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
    const inStockCount = wishlistItems.filter(item => item.inStock).length;

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
                            <span className="text-sm text-[#222]">Wishlist</span>
                        </motion.div>
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                            <div>
                                <motion.h1 className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] mb-3 text-4xl lg:text-5xl text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                    My Wishlist
                                </motion.h1>
                                <motion.p className="text-base text-[#666] max-w-2xl text-center lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                    {wishlistItems.length > 0
                                        ? `You have ${wishlistItems.length} ${wishlistItems.length === 1 ? 'item' : 'items'} saved in your wishlist`
                                        : 'Save your favorite pieces and shop them later'
                                    }
                                </motion.p>
                            </div>
                            {wishlistItems.length > 0 && (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100 flex items-center gap-6 mx-auto lg:mx-0">
                                    <div className="flex items-center gap-2">
                                        <p className="text-[10px] text-[#888] font-poppins font-normal uppercase tracking-wider">Total Value</p>
                                        <p className="font-['Playfair_Display:600',serif] text-[#b2833a]">${totalValue}</p>
                                    </div>
                                    <div className="w-px h-6 bg-gray-200" />
                                    <div className="flex items-center gap-2">
                                        <p className="text-[10px] text-[#888] font-poppins font-normal uppercase tracking-wider">In Stock</p>
                                        <p className="font-['Playfair_Display:600',serif] text-[#222]">{inStockCount}/{wishlistItems.length}</p>
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
                    <EmptyWishlist onShopClick={() => { router.push('/clothing') }} />
                ) : (
                    <>
                        {/* Action Bar */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                            <p className="text-sm text-[#666] font-poppins font-normal">
                                Showing <span className="text-[#222]">{wishlistItems.length}</span> saved {wishlistItems.length === 1 ? 'item' : 'items'}
                            </p>
                            <div className="flex items-center gap-3">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setConfirmDialog({ isOpen: true, type: 'all' })} className="px-4 py-2 text-sm text-[#666] hover:text-red-500 font-poppins font-normal transition-colors flex items-center gap-2">
                                    <Trash2 size={16} /> Clear All
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
                                    onProductClick={() => router.push("clothing")}
                                />
                            ))}
                        </div>

                        {/* Continue Shopping CTA */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-16 text-center">
                            <p className="text-[#666] mb-4 font-poppins">Looking for more?</p>
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.push('/clothing')} className="px-8 py-3 border-2 border-[#b2833a] text-[#b2833a] rounded-full font-poppins font-medium hover:bg-[#b2833a] hover:text-white transition-all">
                                Continue Shopping
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </div>

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
                        title={confirmDialog.type === 'all' ? 'Delete All Items?' : 'Remove from Wishlist?'}
                        message={confirmDialog.type === 'all' ? `Are you sure you want to remove all ${wishlistItems.length} items from your wishlist? This action cannot be undone.` : `Are you sure you want to remove "${confirmDialog.itemName}" from your wishlist?`}
                        type={confirmDialog.type}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}
