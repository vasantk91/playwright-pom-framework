import { test as baseTest } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import ShopPage from "../pages/ShopPage.js";
import HomePage from "../pages/HomePage.js";

// You can cleanly add all 10 pages here as your framework grows!

export const test = baseTest.extend({
  // Define a fixture for each page object
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  }
});

export { expect } from "@playwright/test";
