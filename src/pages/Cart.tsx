import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, Store } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useAppContext();
  const navigate = useNavigate();

  // Group cart items by shop
  const groupedCart = cart.reduce((acc, item) => {
    const shopId = item.product.shopId;
    if (!acc[shopId]) {
      acc[shopId] = {
        shopName: item.product.shopName,
        items: []
      };
    }
    acc[shopId].items.push(item);
    return acc;
  }, {} as Record<string, { shopName: string, items: typeof cart }>);

  const discount = Math.min(16, cartTotal * 0.1); // Fake 10% max 16
  const deliveryCharge = cartTotal > 0 ? 25 : 0;
  const tax = cartTotal * 0.05;
  const finalTotal = cartTotal - discount + deliveryCharge + tax;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🛒</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6 text-center">Looks like you haven't added any fresh items to your cart yet.</p>
        <Link to="/" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 md:px-0">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedCart).map(([shopId, { shopName, items }]) => (
          <div key={shopId} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-emerald-50/50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
              <Store size={16} className="text-emerald-600" />
              <span className="font-bold text-gray-800 text-sm">{shopName}</span>
            </div>
            
            <div className="divide-y divide-gray-50">
              {items.map(item => (
                <div key={item.product.id} className="p-4 flex gap-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex-shrink-0 border border-gray-100">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{item.product.weight} • ₹{item.product.price}/unit</p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-gray-900">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                      {item.product.originalPrice > item.product.price && (
                        <span className="text-xs text-gray-400 line-through">₹{(item.product.originalPrice * item.quantity).toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                    <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bill Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-bold text-gray-900 mb-4">Bill Details</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-emerald-600">
              <span>Discount</span>
              <span className="font-medium">-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Charge</span>
              <span className="font-medium text-gray-900">₹{deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (5%)</span>
              <span className="font-medium text-gray-900">₹{tax.toFixed(2)}</span>
            </div>
            
            <div className="pt-3 mt-3 border-t border-dashed border-gray-200 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Bar */}
      <div className="fixed md:sticky bottom-16 md:bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 md:pb-6 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-gray-500">Total Payable</p>
            <p className="text-lg font-bold text-gray-900">₹{finalTotal.toFixed(2)}</p>
          </div>
          <Link 
            to="/checkout"
            className="flex-1 bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
