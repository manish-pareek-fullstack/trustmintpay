"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ navLinks }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setIsScrolled(window.scrollY > 14);
      setScrollProgress(progress);

      const sections = navLinks
        .map((link) => link.href.split("#")[1])
        .filter(Boolean);

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      setActiveHash(current || "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 shadow-soft backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="h-1 w-full bg-slate-200/80">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-sky to-brand-green transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          aria-label="TrustMint Pay home"
        >
          <div className="flex h-14 w-[180px] items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-sm">
            <Image
              src="/logo/trustmint-logo.png"
              alt="TrustMint Pay logo"
              width={360}
              height={140}
              className="h-10 w-[150px] object-contain sm:w-[180px]"
            />
          </div>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const anchor = link.href.split("#")[1] || "home";
            const isActive = activeHash === anchor;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="btn-ghost">
            Login
          </Link>
          <Link href="/signup" className="btn-primary">
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className="menu-toggle lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X size={18} strokeWidth={2.5} />
          ) : (
            <Menu size={18} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="container pb-4 lg:hidden">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 pt-2">
                <Link href="/login" className="btn-ghost w-full">
                  Login
                </Link>
                <Link href="/signup" className="btn-primary w-full">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
