"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import ScrollReveal from "@/components/ui/Reveal";
import HeroVisual from "@/components/sections/HeroVisual";

export default function Hero() {
  const trustBadges = siteContent.hero.trustBadges;

  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-[radial-gradient(circle_at_top_left,_rgba(79,163,247,0.18),_transparent_38%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] pb-20 pt-10 md:pb-20 md:pt-14"
    >
      <div className="container hero-grid">
        <ScrollReveal direction="left" className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.14em] text-brand-navy shadow-sm backdrop-blur sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
            <Sparkles
              size={14}
              className="shrink-0 text-brand-blue"
              strokeWidth={2.4}
            />
            {siteContent.hero.eyebrow}
          </div>

          <h1 className="max-w-xl text-[2.1rem] font-extrabold leading-[1.06] tracking-[-0.06em] text-brand-navy sm:text-5xl md:text-6xl xl:text-7xl">
            <span className="block">Secure. Smart.</span>
            <span className="text-brand-gradient">Simplified.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
            {siteContent.hero.subtext}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/#services" className="btn-primary w-full sm:w-auto">
              {siteContent.hero.primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#partners"
              className="btn-secondary w-full sm:w-auto"
            >
              {siteContent.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-6 text-base font-semibold text-brand-navy sm:mt-8 sm:text-lg">
            Secure • Smart • Simplified
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:flex sm:flex-wrap sm:gap-3.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-brand-blue/10 bg-white/80 px-1.5 py-2 text-[0.62rem] font-semibold leading-tight text-brand-navy sm:justify-start sm:gap-2 sm:px-3.5 sm:py-2.5 sm:text-[0.8rem]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-green to-brand-lime shadow-[0_0_0_3px_rgba(46,168,79,0.12)]" />
                {badge}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
