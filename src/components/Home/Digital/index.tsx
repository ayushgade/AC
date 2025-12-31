"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Digital = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top pb-24 md:pb-40 lg:pb-60 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24 relative z-10">
            <h3 className="text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5">
              Who we are
            </h3>
            <h4 className="text-65 sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
              We are a  data company specializing in Data Strategy, Data Engineering & Data Analytics.
            </h4>
            <div className="text-center lg:text-start">
              <Link
                href="#"
                className="text-xl font-semibold text-white bg-blue hover:bg-primary py-4 px-12 rounded-full"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:absolute lg:-bottom-16 lg:-right-20 mt-16 lg:mt-0 flex justify-center">
          <Image
            src="/images/digital/girldoodle.svg"
            alt="doodle"
            width={815}
            height={691}
            className="w-[260px] md:w-[400px] lg:w-[815px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default Digital;
