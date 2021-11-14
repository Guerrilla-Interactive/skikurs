import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function HappeningBody({ content }) {
  return (
    <div className="max-w-xl">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />

      <button className="px-24 py-4 mt-12 text-white bg-black text-md">Søk deltakelse</button>
    </div>
  );
}
