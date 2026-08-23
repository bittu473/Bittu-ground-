import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Plus } from 'lucide-react';
import { mockCategories, mockProducts, mockShops } from '../data/mockData';
import { ProductCard } from '../components/product/ProductCard';
import { ShopCard } from '../components/shop/ShopCard';
import { useAppContext } from '../context/AppContext';

export const Home = () => {
  const { addToCart } = useAppContext();
  
  // Fake Flash Sale Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 59, seconds: 15 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { seconds = 59; minutes--; }
        else if (hours > 0) { seconds = 59; minutes = 59; hours--; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashSaleProduct = mockProducts[0]; // Just picking one for demo

  return (
    <div className="py-4 space-y-6 md:space-y-8">
      {/* Hero Banner */}
      <div className="px-4 md:px-0">
        <div className="h-40 md:h-64 w-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 text-white relative overflow-hidden flex justify-between items-center">
          <div className="relative z-10 w-2/3 md:w-1/2">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Seasonal Offer</span>
            <h1 className="text-2xl md:text-4xl font-extrabold mt-3 leading-tight text-white">
              Fresh Organic Veggies<br/><span className="text-yellow-300">Up to 30% Off</span>
            </h1>
            <button className="mt-4 md:mt-6 bg-white text-emerald-700 px-6 py-2.5 rounded-xl font-bold text-sm md:text-base shadow-lg hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="w-48 h-48 md:w-96 md:h-96 bg-white/10 rounded-full absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 blur-3xl"></div>
          <div className="w-32 h-32 md:w-64 md:h-64 bg-yellow-400/20 rounded-full absolute right-1/4 -top-10 md:-top-20 blur-2xl"></div>
        </div>
      </div>

      {/* Feature Badges - Desktop */}
      <div className="hidden md:grid grid-cols-4 gap-4 px-0">
        {[
          { title: 'Free Delivery', desc: 'On orders above ₹199', icon: '🚚' },
          { title: 'Best Prices', desc: 'Save more with deals', icon: '🏷️' },
          { title: 'Fresh & Natural', desc: '100% quality products', icon: '🌿' },
          { title: 'Easy Returns', desc: 'Hassle free returns', icon: '🔄' }
        ].map(feature => (
          <div key={feature.title} className="bg-emerald-50/50 rounded-2xl p-4 flex items-center gap-3 border border-emerald-100">
            <div className="text-2xl">{feature.icon}</div>
            <div>
              <h4 className="text-sm font-bold text-gray-800">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-0">
        
        <div className="flex-1 space-y-8">
          {/* Categories */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Categories</h2>
              <Link to="/categories" className="text-emerald-600 text-sm font-medium flex items-center hover:underline">
                See All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
              {mockCategories.map(cat => (
                <Link key={cat.id} to={`/products?category=${cat.name}`} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-2xl group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all">
                    {/* Placeholder for real icons - using emoji for demo */}
                    <span className="text-2xl">
                      {cat.name === 'Vegetables' ? '🥦' : 
                       cat.name === 'Fruits' ? '🍎' : 
                       cat.name === 'Grocery' ? '🛒' : 
                       cat.name === 'Dairy' ? '🥛' : 
                       cat.name === 'Bakery' ? '🥖' : 
                       cat.name === 'Organic' ? '🌱' : 
                       cat.name === 'Household' ? '🧹' : '☕'}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-semibold text-slate-600 text-center">{cat.name}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Products */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Popular Products</h2>
              <Link to="/products" className="text-emerald-600 text-sm font-medium flex items-center hover:underline">
                See All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {mockProducts.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Nearby Shops */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Nearby Shops</h2>
              <Link to="/shops" className="text-emerald-600 text-sm font-medium flex items-center hover:underline">
                See All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {mockShops.map(shop => (
                <ShopCard key={shop.id} shop={shop} />
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar - Flash Sale */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-5 flex flex-col gap-4 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between">
              <div className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold animate-pulse">FLASH SALE</div>
              <button className="text-gray-400 hover:text-red-500 transition relative z-10">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-red-700 text-sm font-bold">
              <span>Ends in</span>
              <div className="flex gap-1">
                <span className="bg-white px-1.5 py-0.5 rounded border border-red-200">{String(timeLeft.hours).padStart(2, '0')}</span>:
                <span className="bg-white px-1.5 py-0.5 rounded border border-red-200">{String(timeLeft.minutes).padStart(2, '0')}</span>:
                <span className="bg-white px-1.5 py-0.5 rounded border border-red-200">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-slate-900 border border-red-100 relative z-10 mt-2 flex flex-col items-center shadow-sm">
              <div className="w-full aspect-square flex items-center justify-center p-2 mb-2">
                <img src={flashSaleProduct.image} alt={flashSaleProduct.name} className="w-2/3 object-contain" />
              </div>
              
              <h3 className="font-bold text-base mb-1 text-center">{flashSaleProduct.name}</h3>
              <p className="text-xs text-slate-500 mb-3 text-center">{flashSaleProduct.weight} • {flashSaleProduct.shopName}</p>
              
              <div className="flex flex-col items-center gap-1 mb-4">
                <span className="text-xl font-bold text-slate-900">₹{flashSaleProduct.price}</span>
                <span className="text-sm text-slate-400 line-through">₹{flashSaleProduct.originalPrice}</span>
                <span className="text-xs font-bold text-red-500">{flashSaleProduct.discountPercentage}% OFF</span>
              </div>
              
              <button 
                onClick={() => addToCart(flashSaleProduct)}
                className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700 transition shadow-md shadow-emerald-200"
              >
                <Plus size={18} className="mr-1" /> Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
