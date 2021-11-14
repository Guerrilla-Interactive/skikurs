import CoverImage from "@components/elements/happening/happening-cover-image";
import Link from "next/link";
import { imageBuilder } from "@lib/sanity";
export default function HappeningPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div className="">
      <div className=" mb-10 w-[80%] bg-transparent">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <div className="grid grid-cols-3 gap-12">
        {/* col 1 */}

        <div className="col-span-1 text-left">
          <div> Tidspunkt</div>
          <div> Date </div>
          <div> Where</div>
          <button className="px-12 py-4 mt-12 text-white bg-black text-md"> Les mer </button>
        </div>
        <div className="col-span-2 text-left">
          <h3 className="mb-3 text-2xl font-semibold ">
            <Link as={`/program/${slug}`} href="/program/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <p className="mb-4 text-lg leading-relaxed max-w-[20rem]">Vi forstår at det er ekstra krevende med innsending av video, og utvider fristen for innsending til torsdag 25. </p></div>

      </div>
    </div>
  );
}
