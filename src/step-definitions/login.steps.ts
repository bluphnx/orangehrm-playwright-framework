import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ConfigManager } from "../config/ConfigManager";

let loginpage: LoginPage;

Given("user navigates to login page", async function () {
    await this.page.goto(ConfigManager.BaseURL, { waitUntil: "load", timeout: 60000 });
  this.loginpage = new LoginPage(this.page);
});

When("user enters valid username and password", async function () {

    console.log(`userName : ${ConfigManager.userName}`);
    await this.loginpage.enterUserName(ConfigManager.userName);

    await this.loginpage.enterPassword(ConfigManager.password);
});

When("clicks login button", async function () {

    await this.loginpage.clickLogin();
});

Then("user Successfully logs into dashboard page", async function () {

    await this.loginpage.verifyDashboardPage();
});

// npx cucumber-js
