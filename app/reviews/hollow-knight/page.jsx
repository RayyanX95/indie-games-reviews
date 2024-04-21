import React from 'react'
import Heading from '@/components/Heading'
import { marked } from 'marked';
import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';

const HollowKnight = async () => {
  const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
  const { content, data } = matter(text);
  const html = marked(text);

  console.log('data', data)

  return (
    <>
      <Heading>{data.title}</Heading>
      <p className=' italic p-2'>{data.date}</p>
      <img src={data.image} className=' mb-2 rounded' width={640} height={360} alt='' />
      <article dangerouslySetInnerHTML={{ __html: html }} className=' prose prose-stone' />
    </>
  )
}

export default HollowKnight