'use client';
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();
    return (
        <nav className="container  w-[900px]">
            <button onClick={() => router.back()}>Back</button>
        </nav>
    )
};

export default Nav;
