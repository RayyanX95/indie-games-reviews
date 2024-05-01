import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul className=" flex gap-2">
        <li>
          <Link href="/" className="text-orange-800 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-orange-800 hover:underline"
            prefetch={false}
          >
            About
          </Link>
        </li>
        <li>
          <Link href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>Toggle Theme</li>
      </ul>
    </nav>
  );
};

export default NavBar;
