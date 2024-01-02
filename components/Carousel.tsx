/* eslint-disable @next/next/no-img-element */
"use client";

import photos from "../public/photos.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Carousel() {
  const images = photos.map((photo) => "/photos/" + photo);
  let [index, setIndex] = useState(0);

  const SIZE = 500;

  const getPrevImage = () => {
    if (index > 0) {
      return images[index - 1];
    } else {
      return images[images.length - 1];
    }
  };

  const getNextImage = () => {
    if (index + 1 < images.length) {
      return images[index + 1];
    } else {
      return images[0];
    }
  };

  function nextImage() {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center overflow-hidden max-w-full">
        <AnimatePresence initial={false}>
          <motion.button
            className="bg-white z-10 flex items-center justify-center text-slate-400 hover:text-slate-800 transition w-fit px-4"
            onClick={() => prevImage()}
          >
            <ChevronLeftIcon />
          </motion.button>
        </AnimatePresence>
        <div className="flex gap-4">
          <motion.div
            style={{ translateX: "50px" }}
            animate={{ x: `-${index * (SIZE / 2)}px` }}
            transition={{ duration: 1.2, ease: [0.32, 0.32, 0, 1] }}
            className={`flex relative w-[${SIZE}px] h-[${SIZE}px]`}
          >
            {images.map((img, i) => (
              <>
                <Image
                  key={img}
                  src={img}
                  alt=""
                  width={SIZE / 2}
                  height={SIZE / 2}
                  priority={false}
                  className={`
                    w-[${SIZE / 2}px]
                    object-cover 
                    rounded-lg 
                    transition
                    duration-500
                    relative
                    shadow-md
                    left-[${SIZE / 2}px]
                    ${
                      i === index
                        ? "scale-100 shadow-md z-10"
                        : "scale-[85%] opacity-60 grayscale-[80%]"
                    }`}
                />
                <motion.div
                  key={`${img}_overlay`}
                  className={`absolute w-full h-full z-20 flex flex-col p-2`}
                  style={{ left: `${i * (SIZE / 2)}px` }}
                  animate={{
                    opacity: i === index ? 1 : 0,
                    y: i === index ? 0 : 10,
                  }}
                >
                  <div className={"mt-auto"}>
                    <h1 className={"text-white opacity-70 text-xs"}>
                      {photos[i]}
                    </h1>
                  </div>
                </motion.div>
              </>
            ))}
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          <motion.button
            className="bg-white z-10 flex items-center justify-center text-slate-400 hover:text-slate-800 transition w-fit px-4"
            onClick={() => nextImage()}
          >
            <ChevronRightIcon />
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
}
