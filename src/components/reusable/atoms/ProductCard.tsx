import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  onProductClick?: (source: 'shop' | 'wishlist') => void;
}

export default function ProductCard({
  product,
  index,
  wishlist,
  toggleWishlist,
  onProductClick,
}: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onProductClick?.('shop')}
    >
      <div className="relative bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
          {/* Wishlist */}
          <button
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`absolute top-4 right-4 flex items-center justify-center rounded-full p-2 shadow ${
              wishlist.includes(product.id)
                ? 'bg-[#b2833a] text-white'
                : 'bg-white text-gray-600 hover:bg-[#b2833a] hover:text-white'
            }`}
          >
            <Heart
              size={18}
              className={wishlist.includes(product.id) ? 'fill-current' : ''}
            />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-sm text-[#b2833a] font-medium">{product.brand}</p>
          <h3 className="font-serif text-lg text-[#222] group-hover:text-[#b2833a] transition-colors">
            {product.name}
          </h3>
          <div className="mt-2 flex justify-between text-sm text-gray-700">
            <span>${product.price}</span>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
