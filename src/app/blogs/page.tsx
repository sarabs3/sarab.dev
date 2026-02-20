import Nav from "@/components/nav";
import { FaLink } from "react-icons/fa";
import { blogs } from "./data";
import { Blog } from "./types";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 rounded-xl">
          <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Blogs</h1>
          <div className="flex w-full flex-col max-w-[900px] gap-4">
            {blogs.map((blog: Blog) => (
              <div
                key={blog.id}
                className="bg-orange-50 text-black rounded-2xl p-4 w-full border border-orange-100"
              >
                <div className="flex gap-2 items-center">
                  {blog.link && blog.link !== "#" ? (
                    blog.link.startsWith("/") ? (
                      <Link
                        href={blog.link}
                        className="flex gap-2 items-center hover:underline text-gray-700"
                      >
                        <FaLink size={12} className="text-orange-500 shrink-0" />
                        <h2 className="text-lg font-semibold uppercase tracking-widest">
                          {blog.title}
                        </h2>
                      </Link>
                    ) : (
                      <a
                        href={blog.link}
                        target="_blank"
                        className="flex gap-2 items-center hover:underline text-gray-700"
                        rel="noopener noreferrer"
                      >
                        <FaLink size={12} className="text-orange-500 shrink-0" />
                        <h2 className="text-lg font-semibold uppercase tracking-widest">
                          {blog.title}
                        </h2>
                      </a>
                    )
                  ) : (
                    <h2 className="text-lg font-semibold uppercase tracking-widest">
                      {blog.title}
                    </h2>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <time className="text-sm text-gray-500 mt-2 block" dateTime={blog.date}>
                  {blog.date}
                </time>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
