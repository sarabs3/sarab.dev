import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start container w-[900px]">
        <div className="flex gap-4 bg-amber-100 flex-col p-4 w-[300px] rounded-xl">
          <Image src="/sarabjeet-400.JPG" alt="Sarabjeet Singh" width={200} height={200} className="rounded-xl" />
          <h1 className="text-black text-2xl font-bold">Sarabjeet Singh</h1>
          <h2 className="text-black">A Software Engineer who has developed countless innovative solutions.</h2>
          <div className="flex gap-4">
            <a href="https://github.com/sarabs3" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} className="text-orange-500" />
            </a>
            <a href="https://www.linkedin.com/in/sarabs3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} className="text-orange-500" />
            </a>
            <a href="mailto:hellosarab0@gmail.com">
              <FaEnvelope size={20} className="text-orange-500" />
            </a>
          </div>
        </div>
        <div className="w-full">
            <h3 className="text-gray-400 text-6xl uppercase tracking-widest">Software</h3>
          <h3 className="text-gray-600 text-6xl uppercase tracking-widest">Engineer</h3>
          <p className="text-gray-500 mt-6">
            I am a Software Engineer with a passion for developing innovative solutions. I have a strong background in software development and have developed countless solutions that have helped businesses grow. I am always looking for new challenges and opportunities to learn and grow as a developer.
          </p>
        </div>

      </main>
    </div>
  );
}
