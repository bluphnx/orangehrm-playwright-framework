import { Before, After,setDefaultTimeout } from "@cucumber/cucumber";
import { BrowserContext, chromium, Browser, Page } from "@playwright/test";

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  this.browser = await chromium.launch({
    headless: true,
  });
  this.context = await this.browser.newContext();
  page = await this.context.newPage();
  this.page = page;
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
