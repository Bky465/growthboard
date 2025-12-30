import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Analytics</h1>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Charts</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted">
          GraphQL-powered analytics charts will be added here.
        </CardContent>
      </Card>
    </div>
  );
}
