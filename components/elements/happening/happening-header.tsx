import Avatar from "@components/elements/avatar";
import CoverImage from "@components/elements/cover-image";
import HappeningTitle from "@components/elements/happening/happening-title";
import HappeningSubtitle from "@components/elements/happening/happening-subtitle";
import { imageBuilder } from "@lib/sanity";
export default function HappeningHeader({ title, subtitle, coverImage }) {
  return (
    <>
      <HappeningTitle>{title}</HappeningTitle>
      <HappeningSubtitle>{subtitle}</HappeningSubtitle>

      {/* <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} slug={undefined} />
      </div> */}
    </>
  );
}
