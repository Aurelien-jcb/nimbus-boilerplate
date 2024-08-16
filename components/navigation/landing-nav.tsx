import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth/auth";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Icons } from "../ui/icons";

const LandingNav = async () => {
  const session = await auth();
  const tLandingNavigation = await getTranslations("Landing.navigation");
  const tAppLayout = await getTranslations("AppLayout");

  return (
    <header className="container sticky inset-x-0 top-0 z-10 flex h-16 items-center justify-between px-4 backdrop-blur backdrop-filter md:px-6">
      <Link className="flex items-center" href="/">
        <Icons.logo className="size-8 text-primary-foreground" />
        <span className="sr-only">Nimbus Boilerplate</span>
      </Link>

      {!session?.user ? (
        <Link href="/sign-in">
          <Button>{tAppLayout("signin")}</Button>
        </Link>
      ) : (
        <Link href="/dashboard">
          <Button>{tLandingNavigation("dashboard")}</Button>
        </Link>
      )}
    </header>
  );
};

export default LandingNav;
