import Heading from '@/components/Heading'
import { getReview } from '@/lib/reviews';
import React from 'react';

//* Example:  app/reviews/[slug]/page.js
// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json());
//   return posts.map((post) => ({ slug: post.slug }));
// }

//* Mutiple dynamic segments
// app/products/[category]/[product]/page.js
// export async function generateStaticParams() {
//   return [
//     { category: 'a', product: '1' },
//     { category: 'b', product: '2' },
//     { category: 'c', product: '3' },
//   ];
// }


export async function generateStaticParams() {
  return [
    { slug: 'hellblade' },
    { slug: 'hollow-knight' },
  ]
}

const ReviewPage = async ({ params: { slug } }) => {
  const { title, date, image, body } = await getReview(slug);

  console.log('[REVIEW-PAGE] slug', slug)
  return (
    <>
      <Heading>{title}</Heading>
      <img src={image} className=' mb-2 rounded' width={640} height={360} alt="" />

      <article dangerouslySetInnerHTML={{ __html: body }} className=' prose prose-stone' />
    </>
  )
}

export default ReviewPage