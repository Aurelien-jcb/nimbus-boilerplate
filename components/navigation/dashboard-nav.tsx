"use client";

import { adminNavItems, userNavItems } from "@/constants/data";
import { useSidebar } from "@/hooks/useSidebar";
import { getTranslatedNavItems } from "@/hooks/useTranslateNavItems";
import { useUserRole } from "@/hooks/useUserRole";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "../ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface DashboardNavProps {
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function DashboardNav({
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();
  const { isSuperAdmin, isAdmin, isUser } = useUserRole();

  const t = useTranslations("Dashboard.DashboardNavigation");

  const translatedItems = getTranslatedNavItems(
    t,
    isSuperAdmin || isAdmin ? adminNavItems : userNavItems,
  );

  if (!translatedItems?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {translatedItems.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />
                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"} // Utiliser une valeur par défaut si href est undefined
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80",
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />
                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent
                align="center"
                side="right"
                sideOffset={8}
                className={!isMinimized ? "hidden" : "inline-block"}
              >
                {item.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
