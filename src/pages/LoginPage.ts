import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class LoginPage extends BasePage {
  private readonly userNameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly loginButton: Locator;
  private readonly DashboardHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameTextBox = page.locator('input[name="username"]');
    this.passwordTextBox = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.DashboardHeading = page.getByRole("heading", { name: "Dashboard" });
  }

  async enterUserName(text: string): Promise<void> {
    await this.fill(this.userNameTextBox, text);
  }

  async enterPassword(text: string): Promise<void> {
    await this.fill(this.passwordTextBox, text);
  }

  async clickLogin(): Promise<void> {
    await this.click(this.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifyDashboardPage(): Promise<void> {
    await this.page.waitForURL("**/dashboard/index");
  }
  
}
