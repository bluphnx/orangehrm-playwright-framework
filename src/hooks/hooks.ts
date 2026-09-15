import { Before, After } from "@cucumber/cucumber";
import { BrowserContext, chromium, Browser, Page } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({
    headless: true,
  });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});
