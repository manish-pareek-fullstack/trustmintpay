"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  IndianRupee,
  Landmark,
  Leaf,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const BALANCE_TARGET = 84250;
const EASE_OUT = [0.22, 1, 0.36, 1];

const CHART_LINE =
  "M0,66 C14,64 28,58 42,56 C56,54 70,58 84,60 C98,62 112,46 126,42 C140,38 154,46 168,48 C182,50 196,30 210,28 C224,26 238,32 252,34 C266,36 280,18 288,12";
const CHART_AREA = `${CHART_LINE} L288,84 L0,84 Z`;

const ACTIONS = [
  { label: "AEPS", Icon: Landmark, tint: "bg-brand-blue/10 text-brand-blue" },
  { label: "BBPS", Icon: ReceiptText, tint: "bg-brand-sky/10 text-brand-sky" },
  {
    label: "Recharge",
    Icon: Smartphone,
    tint: "bg-brand-green/10 text-brand-green",
  },
];

const FLOATING = [
  {
    key: "payment",
    label: "Payment successful",
    value: "₹1,250",
    Icon: Check,
    shape: "rounded-full",
    tint: "bg-brand-green/10 text-brand-green",
    spin: "tm-float",
    place: "sm:top-[2%] sm:right-[2%]",
    delay: 0.36,
  },
  {
    key: "secure",
    label: "Protected",
    value: "Live secure",
    Icon: ShieldCheck,
    shape: "rounded-xl",
    tint: "bg-brand-blue/10 text-brand-blue",
    spin: "tm-float-late",
    place: "sm:bottom-[2%] sm:left-[2%]",
    delay: 0.5,
  },
];

function useBalanceCountUp(reduceMotion) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(BALANCE_TARGET);
      return;
    }

    let frame;
    const duration = 1100;
    const delay = 260;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min(
        Math.max((now - startedAt - delay) / duration, 0),
        1
      );
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(BALANCE_TARGET * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return value;
}

function GrowthChart({ reduceMotion }) {
  return (
    <svg
      viewBox="0 0 300 84"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-[64px] w-full sm:h-[74px] lg:h-[84px]"
    >
      <defs>
        <linearGradient id="tm-hero-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4FA3F7" />
          <stop offset="55%" stopColor="#1E6FD9" />
          <stop offset="100%" stopColor="#2FA84F" />
        </linearGradient>
        <linearGradient id="tm-hero-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E6FD9" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2FA84F" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <g stroke="#1E6FD9" strokeOpacity="0.1" strokeWidth="1">
        <line x1="0" y1="20" x2="300" y2="20" strokeDasharray="3 6" />
        <line x1="0" y1="48" x2="300" y2="48" strokeDasharray="3 6" />
        <line x1="0" y1="76" x2="300" y2="76" strokeDasharray="3 6" />
      </g>

      <motion.path
        d={CHART_AREA}
        fill="url(#tm-hero-area)"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.7, delay: 1.1, ease: "easeOut" }
        }
      />

      <motion.path
        d={CHART_LINE}
        fill="none"
        stroke="url(#tm-hero-line)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        initial={reduceMotion ? false : { strokeDashoffset: 1 }}
        animate={{ strokeDashoffset: 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 1.25, delay: 0.45, ease: "easeInOut" }
        }
      />

      <motion.circle
        cx="288"
        cy="12"
        r="4.5"
        fill="#2FA84F"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.4, delay: 1.45, ease: "easeOut" }
        }
      />
    </svg>
  );
}

