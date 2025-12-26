import React, { useState, useEffect, Suspense, lazy } from 'react';
const SongCard = lazy(() => import('../components/SongCard'));

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    // Fetching live data from iTunes API
    fetch('https://itunes.apple.com/search?term=pop&limit=50&entity=song')
      .then(res => res.json())
      .then(data => {
        setSongs(data.results);
        setFilteredSongs(data.results);
      });
  }, []);

  // Search Algorithm
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    const filtered = songs.filter(song => 
      song.trackName.toLowerCase().includes(query) || 
      song.artistName.toLowerCase().includes(query)
    );
    setFilteredSongs(filtered);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white p-6">
      <div className="mb-8">
        <input 
          type="text" 
          placeholder="Search for songs or artists..." 
          className="w-full max-w-md bg-zinc-800 border-none rounded-full py-2 px-6 focus:ring-2 focus:ring-emerald-500 outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Suspense fallback={<div className="text-emerald-500">Loading Tracks...</div>}>
          {filteredSongs.map((song) => (
            <SongCard key={song.trackId} song={song} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
