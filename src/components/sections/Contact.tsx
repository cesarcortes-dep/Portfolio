"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.01 3.25 9.26 7.76 10.76.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.16.69-3.83-1.35-3.83-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.52-.29-5.18-1.26-5.18-5.6 0-1.24.45-2.25 1.17-3.04-.12-.29-.51-1.43.11-2.98 0 0 .96-.31 3.15 1.16.91-.25 1.89-.38 2.86-.38s1.95.13 2.86.38c2.19-1.47 3.15-1.16 3.15-1.16.62 1.55.23 2.69.11 2.98.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.2 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.5-1.5 7.74-5.75 7.74-10.76C23.33 5.56 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Contact() {
  const { personal, socials } = portfolio;

  return (
    <section
      id="contact"
      className="relative border-t border-border py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="text-accent">04 //</span> Contact
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="display max-w-4xl text-[clamp(2.25rem,7vw,6rem)] text-fg"
          >
            Got a project{" "}
            <span className="text-fg-dim">
              that deserves real
            </span>{" "}
            front-end work?
          </motion.h2>

          <motion.a
            variants={fadeUp}
            href={`mailto:${personal.email}`}
            className="group mt-16 inline-flex max-w-full items-baseline gap-3 text-fg md:mt-24"
          >
            <span className="display-bold break-all text-[clamp(1.75rem,5vw,4rem)] underline decoration-fg-dim decoration-1 underline-offset-[0.15em] transition-colors group-hover:text-accent group-hover:decoration-accent">
              {personal.email}
            </span>
            <ArrowUpRight
              className="shrink-0 text-fg-dim transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
              size={28}
            />
          </motion.a>

          <motion.div
            variants={fadeUp}
            className="mt-20 grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-16"
          >
            <div className="md:col-span-6">
              <p className="mono mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-fg-dim">
                Elsewhere
              </p>
              <ul className="flex flex-col gap-3">
                {socials.map((s) => {
                  const Icon = ICONS[s.platform];
                  return (
                    <li key={s.platform}>
                      <a
                        href={s.href}
                        target={s.platform === "email" ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 text-base text-fg transition-colors hover:text-accent"
                      >
                        <Icon size={18} />
                        <span className="link-underline">{s.label}</span>
                        <span className="mono text-xs text-fg-dim">
                          {s.platform === "email"
                            ? personal.email
                            : new URL(s.href).host.replace("www.", "")}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="md:col-span-6">
              <p className="mono mb-3 text-[0.7rem] uppercase tracking-[0.2em] text-fg-dim">
                Direct
              </p>
              <dl className="space-y-2 text-sm text-fg">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                  <dt className="mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                    Phone
                  </dt>
                  <dd>{personal.phone}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                  <dt className="mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                    Based
                  </dt>
                  <dd>{personal.location}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
                  <dt className="mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                    Status
                  </dt>
                  <dd className="flex items-center gap-2 text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Open to senior roles
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>

          <motion.footer
            variants={fadeUp}
            className="mono mt-24 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-[0.7rem] uppercase tracking-[0.18em] text-fg-dim md:flex-row md:items-center"
          >
            <span>© {new Date().getFullYear()} {personal.shortName}</span>
            <span>
              Built with Next.js · Framer Motion ·{" "}
              <span className="text-accent">//</span> handcrafted
            </span>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
