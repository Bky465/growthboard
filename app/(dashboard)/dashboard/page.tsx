import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Active Campaigns" value="12" />
        <StatCard title="Total Conversions" value="1,248" />
        <StatCard title="Conversion Rate" value="3.6%" />
      </div>

      {/* Placeholder section */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Analytics and charts will appear here once data integration is added.
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}
