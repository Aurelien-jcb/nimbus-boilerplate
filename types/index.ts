import { Icons } from "@/components/ui/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  labelKey?: string;
  description?: string;
  onClick?: () => void;
}

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: "admin" | "superadmin" | "member";
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface StatCard {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export type Role = {
  id: string;
};

export type BreadcrumbItem = {
  title: string;
  link: string;
};

export interface UserFormProps {
  initialData: User | null;
  roles: Role[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
