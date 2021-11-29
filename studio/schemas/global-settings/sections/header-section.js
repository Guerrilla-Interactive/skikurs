import { GrNavigate } from "react-icons/gr";

export default {
  name: "header-section",
  type: "object",
  title: "Header Section",
  icon: GrNavigate,
  fields: [
    {
      name: "menu",
      type: "reference",
      to: [{ type: "navigation" }],
      title: "Navigation",
    },
  ],
};
