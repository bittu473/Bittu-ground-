import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Payment } from './pages/Payment';
import { ProductDetails } from './pages/ProductDetails';
import { Orders } from './pages/Orders';
import { ProductList } from './pages/ProductList';
import { Shops } from './pages/Shops';
import { Profile } from './pages/Profile';

// Placeholder for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[50vh] text-2xl font-bold text-gray-400">
    {title} Page Coming Soon
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AppLayout>
      </Router>
    </AppProvider>
  );
}





