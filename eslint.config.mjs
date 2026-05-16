import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
    rules: {
      "no-unused-vars": "off",
      // "no-use-before-define": "off",
      // "no-undef": "off",
    },
  }),
  {
    ignores: [
      ".next/**",
      ".git/**",
      ".vscode/**",
      ".vercel/**",
      "coverage/**",
      "node_modules/**",
      "dist/**",
      "public/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "sanity/dist/**",
      "**/node_modules/",
    ],
  },
];

export default eslintConfig;
