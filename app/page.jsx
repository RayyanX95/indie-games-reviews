import React from 'react'
import Heading from '@/components/Heading'
import Link from 'next/link'
import { getFeaturedReview } from '@/lib/reviews'

export const metadata = {
  title: 'Reviews',
  description: 'Only the best indie games, reviewed for you. Stay tuned to know the latest about the indies games updates and reviews'
}

const HomePage = async () => {
  const featuredReview = await getFeaturedReview();
  return (
    <>
      <Heading>page</Heading>
      <p className='my-1'>Only the best indie games, reviewed for you.</p>

      <div className=" bg-slate-100 border rounded shadow hover:shadow-xl">
        <Link className=' flex flex-col sm:flex-row gap-2' href={`/reviews/${featuredReview.slug}`}>
          <img src={featuredReview.image} alt=""
            width="320" height="180" className="rounded-t"
          />
          <h2 className="py-1 text-center text-2xl">
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  )
}

export default HomePage