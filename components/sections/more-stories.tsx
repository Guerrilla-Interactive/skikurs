import StoryPreview from "../elements/story/story-preview";

export default function MoreStories({ stories }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        Historier fra Spin Off
      </h2>
      <div className="grid grid-cols-1 row-gap-20 mb-32 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 md:row-gap-32">
        {stories.map((story) => (
          <StoryPreview
            key={story.slug}
            title={story.title}
            coverImage={story.coverImage}
            slug={story.slug}
            excerpt={story.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
