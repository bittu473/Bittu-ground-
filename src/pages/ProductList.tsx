import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Filter, Search, Grid, List as ListIcon } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';

export const ProductList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');

  const filteredProducts = mockProducts.filter(p => {
    if (initialCategory && p.category !== initialCategory) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="py-4 md:py-6 px-4 md:px-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{initialCategory || 'All Products'}</h1>
        </div>
        <button className="p-2 md:hidden">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder={`Search in ${initialCategory || 'Products'}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-emerald-500 focus:border-emerald-500 block pl-10 p-3"
        />
      </div>

      {/* Filters & Sort & View Mode - Desktop layout has sidebar, mobile has buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Filters</h3>
              <button className="text-sm text-emerald-600 font-medium">Clear</button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-3">Categories</h4>
                <div className="space-y-2">
                  {['Vegetables', 'Fruits', 'Dairy', 'Grocery', 'Bakery'].map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold mb-3">Price</h4>
                <input type="range" className="w-full accent-emerald-600" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹0</span>
                  <span>₹500+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">Showing {filteredProducts.length} results</p>
            
            <div className="flex items-center gap-2">
              <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2">
                <option>Sort: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
              
              <div className="hidden md:flex items-center bg-gray-50 rounded-lg border border-gray-200 p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow text-emerald-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <ListIcon size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-bold text-gray-900">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
