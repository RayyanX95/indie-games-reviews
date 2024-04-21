import { marked } from 'marked';
import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';

export const getReview = async (slug) => {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const { content, data: { title, date, image } } = matter(text);
  const body = marked(content);

  return { title, date, image, body };
}