import React from 'react';
import { Play, SkipBack, SkipForward, Heart } from 'lucide-react';

const SongCard = ({ song }) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-zinc-800/50 rounded-lg transition-all group">
      <div className="flex items-center gap-4">
        <img src={song.artworkUrl60} alt="cover" className="w-12 h-12 rounded shadow-lg" />
        <div>
          <h3 className="font-medium text-sm truncate w-48 md:w-64">{song.trackName}</h3>
          <p className="text-zinc-400 text-xs">{song.artistName}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <SkipBack size={18} className="hover:text-white cursor-pointer" />
          <div className="bg-emerald-500 p-2 rounded-full text-black hover:scale-105 transition">
            <Play size={18} fill="black" />
          </div>
          <SkipForward size={18} className="hover:text-white cursor-pointer" />
        </div>
        <Heart size={18} className="text-zinc-500 hover:text-emerald-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SongCard;

