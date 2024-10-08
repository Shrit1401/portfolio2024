"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import { getNewsBySlug } from "@/lib/server";
import { PortableText } from "@portabletext/react";
import { News } from "@/lib/types";
import { useParams } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { RichTextComponent } from "@/components/RichText";
import { TypedObject } from "sanity";
import Loading from "@/components/Loading";
import Header from "@/components/Header";

const NewsletterPage: React.FC = () => {
  const params = useParams();
  const slug = params.newsSlug;

  const [news, setNews] = useState<News[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) return <div>{error}</div>;
  if (news == null) return <div>News not found</div>;

  const newsItem = news[0];

  return (
    <main>
      <Head>
        <title>{newsItem.title}</title>
        <meta
          name="description"
          content={`in this newsletter i am yapping about 
          ${newsItem.title || "something"}  
            `}
        />
        <meta name="keywords" content="news, latest news, updates" />
        <meta name="author" content="Shrit" />
      </Head>
      {newsItem ? (
        <section className="my-4 px-4">
          <Header />
          <div className="mt-10 flex flex-col items-center w-full">
            <div className="flex items-center flex-col gap-5 mb-5">
              <h1 className="text-5xl items-center md:text-6xl text-center font-bold">
                {newsItem.title}
              </h1>
              <p className="text-lg font-bold text-white/50">
                - shrit :{" "}
                {new Date(newsItem.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <img
              src={urlFor(newsItem.image).url()}
              alt={newsItem.title}
              className="object-cover md:w-[50%] h-[100vh] rounded-lg"
            />
          </div>
          <div className="md:my-10 w-full max-w-3xl text-white/90 font-medium mx-auto text-lg leading-10">
            <PortableText
              value={newsItem.body as unknown as TypedObject}
              components={RichTextComponent}
            />
            <div className="flex flex-col space-y-3 items-center my-6 border border-white/10 p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
              <div>
                <h2 className="text-2xl font-bold text-center">
                  Sign Up For Such Newsletter
                </h2>
                <p className="text-lg text-white/50 line-clamp">
                  Get the latest updates on what I am up to each week
                </p>
              </div>
              <iframe
                src="https://shrit.substack.com/embed"
                className="rounded-lg border-white"
                scrolling="no"
              />
            </div>
          </div>
          <Footer />
        </section>
      ) : (
        <div className="flex items-center flex-col gap-5 text-xl justify-center h-screen">
          <Loading />
          <p className="font-[600]  text-white/90 flex lowercase md:leading-loose">
            I think you are lost, go back to
            <a href="/" className="link">
              home
            </a>
          </p>
        </div>
      )}
    </main>
  );
};

export default NewsletterPage;
