"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getNewsBySlug } from "@/lib/server";
import { PortableText } from "@portabletext/react";
import { News } from "@/lib/types";
import { useParams } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { RichTextComponent } from "@/components/RichText";
import { TypedObject } from "sanity";
import Loading from "@/components/Loading";

const NewsletterPage = () => {
  const params = useParams();
  const slug = params.newsSlug;

  const [news, setNews] = useState<News[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      if (typeof slug === "string") {
        try {
          const newsData = await getNewsBySlug(slug);
          setNews(newsData);
        } catch (err) {
          setError("Failed to fetch news.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    };

    if (slug) {
      fetchNews();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!news) return <div>News not found</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingEmail(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("You're in! 🎉");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoadingEmail(false);
    }
  };

  return (
    <main className="my-4 px-4">
      <Link
        href="/"
        className="text-5xl md:text-5xl font-bold hover:opacity-75 transition duration-200 ease-in-out hover:underline"
      >
        shrit.
      </Link>
      <div className="mt-10 flex flex-col items-center w-full">
        <div className="flex items-center flex-col gap-5 mb-5">
          <h1 className="text-5xl items-center md:text-8xl font-bold">
            {news[0].title}
          </h1>
          <p className="text-lg font-bold text-white/50">
            - shrit :{" "}
            {new Date(news[0].publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <img
          src={urlFor(news[0].image).url()}
          alt="Blog post Image"
          className="object-cover md:w-[50%] h-[100vh] rounded-lg"
        />
      </div>
      <div className="md:my-10 w-full max-w-3xl text-white/90 font-medium mx-auto text-lg leading-10">
        <PortableText
          value={news[0].body as unknown as TypedObject}
          components={RichTextComponent}
        />
        <div className="my-6 border border-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
          <div>
            <h2 className="text-2xl font-bold">Sign Up For Such Newsletter</h2>
            <p className="text-lg text-white/50 line-clamp">
              Get the latest updates on what i am upto each week
            </p>
          </div>
          <iframe
            src="https://shrit.substack.com/embed"
            className="rounded-lg border-white"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NewsletterPage;
