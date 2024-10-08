"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getNews } from "@/lib/server";
import { News } from "@/lib/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const NewsFullPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      }
    };

    fetchNews();
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <>
      <Head>
        <title>News ~ Shrit</title>
        <meta name="description" content="All my newsletters in one place." />
        <meta
          name="keywords"
          content="news, latest news, updates, newsletters"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="News ~ Shrit" />

        <meta
          property="og:description"
          content="All my newsletters in one place."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shrit.in/news" />
        <meta property="og:site_name" content="Shrit" />
        <meta
          property="og:image"
          content="https://www.shrit.in/meta/og-img.png"
        />
      </Head>
      <main className="flex flex-col min-h-screen">
        <Header />
        <section className="flex-grow mt-4 px-4">
          <div className="mt-10">
            <h1 className="text-5xl md:text-5xl font-bold text-center">News</h1>
            <p className="font-[600] flex items-center justify-center text-white/50 lowercase md:leading-loose">
              {news.length} newsletters till now.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {news.map((item, index) => (
                <Link
                  key={index}
                  href={item.url ? item.url : `/${item.slug.current}`}
                  target={item.url ? "_blank" : "_self"}
                >
                  <article className="mb-6 border border-white/10 hover:bg-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer h-full">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-lg text-white/50 line-clamp">
                      {item.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default NewsFullPage;
