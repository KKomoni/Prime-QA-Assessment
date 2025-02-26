module.exports = [
  {
    ignores: ["node_modules", "dist"], // Ignore unnecessary folders
  },
  {
    files: ["**/*.js", "**/*.ts"], // Define the file extensions to lint
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
    },
    rules: {
      //rules here
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    settings: {
      "prettier/prettier": "error", // Prettier integration
    },
  },
];
