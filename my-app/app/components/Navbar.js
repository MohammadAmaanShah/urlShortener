import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="h-20 bg-purple-500 flex items-center justify-between  text-white font-semibold md:px-10 px-1">
      <div className="text-lg md:text-xl  font-bold text-purple-900  ">
        <Link href="/">Bit-Link</Link>
      </div>
      <ul className=" h-full flex items-center gap-3  ">
       

        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-white/30 md:font-bold text-sm rounded-2xl md:px-4 md:py-2 px-1.5 py-1 ">
              Try Now
            </button>
          </Link>
          <Link target="_blank" href="https://github.com/MohammadAmaanShah">
           
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
