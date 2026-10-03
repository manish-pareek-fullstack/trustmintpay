"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, CreditCard, HandCoins } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import ScrollReveal from "@/components/ui/Reveal";

const icons = [BadgeCheck, CreditCard, HandCoins];
const cardMotion = [
  {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.65, ease: "easeOut" },
  },
  {
    initial: { opacity: 0, y: 38, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, ease: "easeOut", delay: 0.12 },
  },
  {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.65, ease: "easeOut", delay: 0.2 },
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const cardDirections = ["left", "right", "left"];

  return (
    <section
      id="how-it-works"
      className="section-shell overflow-x-clip bg-[linear-gradient(180deg,#F5F9FF_0%,#ffffff_100%)]"
    >
      <div className="container">
        <ScrollReveal
          direction="up"
          delay={0.1}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.06em] text-brand-navy md:text-5xl">
            Start simple. Grow faster.
          </h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0.4 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.45 }}
            className="absolute left-1/2 top-14 hidden h-1 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue via-brand-sky to-brand-green md:block"
          />

          <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
            {siteContent.steps.map((step, index) => {
              const Icon = icons[index];
              const direction = cardDirections[index];
              const animation = cardMotion[index];

              return (
                <ScrollReveal
                  key={step.title}
                  direction={direction}
                  delay={0.12 * index}
                  className="relative h-full"
                >
                  <motion.div
                    initial={reduceMotion ? false : animation.initial}
                    whileInView={
                      reduceMotion ? undefined : animation.whileInView
                    }
                    viewport={{ once: true, amount: 0.3 }}
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            ...animation.transition,
                            delay:
                              (animation.transition.delay ?? 0) + index * 0.08,
                          }
                    }
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            boxShadow: "0 22px 50px rgba(30,111,217,0.16)",
                          }
                    }
                    className="relative h-full"
                  >
                    <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:border-brand-blue/30 hover:shadow-glow">
                      <motion.div
                        initial={
                          reduceMotion ? false : { scale: 0.8, opacity: 0 }
                        }
                        whileInView={
                          reduceMotion ? undefined : { scale: 1, opacity: 1 }
                        }
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: 0.2 + index * 0.1,
                        }}
                        className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow"
                      >
                        <Icon size={28} />
                      </motion.div>

                      <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-brand-navy">
                        {step.title}
                      </h3>
                      <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
