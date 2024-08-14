"use server";
import prisma from "./db/db";

export async function createpainifyuser(email: string) {
  try {
    const data = await prisma.painify.create({
      data: {
        email,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
