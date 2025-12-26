import React, { useState } from 'react';
import { Menu, X, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Sign Up', path: '/signup' },
    { name: 'Sign In', path: '/signin' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Mailing List', path: '/subscribe' },
  ];

  return (
    <nav className="bg-black py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2 text-emerald-500 font-bold text-xl">
        <Disc size={28} />
        <span>VibeSync</span>
      </div>

      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-emerald-500 transition">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-emerald-500 transition border-b border-zinc-800 last:border-none"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

