import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import UserClient from "@/components/tables/user-tables/client";
import { breadcrumbUsersItems } from "@/constants/data";

export default function Page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbUsersItems} />
        <UserClient />
      </div>
    </PageContainer>
  );
}
