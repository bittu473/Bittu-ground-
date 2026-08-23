import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Heart, Wallet, Bell, LogOut, ChevronRight, Settings } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Profile = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  const menuItems = [
    { icon: MapPin, title: 'Saved Addresses', subtitle: 'Manage your delivery locations', link: '/addresses' },
    { icon: Heart, title: 'Wishlist', subtitle: 'Your saved items', link: '/wishlist' },
    { icon: Wallet, title: 'Wallet & Cards', subtitle: 'Manage payment methods', link: '/wallet' },
    { icon: Bell, title: 'Notifications', subtitle: 'View alerts and offers', link: '/notifications' },
    { icon: Settings, title: 'Settings', subtitle: 'App preferences and dark mode', link: '/settings' },
  ];

  return (
    <div className="py-4 md:py-8 px-4 md:px-0 max-w-3xl mx-auto pb-24">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 px-2">My Profile</h1>
      
      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-0"></div>
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl relative z-10">
          {user?.name.charAt(0) || 'U'}
        </div>
        <div className="relative z-10 flex-1">
          <h2 className="text-lg font-bold text-gray-900">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.phone}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <button className="relative z-10 text-sm font-bold text-emerald-600 px-3 py-1.5 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
          Edit
        </button>
      </div>

      {/* Menu List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        {menuItems.map((item, idx, arr) => (
          <div 
            key={item.title}
            className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition ${idx !== arr.length - 1 ? 'border-b border-gray-50' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600">
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        ))}
      </div>

      <button className="w-full bg-white border border-red-100 text-red-600 rounded-2xl p-4 flex items-center justify-center gap-2 font-bold shadow-sm hover:bg-red-50 transition">
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
};
