import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { Product } from '../../types';
import { useAppContext } from '../../context/AppContext';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart, toggleWishlist, wishlist } = useAppContext();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow flex flex-col h-full">
        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Heart size={18} className={clsx(isWishlisted && "fill-red-500 text-red-500")} />
        </button>
      
      <Link to={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="w-full aspect-square rounded-xl bg-gray-50 flex items-center justify-center p-4 mb-3 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">{product.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{product.weight} • {product.shopName}</p>
          
          <div className="mt-auto pt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
              )}
            </div>
            
            <button 
              onClick={(e) => { e.preventDefault(); addToCart(product); }}
              className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-emerald-200 transition-colors"
            >
              ADD
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
