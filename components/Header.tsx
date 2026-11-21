"use client";
import NavLinks from './NavLinks'; // 1. Import your NavLinks component

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div id="header-title" className="text-2xl font-bold">David Antonio Fajardo</div>
                
                {/* 2. Replace the old <ul> list with the <NavLinks /> component */}
                <NavLinks />
                
            </div>
        </header>
    );
}