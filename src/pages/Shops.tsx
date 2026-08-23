import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MapPin } from 'lucide-react';
import { mockShops } from '../data/mockData';
import { ShopCard } from '../components/shop/ShopCard';

export const Shops = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const filteredShops = mockShops.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-4 md:py-6 px-4 md:px-0 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Nearby Shops</h1>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search shops by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block pl-10 p-3"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
           <MapPin size={18} className="text-emerald-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredShops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>

      {filteredShops.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
             <MapPin size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No shops found</h3>
          <p className="text-gray-500 mt-1">We couldn't find any shops matching your search.</p>
        </div>
      )}
    </div>
  );
};
