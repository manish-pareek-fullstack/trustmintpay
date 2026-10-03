import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ScrollReveal from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", icon: Facebook },
    { label: "Instagram", icon: Instagram },
    { label: "LinkedIn", icon: Linkedin },
    { label: "X", icon: Twitter },
  ];

  return (
    <footer className="relative mt-12 border-t border-slate-200 bg-[#F5F9FF]">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1fr]">
          <ScrollReveal direction="up" className="block">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white p-2 shadow-sm"
            >
              <Image
                src="/logo/trustmint-logo.png"
                alt="TrustMint Pay"
                width={360}
                height={140}
                className="h-10 w-[150px] object-contain sm:w-[180px]"
              />
            </Link>
            <p className="mt-5 max-w-xs text-base leading-7 text-slate-600">
              Secure • Smart • Simplified
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon }) => {
                const href =
                  label === "Facebook"
                    ? "https://www.facebook.com"
                    : label === "Instagram"
                      ? "https://www.instagram.com"
                      : label === "LinkedIn"
                        ? "https://www.linkedin.com"
                        : "https://x.com";

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-brand-blue hover:text-brand-blue"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="block">
            <h3 className="text-lg font-bold text-brand-navy">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                "AEPS Services",
                "BBPS Bill Payments",
                "Recharge",
                "Payment Solutions",
                "Account Opening",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/#services"
                    className="transition hover:text-brand-blue"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" className="block">
            <h3 className="text-lg font-bold text-brand-navy">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {siteContent.footer.company.map((item) => (
                <li key={item}>
                  <Link
                    href="/#about"
                    className="transition hover:text-brand-blue"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" className="block">
            <h3 className="text-lg font-bold text-brand-navy">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {siteContent.footer.support.map((item) => (
                <li key={item}>
                  <Link
                    href="/#contact"
                    className="transition hover:text-brand-blue"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" className="block">
            <h3 className="text-lg font-bold text-brand-navy">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {siteContent.footer.legal.map((item) => {
                const href =
                  item === "Privacy"
                    ? "/privacy"
                    : item === "Terms"
                      ? "/terms"
                      : "/privacy";

                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="transition hover:text-brand-blue"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal
          direction="up"
          className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 TrustMint Pay. All rights reserved.</p>
          <p>Demo front-end only. No backend connected.</p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
