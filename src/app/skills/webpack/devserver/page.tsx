import Nav from "@/components/nav";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const metadata = {
    title: "Webpack Dev Server",
    description: "Webpack Dev Server",
};
export default function WebpackDevServer() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">
          Webpack Dev Server
        </h1>
        <p>webpack-dev-server (WDS) is a development server for Webpack that provides live reloading, 
            hot module replacement (HMR), and fast builds for frontend development. It serves your Webpack-compiled files from memory,
            avoiding the need to write them to disk, which speeds up development.</p>
        <div className="w-full">
        <SyntaxHighlighter>
          {`
// webpack.config.js
    module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
};`}
        </SyntaxHighlighter>
        </div>
      </main>
    </div>
  );
}
