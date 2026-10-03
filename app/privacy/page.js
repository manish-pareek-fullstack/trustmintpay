export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell">
      <div className="container max-w-4xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Privacy
          </p>
          <h1 className="mb-4 text-4xl font-extrabold text-brand-navy md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-6 text-base leading-7 text-slate-600">
            This is a demo placeholder page for TrustMint Pay. The content below
            is illustrative and should be replaced with your legal policy before
            launch.
          </p>
          <div className="space-y-4 text-slate-700">
            <p>
              We collect only the information needed to support secure access to
              our platform, maintain service quality, and help clients use our
              services responsibly.
            </p>
            <p>
              Personal data is stored securely, shared only as required for
              service operations, and handled in line with the applicable
              privacy requirements for your market.
            </p>
            <p>
              You may review, update, or request access to your data through
              your account settings or by contacting the support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
