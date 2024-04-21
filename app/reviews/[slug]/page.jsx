import Heading from '@/components/Heading'
import { getReview } from '@/lib/reviews';
import React from 'react'

const ReviewPage = async ({ params: { slug } }) => {
  const { title, date, image, body } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <img src={image} className=' mb-2 rounded' width={640} height={360} alt="" />

      <article dangerouslySetInnerHTML={{ __html: body }} className=' prose prose-stone' />
    </>
  )
}

export default ReviewPage