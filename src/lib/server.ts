"use server";

import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

export async function getNews() {
  noStore();
  try {
    const data = await client.fetch(`*[_type == "news"]`);

    data.sort(
      (a: { _createdAt: string }, b: { _createdAt: string }) =>
        new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
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
