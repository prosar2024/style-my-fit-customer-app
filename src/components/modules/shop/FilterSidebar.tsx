// src/components/Shop/FilterSidebar.tsx
import { motion, AnimatePresence } from 'motion/react';
import { X, SlidersHorizontal } from 'lucide-react';
import { Slider } from '@/components/reusable/atoms/slider';
import FilterBlock from '@/components/modules/shop/FilterBlock';
import { useFilters } from '@/hooks/use-filters';

interface FilterSidebarProps {
    filters: ReturnType<typeof useFilters>['filters'];
    updateFilters: ReturnType<typeof useFilters>['updateFilters'];
    resetFilters: ReturnType<typeof useFilters>['resetFilters'];
    showFilters: boolean;
    onShowFiltersToggle: () => void;
}

export default function FilterSidebar({
    filters,
    updateFilters,
    resetFilters,
    showFilters,
    onShowFiltersToggle,
}: FilterSidebarProps) {
    const toggleBodyShape = (shape: string) => {
        updateFilters({
            selectedBodyShapes: filters.selectedBodyShapes.includes(shape)
                ? filters.selectedBodyShapes.filter(s => s !== shape)
                : [...filters.selectedBodyShapes, shape]
        });
    };

    const toggleCategory = (category: string) => {
        updateFilters({
            selectedCategories: filters.selectedCategories.includes(category)
                ? filters.selectedCategories.filter(c => c !== category)
                : [...filters.selectedCategories, category]
        });
    };

    const toggleBrand = (brand: string) => {
        updateFilters({
            selectedBrands: filters.selectedBrands.includes(brand)
                ? filters.selectedBrands.filter(b => b !== brand)
                : [...filters.selectedBrands, brand]
        });
    };

    return (
        <>
            {/* Desktop Filters */}
            <div className="hidden lg:block">
                <div className="sticky top-32">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-semibold text-gray-900 text-lg">Filters</h2>
                            <button
                                onClick={resetFilters}
                                className="text-sm text-[#b2833a] hover:underline font-medium"
                            >
                                Clear all
                            </button>
                        </div>

                        {/* Sort By */}
                        <div className="space-y-4 mb-8">
                            <h3 className="font-medium text-gray-900 text-sm">Sort By</h3>
                            <select
                                value={filters.sortBy}
                                onChange={(e) => updateFilters({ sortBy: e.target.value as any })}
                                className="w-full px-0 py-2 border-0 border-b border-gray-200 bg-transparent focus:border-amber-500 focus:ring-0 outline-none transition-all cursor-pointer text-sm text-gray-600 appearance-none bg-no-repeat bg-right pr-8"
                            >
                                <option value="name-asc">Name A-Z</option>
                                <option value="name-desc">Name Z-A</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="space-y-4 mb-8">
                            <h3 className="font-medium text-gray-900 text-sm">Price Range</h3>
                            <div className="space-y-4 pt-2">
                                <Slider
                                    value={[...filters.priceRange]}
                                    onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                                    min={0}
                                    max={1000}
                                    step={10}
                                    className="w-full"
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-xs text-gray-500 mb-1 block">Min</label>
                                        <div className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 font-medium">
                                            ${filters.priceRange[0]}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 mb-1 block">Max</label>
                                        <div className="border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-900 font-medium">
                                            ${filters.priceRange[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Filter Blocks */}
                        <FilterBlock
                            title="Body Shape"
                            options={['Hourglass', 'Pear', 'Apple', 'Rectangle', 'Inverted Triangle']}
                            selected={filters.selectedBodyShapes}
                            onToggle={toggleBodyShape}
                            delay={0.1}
                        />
                        <FilterBlock
                            title="Category"
                            options={['Top wear', 'Full-length Dress', 'Coat/Jacket', 'Skirts', 'Knitwear', 'Trousers']}
                            selected={filters.selectedCategories}
                            onToggle={toggleCategory}
                            delay={0.3}
                        />
                        <FilterBlock
                            title="Brand"
                            options={['DRESSES', 'TOPS', 'OUTERWEAR', 'TROUSERS', 'SHIRTS']}
                            selected={filters.selectedBrands}
                            onToggle={toggleBrand}
                            delay={0.4}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
                {showFilters && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/50 z-[99]"
                            onClick={onShowFiltersToggle}
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', bounce: 0 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-[min(280px,90vw)] bg-white z-[100] p-6 overflow-y-auto shadow-2xl"
                        >
                            <div className="flex items-center justify-between mt-[65px] mb-6 pb-4 border-b">
                                <h2 className="font-semibold text-gray-900 text-lg">Filters</h2>
                                <button onClick={onShowFiltersToggle} className="p-1 hover:bg-gray-100 rounded-lg">
                                    <X size={20} className="text-gray-600" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Same filter content as desktop */}
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-900 text-sm">Sort By</h3>
                                    <select
                                        value={filters.sortBy}
                                        onChange={(e) => updateFilters({ sortBy: e.target.value as any })}
                                        className="w-full px-0 py-2 border-0 border-b border-gray-200 bg-transparent focus:border-amber-500 text-sm text-gray-600"
                                    >
                                        <option value="name-asc">Name A-Z</option>
                                        <option value="name-desc">Name Z-A</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-900 text-sm">Price Range</h3>
                                    <Slider
                                        value={[...filters.priceRange]}
                                        onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
                                        min={0}
                                        max={1000}
                                        step={10}
                                    />
                                    {/* Price inputs... */}
                                </div>

                                <FilterBlock
                                    title="Body Shape"
                                    options={['Hourglass', 'Pear', 'Apple', 'Rectangle', 'Inverted Triangle']}
                                    selected={filters.selectedBodyShapes}
                                    onToggle={toggleBodyShape}
                                />
                                <FilterBlock
                                    title="Category"
                                    options={['Top wear', 'Full-length Dress', 'Coat/Jacket', 'Skirts', 'Knitwear', 'Trousers']}
                                    selected={filters.selectedCategories}
                                    onToggle={toggleCategory}
                                />
                                <FilterBlock
                                    title="Brand"
                                    options={['DRESSES', 'TOPS', 'OUTERWEAR', 'TROUSERS', 'SHIRTS']}
                                    selected={filters.selectedBrands}
                                    onToggle={toggleBrand}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>            
        </>
    );
}
