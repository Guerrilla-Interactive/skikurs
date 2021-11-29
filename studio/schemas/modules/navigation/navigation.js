import { GrNavigate } from "react-icons/gr";
import preview from "part:sanity-plugin-icon-picker/preview";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "navId",
      type: "slug",
      title: "Navigation Id",
    },

    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "navigationItem" }],
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
