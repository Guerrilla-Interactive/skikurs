import Link from "next/link";
import logo from "@images/skikurs-oslo-logo.png"
import Image from "next/image";


export default function Header({
  headerData }) {


  return (
    // Row
    <section className="absolute z-10 section-full">
      <section className="grid items-center grid-cols-12 pt-10 section-full-contained">
        {/* Column 1 */}
        <div className="max-w-[13rem] col-start-2 col-end-4">
          <Link href="/">
            <Image src={logo} />
          </Link>

        </div>
        {/* Column 2 */}
        <div className="col-span-8 col-start-auto justify-self-end">
          <nav className="grid grid-flow-col gap-24 text-xl text-white">
            {headerData.map((link) => (
              <div key={link.text}><Link href={`/${link.navigationItemUrl.internalLink.slug.current}`}><a> {link.text}</a></Link></div>
            ))}
          </nav>
        </div>
      </section>
    </section>
  );
}

