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
  console.log('1232323313',slug, blogs, blog);

  if (!blog) notFound();

  const isInternalLink = blog.link.startsWith("/");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex flex-col gap-4 p-4 rounded-xl w-full max-w-[900px]">
          <div className="flex flex-col gap-2">
            <Link
              href="/blogs"
              className="text-sm text-orange-500 hover:underline uppercase tracking-widest"
            >
              ← Blogs
            </Link>
            <h1 className="text-gray-400 text-4xl sm:text-5xl font-bold">
              {blog.title}
            </h1>
            <time
              className="text-sm text-gray-500"
              dateTime={blog.date}
            >
              {blog.date}
            </time>
          </div>
          {blog.content ? (
            <article className="bg-orange-50 text-black rounded-2xl p-6 sm:p-8 border border-orange-100 w-full">
              <div
                className="whitespace-pre-wrap text-gray-700 leading-relaxed font-[family-name:var(--font-geist-sans)] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-800 [&_h2]:mt-6 [&_h2]:mb-2 [&_h2]:first:mt-0 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-4 [&_h3]:mb-1"
                style={{ wordBreak: "break-word" }}
              >
                {blog.content.split("\n").map((line, i) =>
                  line.startsWith("#### ") ? (
                    <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2" key={i}>{line.slice(5)}</h4>
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
