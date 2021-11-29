import preview from "part:sanity-plugin-icon-picker/preview";

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
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
        providers: ["fi"],
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
