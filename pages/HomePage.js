import BasePage from "./BasePage";

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    
    // Locators for the form fields based on the image
    this.nameInput = page.locator("input[name='name']").first();
    this.emailInput = page.locator("input[name='email']");
    this.passwordInput = page.locator("#exampleInputPassword1");
    this.iceCreamCheckbox = page.locator("#exampleCheck1");
    this.genderDropdown = page.locator("#exampleFormControlSelect1");
    
    // Radio buttons for Employment Status
    this.studentRadio = page.locator("#inlineRadio1");
    this.employedRadio = page.locator("#inlineRadio2");
    
    this.dobInput = page.locator("input[name='bday']");
    this.submitButton = page.locator("input[value='Submit']");
    this.successAlert = page.locator(".alert-success");
  }

  async navigateToHomePage() {
    await this.navigateTo("https://rahulshettyacademy.com/angularpractice/");
  }

  async fillRegistrationForm(data) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    
    // Optional: Check the box if you want
    await this.iceCreamCheckbox.check();
    
    // Select option from the Gender Dropdown (e.g., 'Male' or 'Female')
    await this.genderDropdown.selectOption({ label: data.gender });
    
    // Select Employment Status Radio Button dynamically
    if (data.employmentStatus.toLowerCase() === 'student') {
      await this.studentRadio.check();
    } else if (data.employmentStatus.toLowerCase() === 'employed') {
      await this.employedRadio.check();
    }

    // Fill Date of Birth
    await this.dobInput.pressSequentially(data.dob);
    
    // Click Submit
    await this.submitButton.click();
  }
}

export default HomePage;