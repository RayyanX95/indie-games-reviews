import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { slugPageMetadata } from "@/lib/generateMetadataFactory";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from "next/image";
import { notFound } from "next/navigation";

// export const dynamicParams = true; // true | false,

// export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log('[ReviewPage] generateStaticParams:', slugs);
  return slugs.map((slug) => ({ slug }));
}

//! Has the same props passed to the component
export async function generateMetadata({ params: { slug } }) {
  console.log("[generateMetadata] slug:", slug);
  return await slugPageMetadata(slug);
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  // console.log('[ReviewPage] review', review);

  if (!review) {
    notFound();
  }

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt=""
        priority
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
