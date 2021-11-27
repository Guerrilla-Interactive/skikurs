export default {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      title: "Choose global section to use",
      description: 'Global Sections > "The section"',
      name: "headerNav",

      type: "reference",
      to: { type: "global-section" },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Header",
      };
    },
  },
};
