import Link from 'next/link';
import Heading from '@/components/Heading';

export default function ReviewsPage({ children }) {
  return (
    <>
      <Heading>Reviews</Heading>
      {children}
    </>
  );
}