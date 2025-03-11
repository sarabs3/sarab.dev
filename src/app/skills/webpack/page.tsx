import Nav from "@/components/nav";
import Link from "next/link";

export default function Webpack() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">
          Webpack
        </h1>
        <ul className="list-disc list-inside">
          <li className="text-gray-600 text-lg uppercase tracking-widest">
            <Link href="/skills/webpack/devserver">Webpack Dev Server</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
