import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import React from "react";

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

const metadataImages = {
  hellblade:
    "https://upload.wikimedia.org/wikipedia/en/d/d4/Hellblade_-_Senua%27s_Sacrifice.jpg",
  "hollow-knight":
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",
  "stardew-valley":
    "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
};

// export async function generateStaticParams() {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }
export async function generateStaticParams() {
  const slugs = await getSlugs();
  console.log("[ReviewPage] generateStaticParams:", slugs);
  return slugs.map((slug) => ({ slug }));
}

//! Has the same props passed to the component
export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);

  /** @type { import('next').Metadata} */
  return {
    title: review.title,
    keywords: [
      "indie",
      "games",
      "reviews",
      "hellblade",
      "hollow knight",
      "stardew Valley",
    ],

    openGraph: {
      title: review.title,
      description: review.body.slice(0, 200),
      url: "https://iknwoly.com",
      siteName: "Indie Game",
      images: [
        {
          url: metadataImages[slug], // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: review.title,
      description: review.body.slice(0, 200),
      siteId: "1467726470533754880",
      creator: "Ibrahim AlRayyan",
      creatorId: "rayyanx95",
      images: metadataImages[slug], // Must be an absolute URL
    },
  };
}

const ReviewPage = async ({ params: { slug } }) => {
  const { title, date, image, body } = await getReview(slug);

  console.log("[REVIEW-PAGE] slug", slug);
  return (
    <>
      <Heading>{title}</Heading>
      <div className=" flex gap-2 p-2">
        <p className=" italic text-gray-500">{date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={image}
        className=" mb-2 rounded"
        width={640}
        height={360}
        alt=""
      />

      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className=" prose prose-stone"
      />
    </>
  );
};

export default ReviewPage;
