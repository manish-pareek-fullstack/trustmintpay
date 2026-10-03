"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ReceiptText,
  WalletCards,
  Smartphone,
  IdCard,
  Landmark,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";

const iconMap = {
  ShieldCheck,
  ReceiptText,
  WalletCards,
  Smartphone,
  IdCard,
  Landmark,
};

export default function Services() {
  return (
    <section id="services" className="section-shell bg-white">
      <div className="container">
        <ScrollReveal direction="up" className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Services
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.06em] text-brand-navy md:text-5xl">
            Built for daily digital life.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.map((service, index) => {
            const Icon = iconMap[service.icon] || ShieldCheck;

            return (
              <ScrollReveal
                key={service.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
                className="h-full"
              >
                <motion.article
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.2 }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-6 shadow-soft transition hover:border-brand-blue/30 hover:shadow-glow"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
