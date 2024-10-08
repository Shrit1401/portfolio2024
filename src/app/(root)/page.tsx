"use client";
import React, { useEffect, useState } from "react";
import LandingComponent from "@/components/LandingComponent";
import Newsletters from "@/components/Newsletters";
import Footer from "@/components/Footer";
import { News } from "@/lib/types";
import { getNews } from "@/lib/server";
import Redirect from "@/components/Redirect";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData.slice(0, 2));
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <main className="p-6">
      <section>
        <LandingComponent />
      </section>
      <section>
        <Redirect />
      </section>
      <section>{!loading && <Newsletters news={news.slice(0, 2)} />}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
