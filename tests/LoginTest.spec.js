import { test, expect } from "../Utils/Fixtures.js";
import expectedData from "../TestData/data.json";

test("Login Test", async ({ page, loginPage }) => {
  // 3. Step 1: Navigate to the application login screen
  await loginPage.navigateToLoginPage(process.env.BASE_URL);

  console.log("USERNAME =", process.env.LOGIN_USERNAME);
console.log("PASSWORD EXISTS =", !!process.env.LOGIN_PASSWORD);

  // 4. Step 2: Perform login action with valid credentials
  await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);

  // 5. Step 3: Verify successful login by checking the URL
  await expect(page).toHaveURL(expectedData.validationData.successUrl);

  //verify page title after login
  const pageTitle = await loginPage.getPageTitle();
  expect(pageTitle).toBe(expectedData.validationData.shopPageTitle);
});
