import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";
import { reviewsPageMetadata } from "@/lib/generateMetadataFactory";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

//! Has the same props passed to the component
export async function generateMetadata({ searchParams }) {
  console.log("[generateMetadata] searchParams:", searchParams);
  const page = parsePageParam(searchParams.page);
  return await reviewsPageMetadata(searchParams);
}

// export const revalidate = 30; // seconds

// export const dynamic = "force-dynamic";
export const PAGE_SIZE = 6;

const ReviewsPage = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  // console.log("[ReviewPage] review", review);

  return (
    <>
      {/* <Heading>Reviews</Heading> */}
      <div className="flex justify-between pb-3">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
        <SearchBox />
      </div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
                priority={index === 0}
              />
              <h2 className="py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;

export function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
