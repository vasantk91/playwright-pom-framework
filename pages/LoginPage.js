import BasePage from "./BasePage";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("#signInBtn");
  }

  async navigateToLoginPage(url) {
    await this.navigateTo(url);
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
