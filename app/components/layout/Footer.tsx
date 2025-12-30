export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} GrowthBoard. Built for performance-focused frontend learning.
      </div>
    </footer>
  );
}
