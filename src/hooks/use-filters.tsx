import { useState } from 'react';
import { products } from '@/data/products';

export function useFilters(filterByBodyShape?: string | null) {
    type SortBy = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

    const [filters, setFilters] = useState<{
        sortBy: SortBy;
        priceRange: readonly [number, number];
        selectedBodyShapes: string[];
        selectedCategories: string[];
        selectedBrands: string[];
    }>({
        sortBy: 'name-asc',
        priceRange: [0, 1000],
        selectedBodyShapes: filterByBodyShape ? [filterByBodyShape] : [],
        selectedCategories: [],
        selectedBrands: [],
    });

    const updateFilters = (newFilters: Partial<typeof filters>) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    const resetFilters = () => {
        setFilters({
            sortBy: 'name-asc',
            priceRange: [0, 1000],
            selectedBodyShapes: [],
            selectedCategories: [],
            selectedBrands: [],
        });
    };

    const filteredProducts = products
        .filter(p => {
            const bodyShapeMatch = filters.selectedBodyShapes.length === 0 ||
                p.bodyShape.some(shape => filters.selectedBodyShapes.includes(shape));
            const categoryMatch = filters.selectedCategories.length === 0 ||
                filters.selectedCategories.includes(p.category);
            const brandMatch = filters.selectedBrands.length === 0 ||
                filters.selectedBrands.includes(p.brand);
            const priceMatch = p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
            return bodyShapeMatch && categoryMatch && brandMatch && priceMatch;
        })
        .sort((a, b) => {
            switch (filters.sortBy) {
                case 'name-asc': return a.name.localeCompare(b.name);
                case 'name-desc': return b.name.localeCompare(a.name);
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                default: return 0;
            }
        });

    return { filters, updateFilters, resetFilters, filteredProducts };
}
