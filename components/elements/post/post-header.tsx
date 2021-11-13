import Avatar from "@components/elements/avatar";
import Date from "@components/elements/date";
import CoverImage from "@components/elements/cover-image";
import PostTitle from "@components/elements/post/post-title";
import { imageBuilder } from "@lib/sanity";
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author?.name} picture={author?.picture} />
      </div>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} slug={undefined} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
      </div>
    </>
  );
}
