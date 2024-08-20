import { NavItem, Role } from "@/types";
import { signOut } from "next-auth/react";

// export const users: User[] = [
//   {
//     id: "1",
//     name: "Candice Schiner",
//     role: "admin",
//   },
//   {
//     id: "2",
//     name: "John Doe",
//     company: "TechCorp",
//     role: "Backend Developer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: "3",
//     name: "Alice Johnson",
//     company: "WebTech",
//     role: "UI Designer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: "4",
//     name: "David Smith",
//     company: "Innovate Inc.",
//     role: "Fullstack Developer",
//     verified: false,
//     status: "Inactive",
//   },
//   {
//     id: "5",
//     name: "Emma Wilson",
//     company: "TechGuru",
//     role: "Product Manager",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: "6",
//     name: "James Brown",
//     company: "CodeGenius",
//     role: "QA Engineer",
//     verified: false,
//     status: "Active",
//   },
//   {
//     id: "7",
//     name: "Laura White",
//     company: "SoftWorks",
//     role: "UX Designer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: "8",
//     name: "Michael Lee",
//     company: "DevCraft",
//     role: "DevOps Engineer",
//     verified: false,
//     status: "Active",
//   },
//   {
//     id: "9",
//     name: "Olivia Green",
//     company: "WebSolutions",
//     role: "Frontend Developer",
//     verified: true,
//     status: "Active",
//   },
//   {
//     id: "10",
//     name: "Robert Taylor",
//     company: "DataTech",
//     role: "user",
//     verified: false,
//     status: "Active",
//   },
// ];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const roles: Role[] = [
  { id: "admin" },
  { id: "superadmin" },
  { id: "user" },
];

export const adminNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    labelKey: "dashboard",
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: "user",
    labelKey: "users",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "cog",
    labelKey: "settings",
  },
  {
    title: "Sign Out",
    icon: "logOut",
    labelKey: "logout",
    onClick: () => signOut({ callbackUrl: "/" }), // Sign out action
  },
];
export const userNavItems: NavItem[] = [
  {
    title: "User",
    href: "/settings/user",
    icon: "user",
    labelKey: "settings",
  },
  {
    title: "Sign Out",
    icon: "logOut",
    labelKey: "logout",
    onClick: () => signOut({ callbackUrl: "/" }), // Sign out action
  },
];

export const breadcrumbUsersItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Users", link: "/dashboard/users" },
];
