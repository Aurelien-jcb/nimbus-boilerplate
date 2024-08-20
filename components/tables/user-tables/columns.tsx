"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { CellAction } from "./cell-action";

export const useColumns = (): ColumnDef<User>[] => {
  const t = useTranslations("UserPage.table");

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: t("columns.name"),
    },
    {
      accessorKey: "email",
      header: t("columns.email"),
    },
    {
      accessorKey: "role",
      header: t("columns.role"),
    },
    {
      id: "actions",
      cell: ({ row }) => <CellAction data={row.original} />,
    },
  ];
};
