"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolio } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "home", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border bg-bg/75 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#home"
            className="mono text-[0.8rem] font-medium tracking-tight text-fg"
          >
            <span className="text-accent">//</span>{" "}
            {portfolio.personal.shortName.toLowerCase().replace(" ", "_")}
          </a>

          <ul className="mono hidden items-center gap-8 text-[0.75rem] uppercase tracking-[0.15em] text-fg-muted md:flex">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-underline transition-colors hover:text-fg"
                >
                  <span className="mr-1 text-accent">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            {portfolio.personal.availableForWork && (
              <span className="mono flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available
              </span>
            )}
            <a
              href={portfolio.personal.cvUrl}
              download
              className="mono group flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.15em] text-fg transition-colors hover:border-accent hover:text-accent"
            >
              CV
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-10">
              <ul className="flex flex-col gap-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="display flex items-baseline gap-4 text-5xl font-light text-fg"
                    >
                      <span className="mono text-xs text-accent">
                        0{i + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href={portfolio.personal.cvUrl}
                download
                className="mono mt-16 inline-flex w-fit items-center gap-2 rounded-full border border-accent px-5 py-2 text-xs uppercase tracking-[0.2em] text-accent"
              >
                Download CV <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
