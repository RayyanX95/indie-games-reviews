import { homePageMetadata } from "@/lib/generateMetadataFactory";
import NavBar from "../components/NavBar";
import { exo2, orbitron } from "./fonts";
import "./globals.css";

// import { Metadata } from 'next'

export const metadata /*: Metadata*/ = {
  ...homePageMetadata,
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
