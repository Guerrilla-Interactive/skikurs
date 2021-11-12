export default {
  name: "custompage",
  title: "Custom Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "Required",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
