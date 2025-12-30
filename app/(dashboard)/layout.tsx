import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-white p-6">
        <h2 className="text-lg font-semibold text-primary mb-6">
          GrowthBoard
        </h2>

        <nav className="space-y-4 text-sm">
          <Link href="/dashboard" className="block text-muted hover:text-foreground">
            Overview
          </Link>
          <Link href="/dashboard/campaigns" className="block text-muted hover:text-foreground">
            Campaigns
          </Link>
          <Link href="/dashboard/analytics" className="block text-muted hover:text-foreground">
            Analytics
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
