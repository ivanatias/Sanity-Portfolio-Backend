export default {
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    {
      name: "skill",
      title: "Skill",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imgUrl",
      title: "ImgURL",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};
