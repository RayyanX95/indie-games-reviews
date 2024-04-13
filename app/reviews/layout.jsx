import React from 'react'
import Link from 'next/link';

const ReviewsLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ border: '1px solid #666', }}>
        <ul>
          <li>
            <Link href='/reviews/stardew-valley'>Startdew Valley</Link>
          </li>
          <li>
            <Link href='/reviews/hollow-knight'>Hollow Knight</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  )
}

export default ReviewsLayout