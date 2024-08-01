"use server";
import { email, project } from "@prisma/client";
import prisma from "./db/db";
import { unstable_noStore as noStore } from "next/cache";

export const createProject = async (
  title: string,
  description: string,
  imageUrl: string,
  url: string,
  text: string
): Promise<project | null> => {
  try {
    const res = await prisma.project.create({
      data: {
        name: title,
        description,
        imgUrl: imageUrl,
        projecturl: url,
        text,
      },
    });
    return res;
  } catch (error) {
    console.error("Error creating project:", error);
    return null;
  }
};

export const getProjects = async (): Promise<project[]> => {
  noStore();
  try {
    return await prisma.project.findMany();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getProject = async (name: string): Promise<project | null> => {
  noStore();
  try {
    return await prisma.project.findUnique({
      where: { name },
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export const getEmails = async (): Promise<email[]> => {
  noStore();
  try {
    return await prisma.email.findMany();
  } catch (error) {
    console.error("Error fetching emails:", error);
    return [];
  }
};

export const getEmail = async (slug: string): Promise<email | null> => {
  noStore();
  try {
    return await prisma.email.findFirst({
      where: { slug },
    });
  } catch (error) {
    console.error("Error fetching email:", error);
    return null;
  }
};
