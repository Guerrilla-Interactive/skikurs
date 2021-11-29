import preview from "part:sanity-plugin-icon-picker/preview";

export default {
  name: "course",
  title: "Course",
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
      name: "introTitle",
      title: "Intro tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Kort beskrivelse",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "participants",
      title: "Antall deltakere",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Pris pr. deltaker",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
