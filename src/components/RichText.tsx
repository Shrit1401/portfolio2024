import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="relative my-4 h-96 w-full">
          <Image
            className="object-contain rounded-lg"
            src={urlFor(value).url()}
            alt={value.alt || "Blog post Image"}
            fill
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 list-decimal space-y-2">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-8 text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-6 text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-4 text-2xl font-bold">{children}</h4>
    ),
    p: ({ children }: any) => (
      <p className="my-4 text-base font-bold text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-emphasize py-5 pl-5 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-[#4AC1F0] decoration-emphasize"
          title={value.title || "Link"}
        >
          {children}
        </Link>
      );
    },
  },
};
