import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";
import "./globals.css";

// import { Metadata } from 'next'

export const metadata /*: Metadata*/ = {
  title: {
    template: "%s | Indie Game",
    default: "Indie Game Reviews", // a default is required when creating a template
  },
  openGraph: {
    title: "Indie Game",
    description:
      "Indie Game reviews, stay tuned to know everything about the game",
    url: "https://iknwoly.com",
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
};

const layout = ({ children }) => {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className=" px-2 flex flex-col py-2 min-h-screen bg-orange-100">
        <header>
          <NavBar />
        </header>
        <main className=" flex-grow py-3">{children}</main>
        <footer className=" border-t text-orange-800">[Footer]</footer>
      </body>
    </html>
  );
};

export default layout;
