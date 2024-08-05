export interface News {
  id: string;
  type: "news";
  title: string;
  description: string;
  slug: {
    current: string;
  };
  image: {
    url: string;
    alt: string;
  };
  publishedAt: string; // Date string
  body: string;
}

export interface Project {
  id: string;
  type: "project";
  title: string;
  description: string;

  slug: string;
  image: {
    url: string;
    alt: string;
  };
  url: string;
  body: string;
}
