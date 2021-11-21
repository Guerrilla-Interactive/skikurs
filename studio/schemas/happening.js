export default {
  name: "happening",
  title: "Program",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "infoboxes",
      type: "array",
      title: "Info boxes",
      of: [
        { type: "when" },
        { type: "where" },
        { type: "who" },
        { type: "what" },
      ],
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "textBottomLeft",
      title: "Text - Bottom Left",
      type: "blockContent",
    },
    {
      name: "textBottomRight",
      title: "Text - Bottom Right",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
