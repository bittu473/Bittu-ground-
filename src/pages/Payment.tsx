import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Payment = () => {
  const { cartTotal } = useAppContext();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string | null>('upi');

  const finalTotal = cartTotal + 25 + (cartTotal * 0.05) - 16; // Using simplified total for demo

  const handlePay = () => {
    // Fake processing
    alert('Payment successful! Order placed.');
    navigate('/orders');
  };

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 md:px-0 pb-24">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Payment</h1>
      </div>

      <div className="bg-emerald-50 rounded-2xl p-4 flex justify-between items-center mb-6 border border-emerald-100">
        <span className="text-gray-700 font-medium">Total Payable</span>
        <span className="text-xl font-bold text-emerald-700">₹{finalTotal.toFixed(2)}</span>
      </div>

      <div className="space-y-4">
        {/* UPI Methods */}
        <div>
          <h2 className="text-sm font-bold text-gray-900 mb-3 px-1">UPI</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-4 mb-4 overflow-x-auto pb-2 scrollbar-hide">
              {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI'].map(app => (
                <div key={app} className="flex flex-col items-center gap-2 min-w-[72px]">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50 shadow-sm cursor-pointer hover:border-emerald-500 transition">
                    <span className="text-xl">💳</span>
                  </div>
                  <span className="text-[10px] font-medium text-gray-600 text-center">{app}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'upi' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}>
                  {paymentMethod === 'upi' && <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition">Other UPI ID</span>
              </label>
            </div>
          </div>
        </div>

        {/* Other Methods */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {[
            { id: 'card', title: 'Card', desc: 'Debit/Credit Card', icon: '💳' },
            { id: 'netbanking', title: 'Net Banking', desc: 'All major banks', icon: '🏦' },
            { id: 'wallet', title: 'Wallet', desc: 'Pay using wallet', icon: '👛' },
            { id: 'cod', title: 'Cash on Delivery', desc: 'Pay at your doorstep', icon: '💵' }
          ].map((method, idx, arr) => (
            <label 
              key={method.id}
              className={`p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 ${idx !== arr.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  name="payment" 
                  value={method.id} 
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500" 
                />
                <span className="text-xl">{method.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{method.title}</h4>
                  <p className="text-xs text-gray-500">{method.desc}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </label>
          ))}
        </div>
      </div>

      <div className="fixed md:sticky bottom-16 md:bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:pb-6 z-40 mt-8">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={handlePay}
            disabled={!paymentMethod}
            className="w-full bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Pay ₹{finalTotal.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};
