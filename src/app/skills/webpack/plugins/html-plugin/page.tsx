
import Nav from "@/components/nav";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const metadata = {
    title: "Sarabjeet Singh | Webpack HTML Plugin",
    description: "Webpack HTML Plugin",
};

export default function HTMLPlugin() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <h1 className="text-gray-400 text-6xl uppercase tracking-widest">
          Webpack HTML Plugin
        </h1>
        <p>The <a className="text-sky-300 underline" href="https://www.npmjs.com/package/html-webpack-plugin" target="_blank">html-webpack-plugin</a> is a Webpack plugin that simplifies the creation of HTML files to 
            serve your bundled JavaScript files. It automatically generates an HTML file (or uses a template) 
            and injects your bundled scripts, reducing manual effort.</p>
            <div className="w-full">
        <SyntaxHighlighter>
          {`
    // webpack.config.js
    const HtmlWebpackPlugin = require('html-webpack-plugin')
        module.exports = {
            mode: 'development',
            devServer: {
                port: 8081,
            },
            plugins: [
                new HtmlWebpackPlugin({
                template: './public/index.html' 
                })
            ]
        };`}
        </SyntaxHighlighter>
        </div>
      </main>
    </div>
  );
}
