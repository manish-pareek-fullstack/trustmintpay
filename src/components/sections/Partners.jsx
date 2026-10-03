"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  Landmark,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";

const icons = [Users, BriefcaseBusiness, Building2, Landmark];

export default function Partners() {
  return (
    <section id="partners" className="section-shell bg-[#F8FBFF]">
      <div className="container">
        <ScrollReveal direction="up" className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Partners
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.06em] text-brand-navy md:text-5xl">
            Opportunities designed for growth.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {siteContent.partnerTiers.map((tier, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal
                key={tier.name}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-glow">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {tier.name}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                    {tier.description}
                  </p>
                  <div className="mt-5 rounded-2xl border border-brand-blue/10 bg-brand-light p-3 text-sm font-medium text-brand-navy">
                    {tier.benefit}
                  </div>
                  <Link
                    href="/signup"
                    className="btn-primary mt-6 w-full justify-center"
                  >
                    {tier.cta}
                    <ArrowRight size={18} />
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
