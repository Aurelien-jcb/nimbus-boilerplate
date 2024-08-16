"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type BreadcrumbItemProps = {
  title: string;
  link: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItemProps[] }) {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = pathname === item.link;

          return (
            <Fragment key={item.title}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <Link href={item.link} passHref legacyBehavior>
                    <BreadcrumbLink
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.title}
                    </BreadcrumbLink>
                  </Link>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
