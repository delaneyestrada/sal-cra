import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import SpotifyPlayer from './SpotifyPlayer';

export default function SpotifySidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`fixed right-0 top-8 w-12 transition-transform ease-out duration-500 rounded-l-md bg-black flex place-content-center px-8 py-2 border-black  border-r-2 border-l border-y cursor-pointer z-[51]  ${
          open ? '-translate-x-96 mr-[-1px]' : ''
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon
          icon={faSpotify}
          size="2x"
          className="text-green-600"
        />
      </div>
      <div
        className={`fixed right-0 h-screen w-96 bg-black z-50 p-4 border-l border-black transition-transform ease-out duration-500 ${
          open ? '' : 'translate-x-96'
        }`}
      >
        <SpotifyPlayer
          height={250}
          url="https://open.spotify.com/embed/album/52vsYTBDlW4C6yfgOtZxuT"
        />
        <SpotifyPlayer
          height={80}
          url="https://open.spotify.com/embed/album/3xC4d2Ec8wI2iu7PaG6b2Q"
        />
      </div>
    </div>
  );
}
