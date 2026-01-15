import Nav from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { videos } from "./data";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 rounded-xl">
            <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Videos</h1>
            <div className="flex flex-wrap w-full gap-4">
                {videos.map((video) => (
                    <Link
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6 w-[200px]"
                    >
                        <Image
                            src={video.thumbnail}
                            alt="YouTube Video Thumbnail"
                            className="rounded-lg shadow-lg w-full"
                            width={200}
                            height={630}
                        />
                        <span className="block mt-2">{video.title}</span>
                    </Link>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
