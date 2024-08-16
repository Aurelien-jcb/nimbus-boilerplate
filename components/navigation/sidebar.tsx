"use client";
import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { DashboardNav } from "./dashboard-nav";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? "w-72" : "w-[72px]",
        className,
      )}
    >
      <div className="hidden p-5 pt-10 md:block">
        <Link href="/">
          <Icons.logo className="text-primary-foreground" />
        </Link>
      </div>
      <Icons.chevronLeft
        className={cn(
          "absolute -right-3 top-10 z-50 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180",
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav />
          </div>
        </div>
      </div>
    </aside>
  );
}
