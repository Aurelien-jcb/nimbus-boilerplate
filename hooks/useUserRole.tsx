import { useSession } from "next-auth/react";

export function useUserRole() {
  const { data: session } = useSession();
  const userRole = session?.user?.role;

  const isSuperAdmin = userRole === "superadmin";
  const isAdmin = userRole === "admin";
  const isUser = userRole === "member";

  return {
    isSuperAdmin,
    isAdmin,
    isUser,
    userRole,
  };
}
