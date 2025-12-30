import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Campaigns</h1>

      <div className="rounded-lg border border-border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead className="text-right">Conversions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <CampaignRow
              name="Diwali Sale"
              status="Active"
              platform="Google"
              conversions={320}
            />
            <CampaignRow
              name="Course Launch"
              status="Paused"
              platform="Meta"
              conversions={145}
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function CampaignRow({
  name,
  status,
  platform,
  conversions,
}: {
  name: string;
  status: "Active" | "Paused";
  platform: string;
  conversions: number;
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant={status === "Active" ? "default" : "secondary"}>
          {status}
        </Badge>
      </TableCell>
      <TableCell>{platform}</TableCell>
      <TableCell className="text-right">{conversions}</TableCell>
    </TableRow>
  );
}
