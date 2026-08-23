import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Checkout = () => {
  const { user, cartTotal } = useAppContext();
  const navigate = useNavigate();
  const [deliveryOption, setDeliveryOption] = useState('standard');

  const discount = Math.min(16, cartTotal * 0.1);
  const deliveryCharge = cartTotal > 0 ? (deliveryOption === 'express' ? 45 : 25) : 0;
  const tax = cartTotal * 0.05;
  const finalTotal = cartTotal - discount + deliveryCharge + tax;

  const defaultAddress = user?.addresses.find(a => a.isDefault) || user?.addresses[0];

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 md:px-0">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="space-y-6">
        {/* Delivery Address */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1">Deliver to</h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-4 flex gap-3 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
            <div className="mt-0.5">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <MapPin size={16} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900">{defaultAddress?.type}</h3>
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">Default</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><ChevronRight size={18} /></button>
              </div>
              <p className="text-sm font-medium text-gray-800">{defaultAddress?.name}</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {defaultAddress?.street}, {defaultAddress?.area}<br/>
                {defaultAddress?.city} - {defaultAddress?.pincode}
              </p>
              <p className="text-xs text-gray-600 mt-1">{user?.phone}</p>
              
              <button className="mt-3 text-sm font-bold text-emerald-600">Change</button>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1">Delivery Options</h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              { id: 'standard', title: 'Standard Delivery', desc: '30-40 min', price: 25 },
              { id: 'express', title: 'Express Delivery', desc: '20-30 min', price: 45 },
              { id: 'scheduled', title: 'Scheduled Delivery', desc: 'Choose Date & Time', price: 25 }
            ].map((option, idx, arr) => (
              <div 
                key={option.id}
                onClick={() => setDeliveryOption(option.id)}
                className={`p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 ${idx !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center gap-3">
                  {deliveryOption === option.id ? (
                    <CheckCircle2 size={20} className="text-emerald-600 fill-emerald-50" />
                  ) : (
                    <Circle size={20} className="text-gray-300" />
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{option.title}</h4>
                    <p className="text-xs text-gray-500">{option.desc}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${option.price === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
                  {option.price === 0 ? 'Free' : `₹${option.price}`}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Payment Bar */}
      <div className="fixed md:sticky bottom-16 md:bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:pb-6 z-40 mt-8">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={() => navigate('/payment')}
            className="w-full bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};
