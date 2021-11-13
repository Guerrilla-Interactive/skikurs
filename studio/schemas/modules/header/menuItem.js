export default {
  name: "menuItem",
  type: "object",
  title: "menuItem",
  fields: [
    {
      title: "Inlink",
      name: "internalUrl",
      type: "reference",
      to: [{ type: "story" }, { type: "custompage" }],
    },
  ],
};
