export default {
  name: "menu",
  type: "object",
  title: "Menu",
  fields: [
    {
      name: "menus",
      type: "array",
      title: "Menu Bar",
      of: [
        {
          type: "reference",
          to: [{ type: "custompage" }],
        },
        //{ type: "externalUrl" },
      ],
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Menus",
        media: <span>𝍍</span>,
      };
    },
  },
};
