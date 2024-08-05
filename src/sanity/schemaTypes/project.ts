import { defineField, defineType } from "sanity";

export const project = defineType({
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "url",
      type: "url",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
