import React, { ReactNode } from 'react';
import Header from '@/components/header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-900 text-white p-4">
      <Footer />
      </footer>
    </div>
  );
};

export default Layout;
