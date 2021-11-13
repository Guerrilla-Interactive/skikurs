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
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/program/${slug}`} href="/program/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
    </div>
  );
}
