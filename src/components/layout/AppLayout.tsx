import React, { ReactNode } from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-900">
      <Header />
      
      {/* Main content area */}
      <main className="flex-1 w-full max-w-7xl mx-auto md:px-8 lg:px-12 pb-20 md:pb-8">
        {children}
      </main>

      <BottomNav />
      
      {/* Desktop Footer Placeholder */}
      <footer className="hidden md:block bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-emerald-700">FreshLocal</h2>
            <p className="text-sm text-gray-500 mt-1">Shop Fresh, Shop Local</p>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FreshLocal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
