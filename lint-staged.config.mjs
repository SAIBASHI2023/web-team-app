export default {
  "src/**/*.{ts,tsx,json,scss,css}": [
    () => "npm run eslint:fix",
    () => "npm run format",
  ],
};