function FloatingCard({ config, reduceMotion }) {
  const { Icon, label, value, shape, tint, spin, place, delay } = config;

  return (
    <motion.div
      className={`relative z-20 sm:absolute ${place}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: EASE_OUT }
      }
    >
      <div
        className={`${spin} flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/95 px-3 py-2.5 shadow-[0_14px_34px_rgba(11,59,145,0.14)] backdrop-blur-[6px] sm:rounded-[1.15rem]`}
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center ${shape} ${tint}`}
        >
          <Icon
            className="h-[0.9rem] w-[0.9rem] sm:h-4 sm:w-4"
            strokeWidth={2.6}
          />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.52rem] font-semibold uppercase leading-tight tracking-[0.14em] text-slate-500 sm:text-[0.56rem]">
            {label}
          </span>
          <span className="block truncate text-[0.72rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy sm:text-[0.8rem]">
            {value}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const balance = useBalanceCountUp(reduceMotion);

  return (
    <div className="mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[480px]">
      <div className="relative flex flex-col sm:p-[9%]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[118%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 48% 42%, rgba(79,163,247,0.32) 0%, rgba(126,217,87,0.22) 44%, rgba(255,255,255,0) 72%)",
          }}
        />

        <IndianRupee
          aria-hidden="true"
          strokeWidth={1.1}
          className="pointer-events-none absolute left-[-4%] top-[-8%] z-0 h-[40%] w-auto -rotate-6 text-brand-navy/[0.06]"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[10%] top-[70%] z-0 h-1.5 w-1.5 rounded-full bg-brand-blue/35 sm:left-[1%] sm:top-[7%] sm:h-2 sm:w-2 sm:bg-brand-sky/40"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[10%] top-[70%] z-0 h-1.5 w-1.5 rounded-full bg-brand-lime/50 sm:bottom-[8%] sm:right-[2%] sm:top-auto sm:h-2.5 sm:w-2.5"
        />
        <Leaf
          aria-hidden="true"
          strokeWidth={1.5}
          className="pointer-events-none absolute right-[1%] top-[15%] z-0 hidden h-4 w-4 -rotate-12 text-brand-green/30 sm:block"
        />

        <motion.div
          className="hero-card-hover relative z-10 w-full"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.75, delay: 0.1, ease: EASE_OUT }
          }
        >
          <div
            aria-hidden="true"
            className="hero-glow pointer-events-none absolute inset-[-7%] -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_50%_62%,rgba(47,168,79,0.3),rgba(30,111,217,0.26)_54%,rgba(255,255,255,0)_78%)]"
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[5%] top-[3%] bottom-[3%] -z-10 rounded-[2rem] border border-brand-sky/25 bg-white/60"
            initial={
              reduceMotion ? false : { opacity: 0, y: 16, rotate: -3.5 }
            }
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.22, ease: EASE_OUT }
            }
          />

          <div className="hero-card-surface relative rounded-[1.5rem] bg-gradient-to-br from-brand-sky via-brand-blue to-brand-green p-px shadow-[0_24px_60px_rgba(11,59,145,0.16)] sm:rounded-[1.85rem]">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-[linear-gradient(160deg,#ffffff_0%,#f7fbff_58%,#f3faf5_100%)] p-4 sm:rounded-[1.8rem] sm:p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.6rem] bg-brand-gradient text-white shadow-[0_6px_14px_rgba(30,111,217,0.28)] sm:h-8 sm:w-8">
                  <ShieldCheck
                    className="h-[0.9rem] w-[0.9rem] sm:h-[1.05rem] sm:w-[1.05rem]"
                    strokeWidth={2.4}
                  />
                </span>
                <span className="text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.16em] text-slate-500 sm:text-[0.65rem] sm:tracking-[0.2em]">
                  Wallet balance
                </span>
              </div>

              <p className="mt-2.5 text-[1.55rem] font-extrabold leading-none tracking-[-0.045em] text-brand-navy sm:mt-3.5 sm:text-[2.1rem]">
                ₹{balance.toLocaleString("en-IN")}
              </p>

              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand-green/10 px-2 py-[0.2rem] text-[0.55rem] font-bold leading-tight text-brand-green sm:mt-2.5 sm:text-[0.62rem]">
                <TrendingUp className="h-2.5 w-2.5" strokeWidth={3} />
                +12.4% this week
              </span>

              <div className="mt-3 sm:mt-4">
                <GrowthChart reduceMotion={reduceMotion} />
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-[0.55rem]">
                <span>Balance trend</span>
                <span className="rounded-md bg-brand-mint px-1.5 py-0.5 text-brand-green">
                  7D
                </span>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:mt-3 sm:gap-2">
                {ACTIONS.map(({ label, Icon, tint }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-[#F5F9FF] px-1 py-2 sm:gap-1.5 sm:rounded-2xl sm:py-2.5"
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-lg sm:h-7 sm:w-7 ${tint}`}
                    >
                      <Icon
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        strokeWidth={2.2}
                      />
                    </span>
                    <span className="text-[0.53rem] font-bold leading-none tracking-[-0.01em] text-brand-navy sm:text-[0.6rem]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="z-20 mt-2.5 grid gap-2.5 sm:contents">
          {FLOATING.map((config) => (
            <FloatingCard
              key={config.key}
              config={config}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
