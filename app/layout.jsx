import React from 'react'
import Link from 'next/link';

import './globals.css'
import NavBar from '../components/NavBar';

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className=' px-2 flex flex-col py-2 min-h-screen'>
        <header>
          <NavBar />
        </header>
        <main className=' flex-grow py-3'>{children}</main>
        <footer className=' border-t text-orange-800'>[Footer]</footer>
      </body>
    </html>
  )
}

export default layout