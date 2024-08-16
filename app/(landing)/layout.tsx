import LandingNav from "@/components/navigation/landing-nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingNav />
      <main>{children}</main>
    </>
  );
}
