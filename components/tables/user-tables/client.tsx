"use client";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { TableTranslations, User } from "@/types";
import Link from "next/link";
import { Suspense } from "react";
import { useColumns } from "./columns";

interface UserClientProps {
  users: User[];
  translations: TableTranslations;
}

export default function UserClient({ users, translations }: UserClientProps) {
  const columns = useColumns();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={translations.title}
          description={translations.description}
        />
        <Link
          href="/dashboard/users/create"
          className={buttonVariants({ variant: "default" })}
        >
          <Icons.plus className="mr-2 h-4 w-4" />
          {translations.userCreateButton}
        </Link>
      </div>
      <Separator />
      <Suspense fallback="loading...">
        <DataTable
          searchKey="name"
          placheHolder={translations.table.searchKey}
          columns={columns}
          data={users}
        />
      </Suspense>
    </>
  );
}
