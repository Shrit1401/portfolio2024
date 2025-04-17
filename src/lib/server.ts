"use server";

import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

export async function getNews() {
  noStore();
  try {
    const data = await client.fetch(`*[_type == "news"]`);

    data.sort(
      (a: { _createdAt: string; slug: { current: string } }, b: { _createdAt: string; slug: { current: string } }) => {
        // Check if either item is the "tough" slug
        const isATough = a.slug.current === "tough";
        const isBTough = b.slug.current === "tough";

        if (isATough && !isBTough) {
          return 1; // a goes to the end if it's the "tough" page
        } else if (!isATough && isBTough) {
          return -1; // b goes to the end if it's the "tough" page
        }

        // If neither is the "tough" slug, sort by _createdAt
        return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function getNewsBySlug(slug: string) {
  noStore();
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

export async function getProjects() {
  noStore();
  try {
    const data = await client.fetch(`*[_type == "projects"]`);
    data.sort(
      (a: { _createdAt: string }, b: { _createdAt: string }) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPast() {
  noStore();
  try {
    const data = await client.fetch(`*[_type == "past"]`);
    data.sort(
      (a: { _createdAt: string }, b: { _createdAt: string }) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
