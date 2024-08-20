"use server";

import { roles } from "@/constants/data";
import prisma from "@/lib/prisma.db";
import { Roles, User } from "@prisma/client";

export async function fetchUserById(id: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

export async function createOrUpdateUser(data: {
  id?: string;
  name: string;
  email: string;
  role: Roles;
}) {
  try {
    if (data.id) {
      // Update existing user
      await prisma.user.update({
        where: { id: data.id },
        data: {
          name: data.name,
          email: data.email,
          role: data.role,
        },
      });
    } else {
      // Create new user
      await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          role: data.role,
        },
      });
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to save user:", error);
    return { success: false, error: "Failed to save user" };
  }
}

export async function fetchAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
}

export async function fetchUserRoles() {
  try {
    return roles;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
}
