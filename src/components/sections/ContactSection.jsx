"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { companyDetails } from "@/data/siteContent";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      nextErrors.email = "Enter a valid email";
    if (!form.phone.trim()) nextErrors.phone = "Phone is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

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

    setSuccess("Demo form submitted successfully. No backend connected.");
    setForm(initialState);
  };

  return (
    <section id="contact" className="section-shell bg-[#F5F9FF]">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-brand-navy md:text-5xl">
            Let’s build your next win.
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F8FBFF] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Phone
                </p>
                <p className="text-base font-semibold text-brand-navy">
                  {companyDetails.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F8FBFF] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Email
                </p>
                <p className="text-base font-semibold text-brand-navy">
                  {companyDetails.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F8FBFF] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Office
                </p>
                <p className="text-base font-semibold text-brand-navy">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="md:col-span-1">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                placeholder="Tell us how we can help"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
              <Send size={18} />
            </button>
            {success && (
              <p className="text-sm font-medium text-brand-green">{success}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
