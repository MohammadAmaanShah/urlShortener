"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: " --fonts-poppins",
  weight: "100 900",
});

const page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    < div className="h-screen w-full bg-purple-300 py-5">
      <div className=" text-white flex flex-col w-fit p-7 rounded-md  gap-4 bg-purple-400 mx-auto ">
        <h1 className="font-semibold text-2xl">Generate your short URL's</h1>
        <div className="flex flex-col gap-4">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-white outline-0 rounded-md h-7 text-black "
            placeholder="Enter the url to be shortern"
          ></input>
          <input
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            className="bg-white outline-0 rounded-md h-7  text-black"
            placeholder="Enter the preferred short URL "
          ></input>
          <button
            onClick={generate}
            className="bg-white/20 px-4 py-2 rounded-xl font-semibold "
          >
            Generate
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        {generated && (
          <code
            className={`text-lg font-semibold${poppins.className} p-4 bg-purple-500 rounded-md  mx-auto text-center   `}
          >
            Your Link :
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        )}
      </div>
    </div>
  );
};

export default page;
