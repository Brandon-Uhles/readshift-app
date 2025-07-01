import React, {ReactNode } from "react";
 
type LayoutProps = {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
            {/*Header*/}
            <header className="bg-background p-4 shadow-md">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold">Readshift</h1>
                </div>
            </header>

            {/*Main Content*/}
            <main className="flex-grow max-w-5xl mx-auto p-4 w-full">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-primary p-4 mt-auto text-center text-sm text-gray-400">
                        © 2025 Readshift. All rights reserved.
            </footer>
        </div>
    );
}