import Nav from "@/components/nav";

export default function MicroFrontend() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
    <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 flex-col p-4 w-[300px] rounded-xl">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Micro FrontEnd</h1>
        <a href="https://github.com/sarabs3/mcr-fe" target="_blank" rel="noopener noreferrer">Github URL of App</a>
        </div>
      </main>
    </div>
  );
}
