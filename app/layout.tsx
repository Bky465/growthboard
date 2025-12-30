import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";

export const metadata = {
  title: "GrowthBoard",
  description: "Performance-driven frontend analytics platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
