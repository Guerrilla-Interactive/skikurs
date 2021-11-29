import Link from "next/link";

export default function Header({
  headerData }) {


  return (
    // Row
    <section className="absolute bg-blue-800 section-full">
      <section className="grid items-center grid-flow-col pt-10 section">
        {/* Column 1 */}
        <div>
          <h2 className="font-bold leading-tight tracking-tight ext-2xl md:text-4xl md:tracking-tighter">
            <Link href="/">
              <a className="text-white hover:underline">Skikurs Oslo</a>
            </Link>
          </h2>
        </div>
        {/* Column 2 */}
        <div className="justify-self-end">
          <nav className="grid grid-flow-col gap-24 text-lg text-white">
            {headerData.map((link) => (
              <div key={link.text}><Link href={`/${link.navigationItemUrl.internalLink.slug.current}`}><a> {link.text}</a></Link></div>
            ))}
          </nav>
        </div>
      </section>
    </section>
  );
}

