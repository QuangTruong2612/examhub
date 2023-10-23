'use client';
import React from 'react';
import '../../styles/globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>EXAMHUB</title>
            </head>
            <body>
                <div className="app">
                    <Header />
                    {children}
                    {/* <Footer /> */}
                </div>
            </body>
        </html>
    );
}
