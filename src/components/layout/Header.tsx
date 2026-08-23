import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Bell, Heart, ShoppingBag, Globe, Mic } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const Header = () => {
  const { cartItemCount, location } = useAppContext();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      {/* Top utility bar - Desktop only */}
      <div className="hidden md:flex justify-between items-center px-4 md:px-8 lg:px-12 py-3">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
            <span className="text-xl font-bold tracking-tight text-emerald-700">FreshLocal</span>
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 ml-4">
            <MapPin size={16} className="text-emerald-600" />
            <span className="truncate max-w-[200px]">{location}</span>
            <button className="font-semibold text-emerald-600 hover:text-emerald-700 ml-1">Change</button>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products, shops..." 
              className="w-full bg-gray-100 border-none rounded-xl py-2 px-4 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <Search size={18} />
            </div>
            <button className="absolute right-3 top-2.5 text-gray-400 hover:text-emerald-600 transition">
              <Mic size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-emerald-600">
            <Globe size={18} className="mr-1" /> EN
          </button>
          
          <div className="flex items-center gap-4 text-gray-500">
            <Link to="/notifications" className="hover:text-emerald-600 transition relative">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </Link>
            <Link to="/wishlist" className="hover:text-emerald-600 transition relative">
              <Heart size={22} />
            </Link>
            <Link to="/cart" className="hover:text-emerald-600 transition relative">
              <ShoppingBag size={22} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/profile" className="flex items-center gap-3 hover:text-emerald-600 transition ml-2 border-l border-gray-200 pl-4">
              <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
                B
              </div>
              <div className="hidden lg:block text-left leading-tight">
                <p className="text-xs text-slate-500">Hello,</p>
                <p className="text-sm font-bold text-slate-900">Bittu K.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex flex-col px-4 py-3 gap-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">F</div>
             <span className="text-lg font-bold text-emerald-700 tracking-tight">FreshLocal</span>
          </Link>
          
          <div className="flex items-center gap-4 text-gray-600">
            <button className="flex items-center text-xs font-medium border border-gray-200 rounded px-1.5 py-0.5">
              <Globe size={12} className="mr-1" /> EN
            </button>
            <Link to="/notifications" className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
            <Link to="/cart" className="relative text-gray-800">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-600">
          <MapPin size={14} className="mr-1 text-emerald-600 flex-shrink-0" />
          <span className="truncate">{location}</span>
          <span className="text-emerald-600 font-medium ml-2 flex-shrink-0">Change</span>
        </div>

        <div className="relative flex items-center w-full h-10 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-emerald-500 transition overflow-hidden">
          <div className="pl-3 text-gray-400">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search products, shops..." 
            className="w-full h-full px-2 bg-transparent outline-none text-sm"
          />
          <button className="pr-3 text-gray-400">
            <Mic size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
