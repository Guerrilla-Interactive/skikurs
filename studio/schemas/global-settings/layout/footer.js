export default {
  name: "footer",
  type: "document",
  title: "Footer",
  fields: [
    {
      title: "Navigation",
      name: "footerNav",
      description: "Select menu for main navigation",
      type: "reference",
      to: { type: "navigation" },
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
