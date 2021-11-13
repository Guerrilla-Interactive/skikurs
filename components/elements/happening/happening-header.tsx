import Avatar from "@components/elements/avatar";
import CoverImage from "@components/elements/cover-image";
import HappeningTitle from "@components/elements/happening/happening-title";
import { imageBuilder } from "@lib/sanity";
export default function HappeningHeader({ title, coverImage }) {
  return (
    <>
      <HappeningTitle>{title}</HappeningTitle>

      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} imageObject={coverImage} url={coverImage} slug={undefined} /> */}
      </div>
    </>
  );
}
