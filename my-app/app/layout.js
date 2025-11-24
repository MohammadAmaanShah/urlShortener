import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "URL-Shortener",
  description: "Generated  the url shortener that makes your life easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={` bg-purple-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
