import Nav from "@/components/nav";

export const metadata = {
    title: "Sarabjeet Singh | sarabs3 | Running",
    description: "Welcome to my running page. Explore my running events and achievements.",
};
export default function Running() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
      <h1 className="text-gray-400 text-6xl uppercase tracking-widest">Running</h1>
        <div className="flex gap-8 w-full flex-wrap">
            <div className="bg-orange-50 text-black rounded-2xl p-4 h-80 w-1/3">Daily World Marathon March 2024</div>
            <div className="bg-orange-50 text-black rounded-2xl p-4 h-80 w-1/3">Tuffman Half Marathon Sep 2024</div>
            <div className="bg-orange-50 text-black rounded-2xl p-4 h-80 w-1/3">Hansali Full Marathon Nov 2024</div>
            <div className="bg-orange-50 text-black rounded-2xl p-4 h-80 w-1/3">Tuffman Stadium Run March 2025</div>
        </div>
      </main>
    </div>
  );
}
