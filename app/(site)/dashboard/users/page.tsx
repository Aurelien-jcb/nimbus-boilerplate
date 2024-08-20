import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import UserClient from "@/components/tables/user-tables/client";
import { fetchAllUsers } from "@/server/actions/user";
import { BreadcrumbItem } from "@/types";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const users = await fetchAllUsers();
  const t = await getTranslations("UserPage");

  const translations = {
    title: t("title"),
    description: t("description"),
    userCreateButton: t("userCreateButton"),
    table: {
      searchKey: t("table.searchKey"),
    },
  };

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: t("breadcrumbs.dashboard"), link: "/dashboard" },
    { title: t("breadcrumbs.users"), link: "/dashboard/users" },
  ];

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient users={users} translations={translations} />
      </div>
    </PageContainer>
  );
}
