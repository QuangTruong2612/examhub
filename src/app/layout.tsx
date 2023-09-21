'use client';
import '../../styles/globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>EXAMHUB</title>
            </head>
            <body>
                <div className="app">{children}</div>
            </body>
        </html>
    );
}
