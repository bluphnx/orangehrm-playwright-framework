# OrangeHRM Playwright Framework Fixes

## Problems fixed

1. **Cucumber configuration error**
   - Wrong: `Module.exports = { ... }`
   - Correct: `module.exports = { ... }`
   - `module` is Node.js's CommonJS export object; JavaScript is case-sensitive.
   - Added the `cucumbertest` npm script.

   ```json
   "scripts": {
     "cucumbertest": "npx cucumber-js"
   }
   ```

2. **TypeScript execution support**
   - Wrong: running TypeScript step definitions without `ts-node`.
   - Correct: install and register `ts-node` through the Cucumber configuration.
   - Added `ts-node` and `typescript` as development dependencies.
   - Wrong: `"ignoreDeprecations": "6.0"` with TypeScript 5.9.
   - Correct: remove that setting because it is invalid for the installed compiler.

3. **Missing environment variables**
   - Wrong: using `process.env.PASSWORD!` when `PASSWORD` does not exist. The `!` only hides the TypeScript warning; it does not create a value.
   - Correct: define the required values in `.env.qa` and validate them in `ConfigManager.ts`.
   - `.env.qa` contains:
     - `BASE_URL`
     - `USERNAME`
     - `PASSWORD`
   - `ConfigManager.ts` now reports `Missing required environment variable: NAME` when a value is missing.
   - `.env.qa` should remain local and must not be committed if it contains private credentials.

4. **Asynchronous Playwright operations**
   - Wrong: `this.page.goto(...)`, `this.fill(locator, value)`, or `this.click(locator)` without `await`.
   - Correct: `await this.page.goto(...)`, `await this.fill(locator, value)`, and `await this.click(locator)`.
   - Added `await` to page navigation, field filling, and login-button clicks.
   - Updated Cucumber hooks to store browser, context, and page on the scenario world.
   - Set the default Cucumber timeout to 60 seconds.

   The page is attached to the World in the hook:

   ```typescript
   this.page = page;
   ```

   It can then be used in a step:

   ```typescript
   await this.page.goto(ConfigManager.BaseURL);
   ```

5. **Locale-independent login selectors**
   - Wrong: `page.getByRole("textbox", { name: "Username" })` when the application is localized.
   - Correct: use stable HTML attributes:
     - `input[name="username"]`
     - `input[name="password"]`
     - `button[type="submit"]`
   - This works when the site displays translated labels.

6. **Locale-independent dashboard verification**
   - Wrong: requiring `getByRole("heading", { name: "Dashboard" })` when the heading can be translated.
   - Correct: `await this.page.waitForURL("**/dashboard/index")`.
   - The test now verifies the dashboard URL ending in `/dashboard/index` instead of requiring the English heading `Dashboard`.

7. **Correct page-object method names**
   - Wrong: `this.loginpage.Password(...)` because no method named `Password` exists.
   - Correct: `this.loginpage.enterPassword(...)`, matching the method defined in `LoginPage.ts`.

8. **Wrapper method usage**
   - Wrong: `click(locator)` or `fill(value)` when these are methods on the current page object.
   - Correct: `this.click(locator)` and `this.fill(locator, value)`.
   - Direct Playwright calls are also valid: `locator.click()` and `locator.fill(value)`.

## Verification

Run the test with:

```pwsh
npm run cucumbertest
```

Verified result:

```text
1 scenario (1 passed)
6 steps (6 passed)
```

TypeScript compilation also passes:

```pwsh
npx tsc --noEmit
```
