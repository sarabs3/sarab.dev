export type Video = {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
};

export type VideoSection = {
  name: string;
  videos: Video[];
};

export const videoSections: VideoSection[] = [
  
  {
    name: "Langchain and AI applications",
    videos: [
      {
        id: 201,
        title: "Build AI applications with Langchain",
        url: "https://www.youtube.com/watch?v=qINodRSBmdU&t=2s",
        thumbnail: "https://img.youtube.com/vi/qINodRSBmdU/hqdefault.jpg",
      },
      {
        id: 202,
        title: "Langchain Prompt Templates",
        url: "https://www.youtube.com/watch?v=xyuhUV4oIKI&t=2s",
        thumbnail: "https://img.youtube.com/vi/xyuhUV4oIKI/hqdefault.jpg",
      },
    ],
  },
  {
    name: "Docker",
    videos: [
      {
        id: 101,
        title: "Docker Basics - Crash Course",
        url: "https://www.youtube.com/watch?v=xR4SrauD8jc",
        thumbnail: "https://img.youtube.com/vi/xR4SrauD8jc/hqdefault.jpg",
      },
      {
        id: 102,
        title: "Docker basics commands",
        url: "https://www.youtube.com/watch?v=9PkQ4OTqxHo",
        thumbnail: "https://img.youtube.com/vi/9PkQ4OTqxHo/hqdefault.jpg",
      },
      {
        id: 103,
        title: "Docker volumes",
        url: "https://www.youtube.com/watch?v=kK_3eph18pg&t=10s",
        thumbnail: "https://img.youtube.com/vi/kK_3eph18pg/hqdefault.jpg",
      },
      {
        id: 104,
        title: "Dockerize a React.js application",
        url: "https://www.youtube.com/watch?v=kTQtT1Gmtg4&t=10s",
        thumbnail: "https://img.youtube.com/vi/kTQtT1Gmtg4/hqdefault.jpg",
      },
    ],
  },
  {
    name: "Shorts & Tutorials",
    videos: [
      {
        id: 1,
        title: "What is caching",
        url: "https://youtube.com/shorts/B-sJwKAeKUg?si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/B-sJwKAeKUg/hqdefault.jpg",
      },
      {
        id: 2,
        title: "CAP Theorem",
        url: "https://www.youtube.com/shorts/Nr3S5imopds?si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/Nr3S5imopds/hqdefault.jpg",
      },
      {
        id: 3,
        title: "RAG Pipelines",
        url: "https://www.youtube.com/shorts/wutpThS09Ic?si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/wutpThS09Ic/hqdefault.jpg",
      },
      {
        id: 4,
        title: "Database indexing. Scaling production applications",
        url: "https://www.youtube.com/shorts/DcaKz5j-A7w?si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/DcaKz5j-A7w/hqdefault.jpg",
      },
      {
        id: 5,
        title: "Javascript for beginners",
        url: "https://www.youtube.com/watch?v=yjWKOqdodc0&si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/yjWKOqdodc0/hqdefault.jpg",
      },
      {
        id: 6,
        title: "How to use Mailgun with Node.js",
        url: "https://www.youtube.com/watch?v=PdrjYPGwvuM&si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/PdrjYPGwvuM/hqdefault.jpg",
      },
      {
        id: 7,
        title: "NodeJs complete course for beginners",
        url: "https://www.youtube.com/watch?v=opze9sIeO_A&si=y4tydYM0xtXpkgF8",
        thumbnail: "https://img.youtube.com/vi/opze9sIeO_A/hqdefault.jpg",
      },
    ],
  },
];
