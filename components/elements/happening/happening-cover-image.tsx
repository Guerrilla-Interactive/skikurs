import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "@lib/sanity";

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      width={1240}
      height={800}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(800).url()}
    />
  );

  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/program/${slug}`} href="/program/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
