import Link from "next/link";
import Image from "next/image";
import ethSVG from "../../public/eth-glyph-colored.svg";

interface NavbarProps {
  ethPrice: string;
}

export default function Navbar({ ethPrice }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 px-8 h-28 max-w-[100%] flex justify-between items-center bg-slate-800">
      <div className="relative mansalva font-display text-4xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-500 to-blue-600 py-2 transform -rotate-3">
        <Link href="/">DopestDAO</Link>
      </div>
      <span className="absolute top-16 left-[184px] text-slate-100 text-base noto-sans">
        Presents...
      </span>
      <div className="flex flex-row justify-center items-center">
        <Image src={ethSVG} alt="ETH Price: " width={20} height={20} />
        <div className="text-slate-100 pl-2">{ethPrice} USD</div>
      </div>
    </nav>
  );
}
