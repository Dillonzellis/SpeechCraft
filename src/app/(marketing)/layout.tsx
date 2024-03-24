import { MarketingFooter } from "@/components/layouts/MaketingFooter";
import { MarketingHeader } from "@/components/layouts/MarketingHeader";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}
