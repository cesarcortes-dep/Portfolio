"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function About() {
  const { personal, stack, education } = portfolio;

  return (
    <section
      id="about"
      className="relative border-t border-border py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-16 md:grid-cols-12 md:gap-10"
        >
          {/* Left column — image + meta */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-4 md:sticky md:top-28 md:self-start"
          >
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-border grayscale transition-[filter] duration-700 hover:grayscale-0">
              <Image
                src={personal.aboutImg}
                alt={`${personal.name} portrait`}
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                className="object-cover"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/40" />
            </div>
            <dl className="mono mt-8 space-y-3 text-xs uppercase tracking-[0.15em]">
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <dt className="text-fg-dim">Based</dt>
                <dd className="text-fg">Medellín, CO</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <dt className="text-fg-dim">Exp</dt>
                <dd className="text-fg">5 yrs</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <dt className="text-fg-dim">Langs</dt>
                <dd className="text-fg">ES native · EN C1</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <dt className="text-fg-dim">Edu</dt>
                <dd className="text-right text-fg">
                  Tech. Systems
                  <br />
                  <span className="text-fg-dim">
                    {education[0].company}
                  </span>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Right column — narrative + stack */}
          <div className="md:col-span-8">
            <motion.p
              variants={fadeUp}
              className="eyebrow mb-6 flex items-center gap-3"
            >
              <span className="text-accent">03 //</span> About
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="display max-w-2xl text-[clamp(2rem,5vw,4rem)] text-fg"
            >
              Interfaces that ship{" "}
              <span className="text-fg-dim">on schedule</span> —
              not in a design doc.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-10 max-w-2xl space-y-5 text-base font-light leading-relaxed text-fg-muted md:text-lg"
            >
              <p>
                Front-End Engineer with{" "}
                <span className="text-fg">5 years</span> of
                production experience delivering complex, high-performance
                interfaces for enterprise clients across Globant&apos;s portfolio.
              </p>
              <p>
                Sole owner of full mobile UI implementations in{" "}
                <span className="text-fg">React Native</span>{" "}
                and lead contributor on{" "}
                <span className="text-fg">
                  React.js / TypeScript
                </span>{" "}
                web platforms serving thousands of end users. Consistent track
                record of shipping on time in Agile environments, collaborating
                directly with stakeholders, and producing component
                architectures that reduce future development time.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="mt-10 max-w-2xl border-l-2 border-accent pl-5 text-base font-light text-fg md:text-lg"
            >
              {personal.seekingStatement}
            </motion.blockquote>

            <motion.div variants={fadeUp} className="mt-16">
              <p className="eyebrow mb-6">Stack</p>
              <div className="grid gap-10 md:grid-cols-2">
                <StackGroup label="Frontend" items={stack.frontend} />
                <StackGroup
                  label="State & Architecture"
                  items={stack.stateArchitecture}
                />
                <StackGroup label="UI Frameworks" items={stack.uiFrameworks} />
                <StackGroup
                  label="Cloud & Backend"
                  items={stack.cloudBackend}
                />
                <StackGroup
                  label="Tooling"
                  items={stack.tooling}
                  className="md:col-span-2"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StackGroup({
  label,
  items,
  className,
}: {
  label: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mono mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-fg-dim">
        {label}
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {items.map((tech) => (
          <li
            key={tech}
            className="mono text-sm text-fg transition-colors hover:text-accent"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
