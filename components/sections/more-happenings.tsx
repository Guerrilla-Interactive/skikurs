import HappeningPreview from "../elements/happening/happening-preview";

export default function MoreHappenings({ happenings }) {
  return (
    <section>

      <div className="grid grid-cols-1 gap-12 row-gap-20 mb-32 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 md:row-gap-32">
        {happenings.map((happening) => (
          <HappeningPreview
            key={happening.slug}
            title={happening.title}
            coverImage={happening.coverImage}
            slug={happening.slug}
            excerpt={happening.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
