import { test, expect, Locator } from "@playwright/test";
import { BasePage } from "../src/pages/BasePage";

test("", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  //   await expect(page.locator("#app")).toContainText("Username : Admin");
  //   await expect(page.locator("#app")).toContainText("Password : admin123");
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page.getByText("Time at Work")).toBeVisible();
});
