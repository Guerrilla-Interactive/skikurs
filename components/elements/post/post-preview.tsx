import Avatar from "@components/elements/avatar";
import Date from "@components/elements/date";
import CoverImage from "@components/elements/cover-image";
import Link from "next/link";
import { imageBuilder } from "@lib/sanity";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
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
        <Link as={`/stories/${slug}`} href="/stories/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  );
}
