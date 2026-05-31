import { test, expect } from "../Utils/Fixtures.js";
import DataUtil from "../Utils/DataUtil.js"; 

const records = DataUtil.getTestData("TestData/productName.csv");

test.describe("Shop Page Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    // 3. Step 1: Navigate to the application login screen
    await loginPage.navigateToLoginPage(process.env.BASE_URL);

    // Catch the ShopPage instance directly from the login method!
    await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
  });

  test("Verify Shop Page Header", async ({ shopPage }) => {
    // Verify the header is visible on the Shop page
    await expect(shopPage.header).toBeVisible();
  });

  test("Verify Product Cards Count", async ({ shopPage }) => {
    // Verify the number of product cards displayed on the Shop page
    const productCount = await shopPage.productCardsCount();
    expect(productCount).toBe(4); // Assuming there should be 4 product cards
  });

  test("Add all products to cart", async ({ shopPage }) => {
    // add all products to cart
    await shopPage.addProductToCart();
    const actualProducts = await shopPage.getProductNames();
    console.log(records);
    const expectedProducts= records.map(row => row.ProductName.trim());
    expect(actualProducts).toEqual(expectedProducts);

   
  });
});
