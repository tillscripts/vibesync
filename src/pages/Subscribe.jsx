import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Subscribe = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-emerald-500/10 p-6 rounded-full mb-6">
        <Mail size={48} className="text-emerald-500" />
      </div>
      <h1 className="text-5xl font-black text-white mb-4">Solivox Insider</h1>
      <p className="text-zinc-400 max-w-lg text-lg mb-8">
        Join our exclusive community on Substack for deep dives into music culture, 
        tech updates, and curated vibes.
      </p>
      <a 
        href="https://solivox.substack.com/subscribe" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition active:scale-95"
      >
        Subscribe on Substack <ExternalLink size={20} />
      </a>
    </div>
  );
};

export default Subscribe;
