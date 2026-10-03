"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Wallet2,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import ScrollReveal from "@/components/ui/Reveal";

export default function Hero() {
  const trustBadges = siteContent.hero.trustBadges;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(79,163,247,0.18),_transparent_38%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] pb-16 pt-10 md:pb-20 md:pt-14"
    >
      <div className="container hero-grid">
        <ScrollReveal direction="left" className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy shadow-sm backdrop-blur">
            <Sparkles size={14} className="text-brand-blue" />
            {siteContent.hero.eyebrow}
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.06em] text-brand-navy md:text-6xl xl:text-7xl">
            <span className="block">Secure. Smart.</span>
            <span className="text-brand-gradient">Simplified.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            {siteContent.hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/#services" className="btn-primary">
              {siteContent.hero.primaryCta}
              <ArrowRight size={18} />
            </Link>
            <Link href="/#partners" className="btn-secondary">
              {siteContent.hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-8 text-lg font-semibold text-brand-navy">
            Secure • Smart • Simplified
          </div>

          <div className="hero-trust">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.12} className="relative">
          <div className="orb orb-blue" aria-hidden="true" />
          <div className="orb orb-green" aria-hidden="true" />

          <div className="floating-card primary">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green">
              <Wallet2 size={20} />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Wallet
              </p>
              <p className="text-sm font-bold text-brand-navy">₹ 84,250</p>
            </div>
          </div>

          <div className="floating-card secondary">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Protected
              </p>
              <p className="text-sm font-bold text-brand-navy">Live secure</p>
            </div>
          </div>

          <div className="big-rupee" aria-label="TrustMint pay graphic">
            <div className="speed-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
