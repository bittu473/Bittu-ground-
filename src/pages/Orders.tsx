import React, { useState } from 'react';
import { Eye, Download } from 'lucide-react';
import { mockOrders } from '../data/mockData';

export const Orders = () => {
  const [activeTab, setActiveTab] = useState('All (1245)');
  
  const tabs = ['All (1245)', 'Pending (120)', 'Confirmed (180)', 'Processing (320)', 'Delivered (580)', 'Cancelled (45)'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-100 text-emerald-700';
      case 'Processing': return 'bg-amber-100 text-amber-700';
      case 'Pending': return 'bg-blue-100 text-blue-700';
      case 'Confirmed': return 'bg-emerald-100 text-emerald-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="py-6 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition w-fit">
          <Download size={16} /> Export
        </button>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide gap-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Shop</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockOrders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-gray-600">Bittu Kumar</td>
                <td className="px-6 py-4 text-gray-600">{order.shopName}</td>
                <td className="px-6 py-4 font-medium text-gray-900">₹{order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1.5 text-gray-400 hover:text-emerald-600 transition rounded-lg hover:bg-emerald-50">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile List View */}
      <div className="md:hidden space-y-4">
        {mockOrders.map(order => (
          <div key={order.id} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-bold text-gray-500">{order.id}</span>
                <h3 className="font-bold text-gray-900 mt-1">{order.shopName}</h3>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            
            <p className="text-xs text-gray-500 mb-3">{order.date}</p>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="font-bold text-gray-900">₹{order.total.toFixed(2)}</span>
              <button className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                <Eye size={14} /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
