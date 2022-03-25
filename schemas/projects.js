export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imgUrl",
      title: "ImageURL",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectTags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
