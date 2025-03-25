import Nav from "@/components/nav";
import { quotes } from "./data";

export default function Qquotes() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 rounded-xl">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Quotes</h1>
        <div className="flex w-full flex-col max-w-[900px]">
            {quotes.map((quote) => (
                <div key={quote.id} className="bg-orange-50  mt-4 text-black rounded-2xl p-4 w-full">
                    <pre className="text-wrap">{quote.content}</pre>
                    <a className="text-sm text-sky-300 underline" target="_blank" href={quote.link}>Original Post</a>
                </div>
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}
