class BasePage {
  /**
   * The constructor captures the live browser 'page' instance
   * passed from your test files when you use the 'new' keyword.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Reusable method to handle navigation to any URL.
   * Using 'this.page' ensures we act on the correct browser tab.
   */
  async navigateTo(url) {
    await this.page.goto(url);
  }

  /**
   * Reusable helper to get the current page title.
   */
  async getPageTitle() {
    return await this.page.title();
  }
}

// Export the class as a default module so other pages can extend it
export default BasePage;
