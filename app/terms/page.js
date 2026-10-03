export default function TermsPage() {
  return (
    <main className="section-shell">
      <div className="container max-w-4xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Terms
          </p>
          <h1 className="mb-4 text-4xl font-extrabold text-brand-navy md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mb-6 text-base leading-7 text-slate-600">
            This is a demo placeholder page for TrustMint Pay. Replace this
            content with your final legal terms before going live.
          </p>
          <div className="space-y-4 text-slate-700">
            <p>
              By using the platform, users agree to comply with our service
              rules, operational policies, and applicable laws governing digital
              payment services.
            </p>
            <p>
              TrustMint Pay provides a digital services experience intended for
              business and consumer use. Service availability and support may
              vary by region and operational conditions.
            </p>
            <p>
              The company may update these terms periodically to reflect changes
              in service features, security practices, or compliance
              requirements.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
