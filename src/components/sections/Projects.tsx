"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Projects() {
  const { projects } = portfolio;
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative border-t border-border py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-16 flex flex-col justify-between gap-4 md:mb-24 md:flex-row md:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="eyebrow mb-6 flex items-center gap-3"
            >
              <span className="text-accent">02 //</span> Selected
              work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="display max-w-3xl text-[clamp(2.25rem,6vw,5rem)] text-fg"
            >
              Production UI for enterprise teams.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="mono max-w-xs text-xs uppercase tracking-[0.18em] text-fg-muted"
          >
            {projects.length} engagements · multi-year delivery across Globant
            clients
          </motion.p>
        </motion.div>

        {featured && <FeaturedCard project={featured} />}

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-6">
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              // Asymmetric: visual-heavy first row, tight 4+2 row, wide closer
              className={cn(
                i === 0 && "md:col-span-6",
                i === 1 && "md:col-span-4",
                i === 2 && "md:col-span-2",
                i === 3 && "md:col-span-6",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href ?? "#"}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noopener noreferrer" : undefined}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative block overflow-hidden border border-border bg-surface transition-colors hover:border-accent"
    >
      <div className="grid gap-0 md:grid-cols-12">
        <div className="relative aspect-[16/10] overflow-hidden md:col-span-7 md:aspect-auto">
          {project.image && (
            <motion.div
              variants={{ hover: { scale: 1.04 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-bg via-bg/30 to-transparent" />
          <div className="mono absolute left-4 top-4 flex items-center gap-2 bg-bg/70 px-2 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-accent backdrop-blur">
            Featured
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 p-6 md:col-span-5 md:p-10">
          <div>
            <p className="mono mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted">
              {project.client} · {project.period}
            </p>
            <h3 className="display-bold text-3xl text-fg md:text-4xl">
              {project.title}
            </h3>
            <p className="mono mt-2 text-xs text-fg-dim">
              {project.role}
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed text-fg-muted md:text-base">
              {project.summary}
            </p>
          </div>

          <div>
            <StackRow stack={project.stack} />
            <div className="mono mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-fg transition-colors group-hover:text-accent">
              View project
              <motion.span
                variants={{ hover: { x: 4, y: -4 } }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* accent reveal line on hover */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-px bg-accent"
        initial={{ width: 0 }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  );
}

function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <motion.a
      href={project.href ?? undefined}
      target={project.href ? "_blank" : undefined}
      rel={project.href ? "noopener noreferrer" : undefined}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className={cn(
        "group relative flex flex-col overflow-hidden border border-border bg-surface transition-colors hover:border-accent",
        className,
      )}
    >
      {project.image && (
        <div className="relative aspect-16/10 overflow-hidden border-b border-border md:aspect-21/9">
          <motion.div
            variants={{ hover: { scale: 1.04 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-bg/60 to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between gap-10 p-6 md:p-8">
        <div>
          <div className="mono mb-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted">
            <span>
              <span className="text-accent">
                0{index + 1}
              </span>{" "}
              · {project.client}
            </span>
            <span>{project.period}</span>
          </div>
          <h3 className="display-bold text-2xl text-fg md:text-3xl">
            {project.title}
          </h3>
          <p className="mono mt-2 text-xs text-fg-dim">{project.role}</p>
          <p className="mt-5 text-sm font-light leading-relaxed text-fg-muted">
            {project.summary}
          </p>

          <ul className="mt-6 space-y-2 border-l border-border-strong pl-4">
            {project.highlights.slice(0, 2).map((h) => (
              <li
                key={h}
                className="text-sm font-light leading-relaxed text-fg"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        <StackRow stack={project.stack} />
      </div>

      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-px bg-accent"
        initial={{ width: 0 }}
        variants={{ hover: { width: "100%" } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  );
}

function StackRow({ stack }: { stack: string[] }) {
  return (
    <ul className="mono flex flex-wrap gap-x-3 gap-y-1.5 text-[0.7rem] uppercase tracking-[0.15em] text-fg-muted">
      {stack.map((s) => (
        <li
          key={s}
          className="border border-border px-2 py-0.5"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}
