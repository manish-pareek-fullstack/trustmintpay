import ScrollReveal from "@/components/ui/Reveal";
import AnimatedCount from "@/components/ui/AnimatedCount";
import { siteContent } from "@/data/siteContent";

export default function StatsStrip() {
  return (
    <section
      aria-label="Platform statistics"
      className="relative -mt-4 pb-4 md:pb-8"
    >
      <div className="container">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-soft backdrop-blur md:grid-cols-2 xl:grid-cols-4 xl:p-6">
          {siteContent.stats.map((item, index) => (
            <ScrollReveal
              key={item.label}
              direction="up"
              delay={index * 0.08}
              className="rounded-[1.5rem] border border-slate-100 bg-[#F8FBFF] p-5"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-xl font-bold text-white shadow-glow">
                {item.prefix || item.value >= 100 ? "₹" : "•"}
              </div>
              <div className="text-3xl font-extrabold tracking-[-0.06em] text-brand-navy">
                <AnimatedCount
                  value={item.value}
                  prefix={item.prefix || ""}
                  suffix={item.suffix || ""}
                />
              </div>
              <p className="mt-2 text-base font-semibold text-slate-700">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
