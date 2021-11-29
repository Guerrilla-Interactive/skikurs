import preview from "part:sanity-plugin-icon-picker/preview";

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

    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        providers: ["fi", "fa", "bs"],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      provider: "icon.provider",
      name: "icon.name",
    },
    prepare(icon) {
      return {
        title: icon.title,
        media: preview(icon),
      };
    },
  },
};
