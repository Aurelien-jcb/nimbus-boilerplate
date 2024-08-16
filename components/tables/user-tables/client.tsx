import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { fetchAllUsers } from "@/server/actions/user";
import Link from "next/link";
import { Suspense } from "react";
import { columns } from "./columns";

export default async function UserClient() {
  const users = await fetchAllUsers();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Users (${users.length})`}
          description="Manage users (Client side table functionalities.)"
        />
        <Link
          href="/dashboard/users/create"
          className={buttonVariants({ variant: "default" })}
        >
          <Icons.plus className="mr-2 h-4 w-4" /> Add New
        </Link>
      </div>
      <Separator />
      <Suspense fallback="loading...">
        <DataTable searchKey="name" columns={columns} data={users} />
      </Suspense>
    </>
  );
}
