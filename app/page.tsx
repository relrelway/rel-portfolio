"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";
import { FaGithubAlt, FaTwitter, FaInstagram } from "react-icons/fa";
const Carousel = dynamic(() => import("@/components/Carousel"));
const LogosWidget = dynamic(() => import("./lab/LogosWidget"));
const FAQ = dynamic(() => import("@/components/FAQ").then((m) => m.FAQ));

const SkillsTag = ({ children }: { children: string }) => {
  return (
    <span
      className={
        "inline-flex items-center mt-1 px-2.5 py-0.5 rounded-md text-sm font-medium mr-2 bg-slate-800 text-white"
      }
    >
      {children}
    </span>
  );
};

export default function Home() {
  const about =
    "Hallo - I'm a fullstack dev and designer focused on trying to build snappy user interfaces and performant, scalable, and future-proof applications. I also enjoy taking photographs of pretty things and sunsets.";

  const links = [
    {
      name: "Twitter",
      url: "https://twitter.com/relrelway",
      icon: <FaTwitter />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/relrelway",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/relrelway",
      icon: <FaInstagram />,
      target: "_blank",
    },
    {
      name: "Layers",
      url: "https://layers.to/relrelway",
      icon: <Layers />,
      target: "_blank",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-b from-pink-50 via-slate-50">
      <div className="max-w-xl mx-auto">
        <header className="pt-12 max-w-xl mx-auto">
          <span className="text-indigo-500">‧₊˚✩ ₊˚⊹♡</span>
          <h1 className="font-semibold text-2xl">Farrell D.</h1>
          <h4 className="text-slate-400 text-lg">
            Frontend @{" "}
            <Link
              href="https://instagram.com/lumabonapp"
              target="_blank"
              className="underline cursor-alias text-indigo-500 font-semibold"
            >
              Lumabon
            </Link>
          </h4>
          <div className="mt-4 flex divide-x gap-2">
            {links.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, scale: 0.3, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                }}
                className="h-10 w-10 text-slate-600 bg-white shadow-sm hover:text-indigo-600 text-xl rounded-xl flex items-center justify-center border border-slate-200"
                key={link.name}
                href={link.url}
                target={link.target}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </header>

        <section id="aboutWidget" className="my-4 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
            }}
          >
            <div className="px-4 py-3 rounded-xl bg-white shadow-sm border">
              <div className="flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500">
                about_me.mow
              </div>
              <p className="mt-2 text-slate-800 font-mono">
                {about.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: index * 0.025,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 6.5,
                    type: "ease",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                  className="h-4 w-1 -mb-0.5 bg-orange-500 inline-block"
                ></motion.span>
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      <h2 className="text-center font-semibold text-slate-400 text-xl mt-14">
        my stuff :)
      </h2>
      <div className="max-w-xl grid grid-cols-12 mx-auto mt-6 gap-6">
        <div className="col-span-12">
          <div className="flex flex-col">
            <h1 className={"font-medium text-sm opacity-50"}>
              {"Main Technologies I work with"}
            </h1>
            <div className="bg-white max-w-xl w-full rounded-xl shadow-sm border p-2 mt-2">
              <LogosWidget />
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="flex flex-col">
            <h1 className={"font-medium text-sm opacity-50"}>{"Skills"}</h1>
            <div className="max-w-xl w-full rounded-xl mt-1">
              <SkillsTag>Javascript</SkillsTag>
              <SkillsTag>Typescript</SkillsTag>
              <SkillsTag>Tailwind</SkillsTag>
              <SkillsTag>Framer Motion</SkillsTag>
              <SkillsTag>React Web/Native</SkillsTag>
              <SkillsTag>Next.js</SkillsTag>
              <SkillsTag>Node.js</SkillsTag>
              <SkillsTag>Supabase</SkillsTag>
              <SkillsTag>Postgres</SkillsTag>
              <SkillsTag>Vercel</SkillsTag>
              <SkillsTag>Prisma ORM</SkillsTag>
              <SkillsTag>drinking matcha :)</SkillsTag>
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <h1 className={"font-medium text-sm opacity-50"}>
            {"Photos I took"}
          </h1>
          <div className="bg-white max-w-xl w-full rounded-xl shadow-sm border p-2 mt-2">
            <Carousel />
          </div>
        </div>

        <div className="col-span-12"></div>
        {/* <div className="col-span-12">
          <video
            src="/videos/opensource.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="w-full rounded-xl shadow-sm border"
          />
        </div> */}
        {/* <div className="col-span-12">
          <StreaksWidget />
        </div> */}
      </div>

      <div className="max-w-xl mx-auto mt-12">
        <h2 className="mb-2">FAQ</h2>
        <FAQ />
      </div>

      <footer className="mt-24 p-12 rounded-lg text-center flex flex-col items-center">
        {/* <Image src="/signature.svg" width="180" height="100" alt="Signature" /> */}
        <h1 className={"font-semibold text-lg md:text-xl opacity-70 leading-6"}>
          {"That's it, for now, for more to come."}
        </h1>
        <h2 className={"font-medium text-sm opacity-70 text-green-800"}>
          {"Fun fact: I love matcha, a heck ton."}
        </h2>
        <h2 className={"font-medium text-sm md:text-base opacity-60 mt-6"}>
          {"Happy new years! 🎉"}
        </h2>
        {/* <h3 className={"font-medium text-xs opacity-30"}>
          {"Credits to Jordi Enric (@jordienr on github)"}
        </h3> */}
      </footer>
    </div>
  );
}
