"use client";

import { signOut } from "next-auth/react";
import { Icons } from "../ui/icons";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex flex-row items-center gap-2"
    >
      <Icons.logOut /> <span>Sign out</span>
    </button>
  );
}
