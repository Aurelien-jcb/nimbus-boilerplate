import { UserForm } from "@/components/forms/user-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { BreadcrumbItem } from "@/types";

// export default async function Page({ params }: { params: { id: string } }) {
//   const id = params.id;
//   const isEditMode = Boolean(id);

//   const [userData, setUserData] = useState<User | null>(null);
//   const t = useTranslations("UserPage");

//   const breadcrumbItems: BreadcrumbItem[] = [
//     { title: t("breadcrumbs.dashboard"), link: "/dashboard" },
//     { title: t("breadcrumbs.users"), link: "/dashboard/users" },
//     {
//       title: isEditMode ? t("breadcrumbs.update") : t("breadcrumbs.create"),
//       link: isEditMode ? `/dashboard/users/${id}` : "/dashboard/users/create",
//     },
//   ];

//   return (
//     <PageContainer scrollable={true}>
//       <div className="space-y-4">
//         <Breadcrumbs items={breadcrumbItems} />
//         <UserForm initialData={userData} roles={roles} />
//       </div>
//     </PageContainer>
//   );
// }

// import Form from "@/app/ui/invoices/edit-form";

import { fetchUserRoles } from "@/server/actions/user";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const [roles] = await Promise.all([fetchUserRoles()]);

  const t = await getTranslations("UserPage");

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: t("breadcrumbs.dashboard"), link: "/dashboard" },
    { title: t("breadcrumbs.users"), link: "/dashboard/users" },
    {
      title: t("breadcrumbs.create"),
      link: `/dashboard/users/create`,
    },
  ];

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <UserForm initialData={null} roles={roles} />
      </div>
    </PageContainer>
  );
}
