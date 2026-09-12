'use client';

import { useState } from 'react';

export default function ShowVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full sm:max-w-[380px] mx-auto aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative">
      {playing ? (
        <video
          src="/show/cairns-cut.mp4"
          poster="/show/cairns-poster.jpg"
          controls
          autoPlay
          playsInline
          preload="none"
          className="w-full h-full object-contain bg-black"
        >
          Sorry, your browser doesn&apos;t support embedded video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group focus:outline-none focus-visible:ring-4 focus-visible:ring-orange"
          aria-label="Play video: two minutes of the Cairns set"
        >
          <img
            src="/show/cairns-poster.jpg"
            alt="Still from a live performance of Not Bad For A Car Park in Cairns"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-dark-green translate-x-0.5" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
