'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/contribute', label: 'Contribute' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-orange/20">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center px-6 py-4">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                pathname === item.href
                  ? 'bg-orange text-cream shadow-lg'
                  : 'text-foreground hover:bg-orange/10 hover:text-orange'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <div className="flex-1" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-orange'
                    : 'text-foreground hover:text-orange'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;