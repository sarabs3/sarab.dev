import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Docker, Langchain & AI | Sarabjeet Singh",
  description:
    "Tutorial videos on Docker, Langchain and AI applications. Learn containerization, LLM pipelines, and building AI-powered apps.",
  keywords: [
    "Docker",
    "Docker tutorials",
    "Langchain",
    "LangChain",
    "AI applications",
    "LLM",
    "containerization",
    "YouTube tutorials",
    "Sarabjeet Singh",
  ],
  openGraph: {
    title: "Videos | Docker, Langchain & AI | Sarabjeet Singh",
    description:
      "Tutorial videos on Docker, Langchain and AI applications. Learn containerization, LLM pipelines, and building AI-powered apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | Docker, Langchain & AI | Sarabjeet Singh",
    description:
      "Tutorial videos on Docker, Langchain and AI applications. Learn containerization, LLM pipelines, and building AI-powered apps.",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
