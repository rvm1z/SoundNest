
import { useEffect, useState } from "react";
import { getLofiTracks } from "./api";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    getLofiTracks().then((data) => {
      setTracks(data);
      setCurrent(data[0]);
    });
  }, []);

  const nextTrack = () => {
    const index = tracks.indexOf(current);
    const next = (index + 1) % tracks.length;
    setCurrent(tracks[next]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-pink-300 p-4">
      <h1 className="text-4xl font-bold mb-6">SoundNest</h1>
      {current && (
        <>
          <img
            src={current.image}
            alt={current.title}
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-4"
          />
          <h2 className="text-xl">{current.title}</h2>
          <p className="text-sm text-pink-400">{current.artist}</p>
          <audio controls autoPlay className="mt-4 w-full max-w-md">
            <source src={current.url} type="audio/mp3" />
          </audio>
          <button
            onClick={nextTrack}
            className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-xl"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
