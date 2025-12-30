export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-muted-foreground text-lg">
          Choose a plan that fits your learning pace. No hidden costs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Weekly */}
        <PricingCard
          title="Weekly"
          price="₹199"
          description="Short-term access for quick exploration."
          features={[
            "Access to all features",
            "Dashboard & analytics",
            "Performance examples",
          ]}
        />

        {/* Monthly */}
        <PricingCard
          highlighted
          title="Monthly"
          price="₹499"
          description="Best for consistent learning and practice."
          features={[
            "Everything in Weekly",
            "Advanced optimization patterns",
            "Architecture deep dives",
          ]}
        />

        {/* Yearly */}
        <PricingCard
          title="Yearly"
          price="₹3999"
          description="Complete learning journey at the best value."
          features={[
            "Everything in Monthly",
            "Future updates",
            "Extended project scope",
          ]}
        />
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-8 bg-white ${
        highlighted
          ? "border-primary shadow-md"
          : "border-border"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>

      <ul className="space-y-3 text-sm mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button className="w-full rounded-lg bg-primary text-white py-2 text-sm font-medium hover:opacity-90">
        Get Started
      </button>
    </div>
  );
}
