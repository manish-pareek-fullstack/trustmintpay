"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";

function round(value) {
  return Math.round(value * 10) / 10;
}

function rect(el) {
  const r = el.getBoundingClientRect();
  return { t: round(r.top), b: round(r.bottom), l: round(r.left), r: round(r.right), w: round(r.width), h: round(r.height) };
}

function overlap(a, b) {
  const w = Math.min(a.r, b.r) - Math.max(a.l, b.l);
  const h = Math.min(a.b, b.b) - Math.max(a.t, b.t);
  if (w <= 0 || h <= 0) return { w: 0, h: 0 };
  return { w: round(w), h: round(h) };
}

export default function MeasurePage() {
  const [report, setReport] = useState("pending");

  useEffect(() => {
    const run = () => {
      const out = { viewport: { w: window.innerWidth, h: window.innerHeight } };
      const doc = document.documentElement;
      out.hScroll = doc.scrollWidth - doc.clientWidth;

      const section = document.querySelector("section#home");
      out.section = rect(section);

      const cols = section.querySelector(".hero-grid").children;
      out.colLeft = rect(cols[0]);
      out.colRight = rect(cols[1]);
      out.colHeightDiff = round(out.colLeft.h - out.colRight.h);

      const surface = section.querySelector(".hero-card-surface");
      out.card = rect(surface);
      out.glow = rect(section.querySelector(".hero-glow"));

      const chips = Array.from(section.querySelectorAll(".tm-float, .tm-float-late"));
      out.stage = rect(section.querySelector(".max-w-\\[340px\\]"));
      out.board = rect(chips[0].parentElement.parentElement);
      out.chips = chips.map((c) => {
        const r = rect(c);
        const parent = c.parentElement;
        const pcs = getComputedStyle(parent);
        const ccs = getComputedStyle(c);
        return {
          rect: r,
          wrap: rect(parent),
          pos: pcs.position,
          off: { t: pcs.top, r: pcs.right, b: pcs.bottom, l: pcs.left },
          boardPos: getComputedStyle(parent.parentElement).position,
          anim: ccs.animationName + " " + ccs.animationDuration,
          transform: ccs.transform,
        };
      });

      const inner = surface.firstElementChild;
      const parts = {};
      parts.header = rect(inner.children[0]);
      parts.amount = rect(inner.children[1]);
      parts.pill = rect(inner.children[2]);
      const chartWrap = inner.children[3];
      parts.chart = rect(chartWrap.querySelector("svg"));
      parts.trendRow = rect(inner.children[4]);
      parts.tiles = rect(inner.children[5]);
      const cs = getComputedStyle(inner);
      parts.padding = { top: cs.paddingTop, right: cs.paddingRight, bottom: cs.paddingBottom, left: cs.paddingLeft };
      out.parts = parts;

      out.chipVsContent = chips.map((c) => {
        const r = rect(c);
        const keys = Object.keys(parts).filter((k) => typeof parts[k] === "object" && parts[k].l !== undefined);
        const hits = {};
        keys.forEach((k) => {
          const o = overlap(r, parts[k]);
          if (o.w > 0 && o.h > 0) hits[k] = o;
        });
        const cardHit = overlap(r, out.card);
        return { hits, cardOverlap: cardHit };
      });

      const clipped = [];
      section.querySelectorAll("*").forEach((el) => {
        if (el.scrollWidth - el.clientWidth > 1 && el.clientWidth > 0) {
          clipped.push({ tag: el.tagName, cls: String(el.className).slice(0, 90), over: el.scrollWidth - el.clientWidth, text: (el.textContent || "").trim().slice(0, 40) });
        }
      });
      out.clipped = clipped;

      const vw = window.innerWidth;
      const spills = [];
      section.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0) return;
        const over = Math.max(r.right - vw, -r.left);
        if (over > 0.5) {
          spills.push({ tag: el.tagName, cls: String(el.className).slice(0, 60), over: round(over) });
        }
      });
      out.spills = spills.slice(0, 12);

      const sectionBottom = section.getBoundingClientRect().bottom;
      document.querySelectorAll("main *, section *, [id]").forEach(() => {});
      const stats = document.querySelector('[aria-label="Platform statistics"]');
      if (stats) {
        const cards = Array.from(stats.querySelectorAll(".rounded-\\[1\\.5rem\\]"));
        out.statCards = cards.map((c) => round(c.getBoundingClientRect().height));
      }
      out.sectionBottom = round(sectionBottom);

      setReport(JSON.stringify(out, null, 1));
    };

    const t = setTimeout(run, 4200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <StatsStrip />
      <pre id="report" style={{ whiteSpace: "pre-wrap", padding: "16px", fontSize: "11px" }}>
        {report}
      </pre>
    </>
  );
}
