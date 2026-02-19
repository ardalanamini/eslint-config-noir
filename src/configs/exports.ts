import perfectionist from "eslint-plugin-perfectionist";
import { smartConfig } from "#utils";

export const exports = smartConfig({
  plugins: {
    perfectionist,
  },
  rules: {
    "perfectionist/sort-exports": [
      "error",
      {
        type        : "alphabetical",
        order       : "asc",
        fallbackSort: {
          type : "natural",
          order: "asc",
        },
        ignoreCase        : false,
        partitionByComment: true,
        groups            : ["type-export", "value-export"],
      },
    ],
  },
});
