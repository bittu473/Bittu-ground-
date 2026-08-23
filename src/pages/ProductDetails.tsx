import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { mockProducts } from '../data/mockData';
import clsx from 'clsx';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist, cart, updateQuantity } = useAppContext();
  
  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const isWishlisted = wishlist.includes(product.id);
  
  const cartItem = cart.find(item => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="max-w-md mx-auto md:max-w-4xl pb-24">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-gray-900 truncate flex-1 text-center px-4">Product Details</h1>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
             <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 p-4 md:p-8">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center relative aspect-square mb-6 md:mb-0">
          <button 
            onClick={() => toggleWishlist(product.id)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm hover:text-red-500 transition-colors"
          >
            <Heart size={20} className={clsx(isWishlisted && "fill-red-500 text-red-500")} />
          </button>
          <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-500 mt-1">{product.shopName}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center bg-emerald-50 px-2 py-1 rounded text-emerald-700 text-sm font-bold">
                <Star size={14} className="fill-current mr-1" />
                {product.rating}
              </div>
              <span className="text-sm text-gray-500 underline">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-400 line-through mb-1">₹{product.originalPrice}</span>
            )}
            {product.discountPercentage > 0 && (
              <span className="text-xs font-bold text-red-500 mb-2">{product.discountPercentage}% OFF</span>
            )}
          </div>
          <p className="text-sm text-gray-600 font-medium">{product.weight} • ₹{product.price}/unit</p>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-bold text-gray-900 mb-2">Select Quantity</h3>
            {quantity > 0 ? (
              <div className="inline-flex items-center bg-gray-50 rounded-xl border border-gray-200 p-1">
                <button 
                  onClick={() => updateQuantity(product.id, -1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => updateQuantity(product.id, 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition"
                >
                  <Plus size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => addToCart(product)}
                className="px-6 py-2.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl border border-emerald-200 hover:bg-emerald-100 transition"
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-bold text-gray-900 mb-2">About this item</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description || `Fresh and high quality ${product.name.toLowerCase()} sourced locally. Packed with care to maintain freshness.`}
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed md:sticky bottom-16 md:bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:pb-6 z-40">
        <div className="max-w-4xl mx-auto flex gap-4">
          <button 
            onClick={() => {
              if (quantity === 0) addToCart(product);
              navigate('/cart');
            }}
            className="flex-1 bg-white border-2 border-emerald-600 text-emerald-700 py-3.5 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-50 transition"
          >
            Go to Cart
          </button>
          <button 
            onClick={() => {
              if (quantity === 0) addToCart(product);
              navigate('/checkout');
            }}
            className="flex-1 bg-emerald-600 text-white py-3.5 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
