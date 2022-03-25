export default {
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    {
      name: "skill",
      title: "Skill",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
