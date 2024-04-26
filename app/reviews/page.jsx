import React from "react";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";

const ReviewsPage = async () => {
  const review = await getReviews();
  console.log("[ReviewPage] review", review);

  return (
    <ul className="flex flex-row flex-wrap gap-3">
      {review.map((review) => (
        <li
          key={review.slug}
          className="bg-white border rounded shadow w-80 hover:shadow-xl"
        >
          <Link href={`/reviews/${review.slug}`}>
            <img
              src={review.image}
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">{review.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;
