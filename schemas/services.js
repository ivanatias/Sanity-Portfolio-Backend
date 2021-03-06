export default {
  name: "services",
  title: "Services",
  type: "document",

  fields: [
    {
      name: "service",
      title: "Service",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serviceIcon",
      title: "Service Icon",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
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
  ],
};
