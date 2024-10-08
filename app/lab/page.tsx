"use client";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Circle,
  CornerUpLeft,
  Menu,
  Phone,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "./Navigation";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import LogosWidget from "./LogosWidget";
import Spotlight from "./Spotlight";
import SwitchBoard from "./SwitchBoard";
// import LogoCarousel from "../../components/LogoCarousel";
import RotatingGradient from "./RotatingGradient";
import NightSky from "./NightSky";

export default function Lab() {
  const phoneVariants = {
    ringing: {
      rotate: [0, -11, 10, -11, 10, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        loop: Infinity,
      },
    },
    still: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    closed: {
      rotate: 180,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const [buttonHover, setButtonHover] = useState(false);

  const buttonVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    default: {
      opacity: 0.3,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const [isChecked, setIsChecked] = useState(false);

  const [deleteHover, setDeleteHover] = useState(false);

  const deleteVariants = {
    buttonHover: {
      width: "104px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    buttonDefault: {
      width: "80px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    iconHover: {
      y: 0,
      opacity: 1,
      scale: 1,
      display: "block",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    iconDefault: {
      y: 4,
      opacity: 0,
      scale: 0.2,
      display: "none",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="p-4 pb-80 max-w-3xl mx-auto pt-12">
      <motion.span
        className="absolute top-0 left-0 mt-4 ml-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/" title="Homepage">
          <CornerUpLeft className="text-slate-400 hover:text-slate-700" />
        </Link>
      </motion.span>
      <h1 className="text-xl font-serif italic">Jordi Enric</h1>
      <p className="text-slate-700/80 mt-2">
        This is where I try stuff. All of it is built with React, Framer Motion
        and Tailwind
      </p>
      <p className="text-slate-700/80 mt-2">
        Some of these animations only run on mouse hover, so if you`re on mobile
        you might want to try this on a desktop browser.
      </p>

      <div className="flex gap-4 mt-12 flex-wrap">
        <div className="experiment text-slate-600 hover:text-blue-500 w-20">
          <motion.div
            className="p-4"
            whileHover={"ringing"}
            variants={phoneVariants}
          >
            <Phone />
          </motion.div>
        </div>
        <div className="experiment text-slate-600 hover:text-blue-500 w-20">
          <motion.button
            className="p-4"
            variants={menuVariants}
            animate={isOpen ? "open" : "closed"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
        <div className="experiment text-slate-600 hover:text-blue-500">
          <motion.button
            onHoverStart={() => setButtonHover(true)}
            onHoverEnd={() => setButtonHover(false)}
            className="p-2 pr-2 pl-4 rounded-md bg-gradient-to-b from-slate-700 to-black text-slate-200 hover:text-white outline outline-slate-300 flex items-center gap-2 hover:outline-4 highlight transition-all "
          >
            Send
            {buttonHover ? (
              <motion.span
                variants={buttonVariants}
                animate={buttonHover ? "hover" : "default"}
              >
                <ArrowRight size="20" />
              </motion.span>
            ) : (
              <motion.span
                variants={buttonVariants}
                animate={buttonHover ? "hover" : "default"}
              >
                <ChevronRight size="20" />
              </motion.span>
            )}
          </motion.button>
        </div>

        <div className="experiment text-slate-600 hover:text-blue-500">
          <motion.button
            onClick={() => setIsChecked(!isChecked)}
            className="p-2 hover:bg-slate-100 rounded-md flex items-center gap-2"
          >
            {isChecked ? (
              <motion.span
                variants={buttonVariants}
                animate={isChecked ? "hover" : "default"}
              >
                <CheckCircle size="20" />
              </motion.span>
            ) : (
              <motion.span
                variants={buttonVariants}
                animate={isChecked ? "hover" : "default"}
              >
                <Circle size="20" />
              </motion.span>
            )}
            Send
          </motion.button>
        </div>

        <div className="experiment">
          <motion.button
            onHoverStart={() => setDeleteHover(true)}
            onHoverEnd={() => setDeleteHover(false)}
            className="p-2 px-4 gap-2 hover:bg-red-50 flex items-center justify-end text-red-500 hover:text-red-600 rounded-md transition-all  hover:border-red-300 font-semibold"
            variants={deleteVariants}
            animate={deleteHover ? "buttonHover" : "buttonDefault"}
          >
            <motion.span
              variants={deleteVariants}
              animate={deleteHover ? "iconHover" : "iconDefault"}
            >
              <Trash2 size="20" />
            </motion.span>
            Delete
          </motion.button>
        </div>

        <div className="bg-gradient-to-br from-slate-700 to-slate-900 flex items-center p-12 rounded-xl flex-grow max-w-full overflow-auto">
          <Navigation />
        </div>

        <div className="w-full rounded-xl bg-white p-4">
          <Carousel />
        </div>

        <div className="w-full rounded-xl bg-white p-8">
          <NightSky />
        </div>

        <div className="w-full rounded-xl bg-white p-8">
          <LogosWidget />
        </div>

        <div className="w-full rounded-xl bg-white p-8">
          <Spotlight>
            <div className="text-center text-white text-3xl cursor-context-menu flex flex-col justify-center items-center">
              Spotlight Hover
              <p className="text-xs mt-1 opacity-80 bg-slate-50/20 inline-block px-3 py-1 rounded-md border border-white/40">
                Doesn`t work on mobile
              </p>
            </div>
          </Spotlight>
        </div>

        <div className="w-full rounded-xl bg-white p-8">
          <SwitchBoard />
        </div>

        {/* <div className="hidden w-full rounded-xl bg-white p-8">
          <LogoCarousel />
        </div> */}

        <div className="hidden w-full rounded-xl bg-white p-8">
          <RotatingGradient />
        </div>
      </div>
    </div>
  );
}
