import Link from "next/link";
import React from "react";
import { Youtube } from "./icons";

export default function FooterLearn() {
  return (
    <section className="bg-accentDarkPrimary px-6 sm:px-8 md:px-12 py-8 flex flex-col items-center justify-center gap-y-6 w-full md:w-1/2">
      <h4 className="text-2xl xs:text-4xl sm:text-4xl lg:text-5xl font-semibold text-light uppercase text-center leading-snug">
        <span className="text-dark font-bold text-rose-950">Be a Web Developer</span>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Learn to earn ....Its Free!!
      </h4>
      <Link
        href="https://www.youtube.com"
        target="_blank"
        aria-label="Watch Web Development tutorials on YouTube"
        className="bg-golden text-dark px-8 py-4 text-xl shadow-md shadow-accentDarkPrimary/30 rounded-lg hover:bg-light hover:text-dark font-semibold w-auto text-center uppercase flex items-center gap-x-3 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <Youtube className="w-8 h-8 inline" />
        Explore
      </Link>
    </section>
  );
}
