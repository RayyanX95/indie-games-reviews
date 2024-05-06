import { PAGE_SIZE, parsePageParam } from "@/app/reviews/page";
import { notFound } from "next/navigation";
import { getReview, getReviews } from "./reviews";

export const homePageMetadata /*: Metadata*/ = {
  title: {
    template: "%s | Indie Game",
    default: "Indie Game Reviews", // a default is required when creating a template
  },
  openGraph: {
    title: "Indie Game",
    description:
      "Indie Game reviews, stay tuned to know everything about the game",
    url: "https://indie-games-reviews.vercel.app",
    siteName: "Indie Game",
    images: [
      {
        url: "https://indie-games-reviews.vercel.app/_next/image?url=https%3A%2F%2Fnext-reviews-cms.encoded.io%2Fuploads%2Ffall_guys_9f9b386677.jpg&w=1920&q=75", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Game",
    description: "Indie Game reviews, stay tuned to know everything about the game",
    siteId: "1467726470533754880",
    creator: "Ibrahim AlRayyan",
    creatorId: "rayyanx95",
    images: {
      url: "https://indie-games-reviews.vercel.app/_next/image?url=https%3A%2F%2Fnext-reviews-cms.encoded.io%2Fuploads%2Fstardew_valley_a268200e49.jpg&w=1920&q=75", // Must be an absolute URL
      width: 800,
      height: 600,
    },
  },
};

export async function slugPageMetadata(slug) {
  console.log("[generateMetadata] slug:", slug);
  const review = await getReview(slug);

  if (!review) {
    notFound();
  }

  return {
    title: review.title,
    openGraph: {
      title: review.title,
      description: review.body,
      url: "https://indie-games-reviews.vercel.app",
      siteName: "Indie Game",
      images: {
        url: review.image, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: review.title,
      description: review.body,
      siteId: "1467726470533754880",
      creator: "Ibrahim AlRayyan",
      creatorId: "rayyanx95",
      images: {
        url: review.image, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    },
  };
}

export async function reviewsPageMetadata(searchParams) {
  console.log("[reviewsPageMetadata] searchParams:", searchParams);
  const page = parsePageParam(searchParams.page);
  const { reviews } = await getReviews(PAGE_SIZE, page);

  const images = reviews.map((review) => ({
    url: review.image, // Must be an absolute URL
    width: 800,
    height: 600,
  }));
  return {
    title: "Reviews",
    openGraph: {
      title: "Reviews",
      description:
        "Indie Game reviews, stay tuned to know everything about the game",
      url: "https://indie-games-reviews.vercel.app",
      siteName: "Indie Game",
      images,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Reviews",
      description:
        "Indie Game reviews, stay tuned to know everything about the game",
      siteId: "1467726470533754880",
      creator: "Ibrahim AlRayyan",
      creatorId: "rayyanx95",
      images,
    },
  };
}