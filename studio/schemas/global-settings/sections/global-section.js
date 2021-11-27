export default {
  name: "global-section",
  title: "Global Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [{ type: "header-section" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
