import React from 'react'
import Heading from '@/components/Heading'
import Link from 'next/link'

const page = async () => {
  return (
    <>
      <Heading>page</Heading>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eligendi ab omnis doloribus repellat cumque ipsa mollitia. Odio et mollitia rem? Magni animi sapiente, aspernatur necessitatibus modi tenetur harum suscipit!</p>

      <div className=" bg-slate-100 border rounded shadow hover:shadow-xl">
        <Link className=' flex flex-col sm:flex-row gap-2' href="/reviews/stardew-valley">
          <img src="/images/stardew-valley.jpg" alt=""
            width="320" height="180" className="rounded-t"
          />
          <h2 className="py-1 text-center text-2xl">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  )
}

export default page