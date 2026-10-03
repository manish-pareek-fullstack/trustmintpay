"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function AuthSplit({ mode = "login" }) {
  const isLogin = mode === "login";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!isLogin && !form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      nextErrors.email = "Enter a valid email";
    if (!form.password.trim()) nextErrors.password = "Password is required";
    else if (form.password.length < 6)
      nextErrors.password = "Use at least 6 characters";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSuccess("");
      return;
    }

    setSuccess(
      isLogin
        ? "Demo login successful. No backend connected."
        : "Demo signup successful. No backend connected.",
    );
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <main className="section-shell bg-[radial-gradient(circle_at_top_left,_rgba(79,163,247,0.12),_transparent_25%),linear-gradient(180deg,#F8FBFF_0%,#ffffff_100%)]">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft md:grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0B3B91_0%,#1E6FD9_45%,#2FA84F_100%)] p-6 text-white md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 left-0 h-48 w-48 rounded-full bg-brand-lime/20 blur-3xl" />

            <div className="relative">
              <Link
                href="/"
                className="inline-flex rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur"
              >
                <Image
                  src="/logo/trustmint-logo.png"
                  alt="TrustMint Pay"
                  width={360}
                  height={140}
                  className="h-12 w-[170px] object-contain sm:w-[220px]"
                />
              </Link>

              <div className="mt-10 space-y-5">
                <h1 className="text-3xl font-extrabold tracking-[-0.05em] md:text-5xl">
                  {isLogin ? "Welcome back." : "Create your TrustMint account."}
                </h1>
                <p className="max-w-md text-base leading-7 text-blue-50/80">
                  Secure digital banking and everyday service access designed
                  for faster, simpler, more transparent business growth.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Fast and secure onboarding",
                  "Transparent service workflows",
                  "Support built for local business growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <CheckCircle2 size={18} />
                    </span>
                    <span className="font-medium text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {isLogin ? "Login" : "Signup"}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-brand-navy">
                  {isLogin ? "Access your dashboard" : "Start your journey"}
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <ShieldCheck size={22} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                {isLogin ? "Login to dashboard" : "Create account"}
                <ArrowRight size={18} />
              </button>

              {success && (
                <p className="text-sm font-medium text-brand-green">
                  {success}
                </p>
              )}
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              {isLogin ? "Not registered yet?" : "Already have an account?"}{" "}
              <Link
                href={isLogin ? "/signup" : "/login"}
                className="font-semibold text-brand-blue hover:text-brand-navy"
              >
                {isLogin ? "Create account" : "Login"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
