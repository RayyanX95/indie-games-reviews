import React from 'react'
import Link from 'next/link';

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about' prefetch={false}>About</Link></li>
              <li><Link href='/reviews'>Reviews</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  )
}

export default layout