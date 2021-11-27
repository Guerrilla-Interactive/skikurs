export default {
  name: "header-section",
  type: "object",
  title: "Header Section",
  fields: [
    {
      name: "menu",
      type: "reference",
      to: [{ type: "navigation" }],
      title: "Navigation",
      preview: {
        select: {
          title: "title",
        },
      },
      preview: {
        select: {
          title: "title",
        },
      },
    },
  ],
};
