import { defineConfig } from "@playwright/test";

export default defineConfig({
   testDir: 'src/tests',
    timeout: 10000, // test timeout per test
  use: {
    browserName: 'chromium',
    actionTimeout: 10000, // timeout per action (like click, fill)
    navigationTimeout: 10000,
    headless: false, // Set true for CI/CD
    screenshot: "only-on-failure",
    viewport: null, 
     launchOptions: {
      args: ['--start-maximized'], // Maximizes Chromium window
    },
  },
  reporter: [
      ['list'],
       ['html'],
    
],

});