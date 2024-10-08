import { defineField, defineType } from "sanity";

export const projects = defineType({
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),

    defineField({
      name: "year",
      type: "number",
    }),

    defineField({
      name: "usefullinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
            },
            {
              name: "link",
              type: "url",
            },
          ],
        },
      ],
    }),
  ],
});
