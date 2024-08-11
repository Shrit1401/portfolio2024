"use server";

import { client } from "@/sanity/lib/client";
import prisma from "./db/db";

export async function getNews() {
  try {
    const data = await client.fetch(`*[_type == "news"]`);
    return data.reverse();
  } catch (error) {
    console.error(error);
  }
}

export async function getNewsBySlug(slug: string) {
  try {
    const data = await client.fetch(
      `*[_type == "news" && slug.current == $slug]`,
      { slug }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

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
