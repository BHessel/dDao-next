import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-8 h-28 max-w-[100%] flex justify-between items-center bg-slate-800">
      <div>
        <h1
          className="font-display text-5xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-blue-600 py-2"
          style={{ fontFamily: "Mansalva, cursive" }}
        >
          <Link href="/">DopestDAO</Link>
        </h1>
      </div>
    </div>
  );
}
