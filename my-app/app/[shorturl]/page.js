import { redirect, RedirectType } from "next/navigation";
import clientPromise from "@/lib/mongodb";
export default async function page({ params }) {
  const shorturl = (await params).shorturl;
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  // Check if the short url exists
  const doc = await collection.findOne({ shorturl: shorturl });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST);
  }
  // return <p className="bg-pink-600">{shorturl} fgawerg</p>;
}
