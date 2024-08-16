"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userNavItems } from "@/constants/data";
import { getTranslatedNavItems } from "@/hooks/useTranslateNavItems";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { Icons } from "../ui/icons";

export const UserNav: React.FC = () => {
  const { data: session } = useSession();
  const t = useTranslations("UserPage.UserNavigation");
  const translatedItems = getTranslatedNavItems(t, userNavItems);

  if (!session?.user) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarImage
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          alt="placeholder"
        />
      </Avatar>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session.user?.image ?? ""}
              alt={session.user?.name ?? ""}
            />
            <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {translatedItems.map((item) => {
            const Icon = Icons[item.icon || "arrowRight"];
            return item.href ? (
              <DropdownMenuItem key={item.labelKey}>
                <Link href={item.href || "#"} className="flex">
                  <Icon className={`mr-2 h-4 w-4`} />
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ) : (
              <React.Fragment key={item.labelKey}>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button onClick={item.onClick} className="flex">
                    <Icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </button>
                </DropdownMenuItem>
              </React.Fragment>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
