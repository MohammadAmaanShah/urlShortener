"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: " --fonts-poppins",
  weight: "100 900",
});

export default function Home() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    setIsLaptop(window.innerWidth);
    console.log(window.innerWidth);
  }, []);
  return (
    <main className="bg-purple-200 px-2  ">
      <section className="grid md:grid-cols-2 h-[calc(100vh-5rem)] ">
        <div className="flex flex-col items-center justify-center  gap-10 py-5 md:py-0">
          <p className={` text-2xl text-center ${poppins.className}`}>
            The best URL Shortener in the world
          </p>
          <p className={`text-center  font-semibold `}>
            We are the most stright forword url shortener in the market . This
            is the right place you ara looking for and the great platform to get
            your business done{" "}
          </p>
          <li className="flex gap-3 text-white ">
            <Link href="/shorten">
              <button className="bg-purple-500 font-bold rounded-2xl px-4 py-2">
                Try Now
              </button>
            </Link>
            <Link target="_blank" href="https://github.com/MohammadAmaanShah">
              <button className="bg-purple-500 font-bold rounded-2xl px-4 py-2">
                GitHub
              </button>
            </Link>
          </li>
        </div>
        {isLaptop > 750 && (
          <div className=" flex justify-start relative">
            <Image
              className="mix-blend-darken"
              src={"/vector.jpg"}
              fill={true}
              alt="image"
            />
          </div>
        )}
      </section>
    </main>
  );
}
