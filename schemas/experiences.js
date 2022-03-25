export default {
  name: "experiences",
  title: "Experiences",
  type: "document",

  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
