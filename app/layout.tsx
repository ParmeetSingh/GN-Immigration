
// components/Layout.tsx
import React, { ReactNode } from 'react';
import  "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export const metadata = {
  title: 'GN Immigration',
  description: 'We are RCIC Approved. Trust our expertise in immigration services, backed by the certification from the Immigration Consultants of Canada Regulatory Council.',
};


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="keywords" content="immigration, RCIC approved, Canada immigration, GN Immigration" />
        <meta name="author" content="GN Immigration" />
      </head>
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
