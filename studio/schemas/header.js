export default {
  name: "header",
  type: "document",
  title: "Header",
  fields: [
    {
      name: "mainlogo",
      type: "image",
      title: "Main Logo",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    { name: "menu", title: "MenuBar", type: "menu" },
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
