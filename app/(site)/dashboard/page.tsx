"use client";
import { AdminDashboard } from "@/components/dashboard/admin-dashboard";
import PageContainer from "@/components/layout/page-container";
import { useUserRole } from "@/hooks/useUserRole"; // Assurez-vous que le chemin est correct
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Page() {
  const { data: session } = useSession();
  const { isSuperAdmin, isAdmin } = useUserRole();
  const t = useTranslations("Dashboard");

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            {t("welcomeTitle")}{" "}
            <span className="capitalize">{session?.user?.name}</span> 👋
          </h2>
        </div>
        {isSuperAdmin || isAdmin ? <AdminDashboard /> : "User"}
      </div>
    </PageContainer>
  );
}
