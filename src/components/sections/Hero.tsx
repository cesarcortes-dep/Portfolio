"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const { personal } = portfolio;
  const firstName = "César";
  const lastName = "Cortés";

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24"
    >
      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-[1400px] px-6 md:px-10"
      >
        <motion.div
          variants={item}
          className="eyebrow mb-10 flex items-center gap-3 md:mb-16"
        >
          <span className="text-accent">01 //</span> Intro
          <span className="h-px w-8 bg-fg-muted" />
          Portfolio &apos;27
        </motion.div>

        <h1 className="display text-[clamp(3.25rem,14vw,11rem)] text-fg">
          <motion.span variants={item} className="block">
            {firstName}
          </motion.span>
          <motion.span variants={item} className="block">
            <span className="mr-[0.08em] text-fg-dim">—</span>
            {lastName}
            <span className="inline-block translate-y-[-0.15em] text-[0.3em] text-accent">
              ●
            </span>
          </motion.span>
        </h1>

        <motion.div
          variants={item}
          className="mt-10 grid gap-6 md:mt-14 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-6">
            <p className="mono text-xs uppercase tracking-[0.18em] text-fg-muted">
              {personal.role} · React · React Native · TypeScript
            </p>
            <p className="mt-4 max-w-lg text-lg font-light text-fg md:text-xl">
              {personal.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-6 md:items-end md:justify-end md:text-right">
            <div className="mono text-xs uppercase tracking-[0.18em] text-fg-muted">
              Currently
            </div>
            <div className="text-sm text-fg md:text-base">
              Based in{" "}
              <span className="text-accent">
                {personal.location}
              </span>
            </div>
            <div className="text-sm text-fg-muted">
              English C1 · 5 yrs shipping production UI
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-fg-muted transition-colors hover:text-accent"
      >
        <span className="mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
