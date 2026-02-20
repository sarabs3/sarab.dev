import Nav from "@/components/nav";
import { blogs } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog not found" };
  return {
    title: `${blog.title} | Sarabjeet Singh`,
    description: blog.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const isInternalLink = blog.link.startsWith("/");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen px-4 py-6 pb-20 gap-8 sm:gap-16 sm:p-8 md:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-6 sm:gap-8 row-start-2 w-full max-w-[900px] min-w-0">
        <div className="flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl w-full min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
            <Link
              href="/blogs"
              className="text-xs sm:text-sm text-orange-500 hover:underline uppercase tracking-widest"
            >
              ← Blogs
            </Link>
            <h1 className="text-gray-400 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold break-words">
              {blog.title}
            </h1>
            <time
              className="text-xs sm:text-sm text-gray-500"
              dateTime={blog.date}
            >
              {blog.date}
            </time>
          </div>
          {blog.content ? (
            <article className="bg-orange-50 text-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-orange-100 w-full min-w-0 overflow-hidden">
              <div
                className="whitespace-pre-wrap text-gray-700 text-sm sm:text-base leading-relaxed font-[family-name:var(--font-geist-sans)] break-words [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-800 [&_h2]:mt-4 [&_h2]:mb-1 [&_h2]:first:mt-0 sm:[&_h2]:text-lg sm:[&_h2]:mt-6 sm:[&_h2]:mb-2 lg:[&_h2]:text-xl [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-3 [&_h3]:mb-1 sm:[&_h3]:text-base sm:[&_h3]:mt-4 lg:[&_h3]:text-lg [&_h4]:text-sm sm:[&_h4]:text-base lg:[&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-3 [&_h4]:mb-1"
                style={{ wordBreak: "break-word" }}
              >
                {blog.content.split("\n").map((line, i) =>
                  line.startsWith("#### ") ? (
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2" key={i}>{line.slice(5)}</h4>
                  ) : line.startsWith("## ") ? (
                    <h2 key={i}>{line.slice(3)}</h2>
                  ) : line.startsWith("* Subpoint") ? (
                    <h3 key={i}>{line.slice(10)}</h3>
                  ) : (
                    <span key={i}>
                      {line}
                      {"\n"}
                    </span>
                  )
                )}
              </div>
            </article>
          ) : (
            isInternalLink && (
              <p className="text-gray-500">This post has no content yet.</p>
            )
          )}
        </div>
      </main>
    </div>
  );
}
