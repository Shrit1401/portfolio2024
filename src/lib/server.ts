"use server";

import { client } from "@/sanity/lib/client";

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
