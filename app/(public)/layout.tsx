export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <footer className="border-t border-border px-6 py-4 text-sm text-muted-foreground">
        © 2025 GrowthBoard. Built for performance-focused frontend learning.
      </footer>
    </>
  );
}
