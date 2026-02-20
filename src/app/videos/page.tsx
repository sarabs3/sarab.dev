import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { videoSections } from "./data";

export default function Videos() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start container w-[900px]">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Videos</h1>
        {videoSections.map((section) => (
          <div key={section.name} className="flex flex-col gap-4 p-4 rounded-xl w-full">
            <h2 className="text-gray-500 text-2xl uppercase tracking-widest">
              {section.name}
            </h2>
            <div className="flex flex-wrap w-full gap-4">
              {section.videos.map((video) => (
                <Link
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-[200px]"
                >
                  <Image
                    src={video.thumbnail}
                    alt={`${video.title} - YouTube Thumbnail`}
                    className="rounded-lg shadow-lg w-full"
                    width={200}
                    height={113}
                  />
                  <span className="block mt-2 text-gray-600">{video.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
