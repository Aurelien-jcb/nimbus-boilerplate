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

import { fetchUserById, fetchUserRoles } from "@/server/actions/user";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [user, roles] = await Promise.all([
    fetchUserById(id),
    fetchUserRoles(),
  ]);

  const t = await getTranslations("UserPage");

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: t("breadcrumbs.dashboard"), link: "/dashboard" },
    { title: t("breadcrumbs.users"), link: "/dashboard/users" },
    {
      title: t("breadcrumbs.update"),
      link: `/dashboard/users/edit/${id}`,
    },
  ];
  if (!user) {
    notFound();
  }
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <UserForm initialData={user} roles={roles} />
      </div>
    </PageContainer>
  );
}
