"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 py-20 overflow-hidden z-1"
      id="main-banner"
      style={{ paddingBottom: "0px" }}
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-span-5">
            <h1 className="text-5xl font-bold">
              Elevating Your Business By Unlocking The Power Of Data
            </h1>
            <p className="mt-4 text-xl text-gray-700 max-w-xl">
              We are an end-to-end data company specializing in Data Strategy, Data Engineering &amp; Data Analytics.
            </p>
            <button className="bg-primary text-white text-xl font-semibold mt-5 py-5 px-12 rounded-full hover:bg-darkmode">
              Get started
            </button>
          </div>
          <div className="col-span-7 mx-20">
            <Image
              src="/images/hero/hero_bannar.png"
              alt="banner image"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
