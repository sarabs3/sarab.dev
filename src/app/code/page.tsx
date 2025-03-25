
import Nav from "@/components/nav";
import { commits } from "./data";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 rounded-xl">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Code Examples</h1>
        <ul className="list-disc list-inside">
                {commits.map((commit) => (
                    <li className="text-gray-600 text-lg uppercase tracking-widest" key={commit.id}>
                        <a target="_blank" href={commit.link}>{commit.title}</a>
                    </li>
                ))}
            </ul>
        </div>
      </main>
    </div>
  );
}
