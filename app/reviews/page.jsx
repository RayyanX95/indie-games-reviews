import React from "react";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Heading from "@/components/Heading";
import PaginationBar from "@/components/PaginationBar";

// export const revalidate = 30; // seconds

// export const dynamic = "force-dynamic";
const PAGE_SIZE = 6;

const ReviewsPage = async ({ searchParams }) => {
  console.log("searchParams", searchParams);
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  // console.log("[ReviewPage] review", review);

  return (
    <>
      {/* <Heading>Reviews</Heading> */}
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
