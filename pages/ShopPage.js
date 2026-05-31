import BasePage from "./BasePage";

class ShopPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = page.getByText("Shop Name");
    this.productCards = page.locator(".card-title a");
    this.products = page.locator(".card");
    this.checkoutLink = page.locator(".nav-item .nav-link");
    this.prductNames = page.locator(".table td h4 a");
  }

  async verifyHeader() {
    await this.header.waitFor({ state: "visible" });
  }

  async productCardsCount() {
    await this.productCards.first().waitFor({ state: "visible" });
    return await this.productCards.count();
  }

  async addProductToCart() {
    const visibleBtns = this.products.locator("button");
    const count = await visibleBtns.count();
    await visibleBtns.first().waitFor();

    const buttonArray = await visibleBtns.all();
    console.log(
      `Array captured. Clicking exactly ${buttonArray.length} buttons.`,
    );

    for (const button of buttonArray) {
      await button.click();
    }

    console.log(
      await this.checkoutLink.filter({ hasText: "Checkout" }).textContent(),
    );

    await this.checkoutLink.filter({ hasText: "Checkout" }).click();
  }

  async getProductNames() {
    await this.prductNames.first().waitFor({ state: "visible" });

    const rows = await this.prductNames.all();
    const actualProductNames = [];

    for (const row of rows) {
      const text = await row.textContent();
      if (text) {
        actualProductNames.push(text.trim());
      }
    }
    return actualProductNames;
  }
}

//Add all the products to the checkout page
//Click on the checkout button
//Verify the Products displayed in the checkout page
//Click on purchase button
//verify the success message displayed after purchase

export default ShopPage;
