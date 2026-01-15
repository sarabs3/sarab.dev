import Nav from "@/components/nav";
import { projects } from "./data";
import { Project } from "./types";

export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 rounded-xl">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Projects</h1>
        <div className="flex w-full flex-col max-w-[900px]">

            <ul className="list-disc list-inside">
            </ul>
            {projects.map((project: Project) => (
                <li key={project.id} className="text-gray-600 text-lg uppercase tracking-widest">
                    <p>{project.title}</p>
                </li>
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}
