import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-white px-6 py-8">
        <h2 className="text-xl font-semibold text-primary mb-8">
          GrowthBoard
        </h2>

        <nav className="space-y-2 text-sm">
          <SidebarLink href="/dashboard">Overview</SidebarLink>
          <SidebarLink href="/dashboard/campaigns">Campaigns</SidebarLink>
          <SidebarLink href="/dashboard/analytics">Analytics</SidebarLink>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-border bg-white px-8 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <Button size="sm">New Campaign</Button>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-primary-light hover:text-primary transition"
    >
      {children}
    </Link>
  );
}
