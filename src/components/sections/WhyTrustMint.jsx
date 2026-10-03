import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Star,
  WalletCards,
} from "lucide-react";
import ScrollReveal from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";

export default function WhyTrustMint() {
  return (
    <section id="about" className="section-shell">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ScrollReveal
          direction="left"
          className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#0B3B91_0%,#1E6FD9_52%,#2FA84F_100%)] p-8 text-white shadow-glow md:p-10"
        >
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-12 left-8 h-48 w-48 rounded-full bg-brand-lime/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Why TrustMint Pay
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">
              Clear systems. Real support. Better growth.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                [
                  "Transparent commissions",
                  "A clean payout approach that keeps your earnings clear and easy to understand.",
                ],
                [
                  "Helpful support",
                  "Responsive guidance when you need quick decisions or service resolution.",
                ],
                [
                  "Security-first experience",
                  "Built around trusted workflows and safer daily operations.",
                ],
              ].map(([title, text]) => (
                <ScrollReveal
                  key={title}
                  direction={
                    title === "Transparent commissions" ||
                    title === "Security-first experience"
                      ? "left"
                      : "right"
                  }
                  delay={0.08}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-lg font-bold">{title}</p>
                  <p className="mt-1 text-sm text-blue-50/80">{text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <Star size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Built for business
                </p>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Support that feels local and smart
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {siteContent.reasons.map((reason, index) => (
                <ScrollReveal
                  key={reason}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.06 * index}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F8FBFF] p-4"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-base font-medium leading-7 text-slate-700">
                    {reason}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
