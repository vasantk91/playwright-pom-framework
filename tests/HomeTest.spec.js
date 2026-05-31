import { test, expect } from "../utils/fixtures.js";
// 1. Import your sleek new utility
import DataUtil from "../utils/DataUtil.js"; 

// 2. Simply point to the file path from your root directory!
const records = DataUtil.getTestData("TestData/registrationData.csv");

// 3. Run the data-driven loop exactly as before
for (const record of records) {
  test(`Data Driven Registration for user: ${record.name}`, async ({ homePage }) => {
    await homePage.navigateToHomePage();
    await homePage.fillRegistrationForm(record);
    
    await expect(homePage.successAlert).toBeVisible();
    await expect(homePage.successAlert).toContainText("Success!");
  });
}