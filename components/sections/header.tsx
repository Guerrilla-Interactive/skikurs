import Link from "next/link";

export default function Header() {
  return (
    // Row
    <div className="grid grid-flow-col mt-8 mb-20">
      {/* Column 1 */}
      <div>
        <h2 className="font-bold leading-tight tracking-tight ext-2xl md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="hover:underline">Logo</a>
          </Link>
        </h2>
      </div>
      {/* Column 2 */}
      <div className="justify-self-end">
        <nav className="grid grid-flow-col gap-24 text-lg">
          <div>Forside</div>
          <div>Festivalprogram</div>
          <div>Hva er Spin Off?</div>
          <div>Delta</div>
        </nav>
      </div>
    </div>



  );
}
