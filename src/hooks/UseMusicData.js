import { useState, useEffect } from 'react';

export const useMusicData = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=pop&limit=50&entity=song')
      .then(res => res.json())
      .then(data => {
        setSongs(data.results);
        setFilteredSongs(data.results);
        setLoading(false);
      });
  }, []);

  const searchSongs = (query) => {
    const term = query.toLowerCase();
    const filtered = songs.filter(s => 
      s.trackName.toLowerCase().includes(term) || 
      s.artistName.toLowerCase().includes(term)
    );
    setFilteredSongs(filtered);
  };

  return { filteredSongs, loading, searchSongs };
};
