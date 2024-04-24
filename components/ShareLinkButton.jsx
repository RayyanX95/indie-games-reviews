'use client';

import { useState } from 'react';
import { LinkIcon } from "@heroicons/react/20/solid"

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log('clicked!');
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  console.log('[ShareLinkButton] clicked:', clicked);
  return (
    <button onClick={handleClick}
      className="border px-2 py-1 rounded text-slate-500 text-sm
                 hover:bg-orange-100
                 hover:text-slate-700 flex gap-1 items-center">
      <LinkIcon className=' h-4 w-4' />
      {clicked ? 'Link copied!' : 'Share link'}
    </button>
  );
}