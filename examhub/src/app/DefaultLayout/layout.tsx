'use client';

import React from 'react';
import Header from '../components/header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
