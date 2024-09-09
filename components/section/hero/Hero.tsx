import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <section className="bg-secondary-950 h-fit py-48 flex flex-col gap-32">
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <h1 className="text-white text-hero leading-none">
              The future of collab
            </h1>
          </div>
          <div className="flex mt-6 sm:mt-0 flex-col justify-between gap-6 sm:gap-0">
            <p className="text-white">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us on a journey towards a future where
              clean, renewable energy sources transform the way we power our
              lives.
            </p>
            <Link href="/solutions" className="">
              <button className="py-4 px-6 bg-primary-300 rounded-full hover:bg-primary-400 duration-300">
                See Our Solutions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
