import React from 'react';
import { Star } from 'lucide-react';
import { Shop } from '../../types';
import { Link } from 'react-router-dom';

export const ShopCard = ({ shop }: { shop: Shop }) => {
  return (
    <Link to={`/shops/${shop.id}`} className="block h-full">
      <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
        <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
          {shop.rating} <Star size={10} className="fill-yellow-800" />
        </span>
        
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-100 overflow-hidden">
          <img src={shop.logo} alt={shop.name} className="w-full h-full object-cover" />
        </div>
        
        <h3 className="font-bold text-slate-900 line-clamp-1">{shop.name}</h3>
        <p className="text-xs text-slate-500 mt-1 mb-3">
          {shop.distance} • {shop.deliveryCharge === 0 ? 'Free Delivery' : `₹${shop.deliveryCharge} Delivery`}
        </p>
        
        <div className="mt-auto">
          <button className="w-full py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors">
            Visit Shop
          </button>
        </div>
      </div>
    </Link>
  );
};
