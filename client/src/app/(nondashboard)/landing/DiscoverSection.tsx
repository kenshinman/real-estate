"use client";

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

const discoverItems = [
  {
    imageSrc: "/landing-icon-wand.png",
    title: "Search for Properties",
    description:
      "Search for properties by location, price, and other criteria to find your perfect rental.",
  },
  {
    imageSrc: "/landing-icon-calendar.png",
    title: "Book Your Rental",
    description:
      "Once you find your ideal property, book it directly through our platform for a seamless experience.",
  },
  {
    imageSrc: "/landing-icon-heart.png",
    title: "Enjoy your New Home",
    description:
      "Move into your rental and enjoy your new home. Our platform makes it easy to manage your rental experience.",
  },
];

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0},
};

const DiscoverSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{once: true, amount: 0.8}}
      className="py-12 mb-16 bg-white"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px:8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find your Dream Rental Property Today
          </p>
          <p className="nt-2 text-gray-500 max-w-3xl mx-auto">
            Discover your dream rental property with our user-friendly platform.
            Our advanced search filters make it easy to find the perfect home
            that meets your needs and preferences. Explore a wide range of
            verified listings and simplify your rental search today!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {discoverItems.map((item, index) => {
            return (
              <motion.div key={index} variants={itemVariants}>
                {<DiscoverCard {...item} />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full size-10 mx-auto">
        <Image
          height={30}
          width={30}
          src={imageSrc}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default DiscoverSection;
