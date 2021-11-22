import CoverImage from "@components/elements/happening/happening-cover-image";
import Link from "next/link";

import { imageBuilder } from "@lib/sanity";
import HappeningPreviewInfo from "./happening-preview-info";
import Happening from "pages/program/[slug]";
import CoverImageTwo from "./happening-cover-image-2";
export default function HappeningPreviewTwo({
  title,
  coverImage,
  excerpt,
  slug,
  info,
  time,
}) {
  return (
    <div className="max-w-2xl program-item">
      <div className=" mb-10 w-[80%] bg-transparent">
        <CoverImageTwo
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <div className="grid grid-cols-3 gap-12">
        {/* col 1 */}

        <div className="col-span-1 text-left">
          <div> <HappeningPreviewInfo info={info} /></div>
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
