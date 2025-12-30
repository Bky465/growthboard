export default function FeaturesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Built for real-world frontend performance
        </h1>
        <p className="text-muted-foreground text-lg">
          GrowthBoard is a learning-focused SaaS-style platform designed to
          demonstrate production-grade frontend architecture, performance
          optimization, and rendering strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Next.js Rendering",
            desc: "SSR, SSG, and ISR used intentionally based on page requirements.",
          },
          {
            title: "Performance Optimized",
            desc: "Debounce, memoization, and render optimization built-in.",
          },
          {
            title: "Scalable Architecture",
            desc: "Feature-based component structure following real-world patterns.",
          },
          {
            title: "State Management",
            desc: "Redux Toolkit and GraphQL used where they make sense.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-white p-6 hover:shadow-sm transition"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
