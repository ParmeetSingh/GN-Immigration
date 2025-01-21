
// components/Layout.tsx
import React, { ReactNode } from 'react';
import  "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <div >
          <Navbar />
          <main className="bodyContent">
            {children}
          </main>
          
          <Footer />
      
        </div>
      </body>
    </html>
  );
};

export default Layout;
