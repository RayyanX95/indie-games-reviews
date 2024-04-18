import React from 'react'
import Heading from '@/components/Heading'
import { marked } from 'marked';
import { readFile } from 'node:fs/promises';

const HollowKnight = async () => {
  const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
  const html = marked(text)

  return (
    <>
      <Heading>HollowKnight</Heading>
      <img src='/images/hollow-knight.jpg' className=' mb-2 rounded' width={640} height={360} alt='' />
      <article dangerouslySetInnerHTML={{ __html: html }} className=' prose prose-stone' />
    </>
  )
}

export default HollowKnight