import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-primary">
          GrowthBoard
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="text-primary font-medium hover:underline"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
