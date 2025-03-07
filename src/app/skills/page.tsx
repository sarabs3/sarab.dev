import Nav from "@/components/nav";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 w-[300px] rounded-xl">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Skills</h1>
            <ul className="list-disc list-inside">
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/scrum">Micro Front End</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/scrum">Monoreps</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/react">React</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/nodejs">Node.js</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/expressjs">Express.js</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/nextjs">Next.js</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/typescript">Typescript</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/graphql">GraphQL</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/postgres">PostgreSQL</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/mongodb">MongoDB</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/redis">Redis</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/git">Git</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/ci">CI/CD</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/testing">Testing</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/agile">Agile</Link>
                </li>
                <li className="text-gray-600 text-lg uppercase tracking-widest">
                    <Link href="/skills/scrum">Scrum</Link>
                </li>
            </ul>
        </div>
      </main>
    </div>
  );
}
