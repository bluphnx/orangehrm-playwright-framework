import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {

  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator,value:string): Promise<void> {
    await locator.fill(value);
  }

  async clear(locator: Locator): Promise<void> {
    await locator.clear();  
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent())??"";

    /*
    
The ?? operator is called the nullish coalescing operator.

Equivalent longer version:

const text = await locator.textContent();

if (text === null || text === undefined) {
  return "";
}

return text;

The ?? operator provides a fallback value when the value on its left is null or undefined.

It means:

If textContent() returns text, use that text.
If it returns null or undefined, use an empty string "".
This ensures getText() always returns a string instead of null.

     */
  }

  async hover(locator: Locator): Promise<void> {
    await locator.hover();  
  }  

async doubleClick(locator: Locator): Promise<void> {
    await locator.dblclick();  
  } 

async rightClick(locator: Locator): Promise<void> {
    await locator.dblclick();  
  } 


}
