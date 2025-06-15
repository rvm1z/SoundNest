import React, { useEffect, useState } from 'react';
import { getLofiTracks } from '../api';

const Sound = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getLofiTracks().then(setTracks);
  }, []);

  return (
    <div>
      {tracks.length > 0 ? (
        <div>{tracks[0].title} — {tracks[0].artist}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Sound;
