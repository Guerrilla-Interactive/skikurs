export default {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      title: "Choose global section to use",
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
