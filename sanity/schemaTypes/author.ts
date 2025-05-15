import { UserIcon } from "lucide-react";
import { defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "id",
      type: "number",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "username",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "bio",
      type: "string",
    },
    {
      name: "image",
      type: "url",
    },
  ],
});
