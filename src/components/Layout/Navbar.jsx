import React, { useState } from 'react';
import { Menu, X, Disc, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 border-b border-zinc-800 p-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-emerald-400 font-black text-2xl tracking-tighter">
          <Disc className="animate-spin-slow" /> VIBESYNC
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-3 top-2.5 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Search songs..." 
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2 rounded-full border border-zinc-700 focus:border-emerald-500 outline-none transition-all"
          />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 hover:bg-zinc-800 rounded-full transition">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Hamburger Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 flex flex-col p-6 space-y-4 shadow-2xl animate-in slide-in-from-top">
          <Link to="/signin" onClick={()=>setIsOpen(false)} className="text-xl font-bold text-white hover:text-emerald-400">Sign In</Link>
          <Link to="/pricing" onClick={()=>setIsOpen(false)} className="text-xl font-bold text-white hover:text-emerald-400">Pricing</Link>
          <Link to="/subscribe" onClick={()=>setIsOpen(false)} className="text-xl font-bold text-white hover:text-emerald-400">Mailing List</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
