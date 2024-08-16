"use client";

import { UserForm } from "@/components/forms/user-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { BreadcrumbItem, Role, User } from "@/types";
import { useParams } from "next/navigation";
import { useState } from "react";

const roles: Role[] = [{ id: "admin" }, { id: "user" }];

export default function UserPage() {
  const params = useParams();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const id = params.userId ? params.userId : undefined;
  const isEditMode = Boolean(id);

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Users", link: "/dashboard/users" },
    {
      title: isEditMode ? "Update" : "Create",
      link: isEditMode ? `/dashboard/users/${id}` : "/dashboard/users/create",
    },
  ];

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <UserForm initialData={userData} roles={roles} />
      </div>
    </PageContainer>
  );
}
