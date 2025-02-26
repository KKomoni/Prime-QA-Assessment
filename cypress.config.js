const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      config.env = {
        ...config.env,
        VALID_USER: process.env.CYPRESS_VALID_USER,
        INVALID_USER: process.env.CYPRESS_INVALID_USER,
        VALID_PASS: process.env.CYPRESS_VALID_PASS,
      };
      return config;
    },
    baseUrl: "https://www.demoblaze.com/",
  },
});
