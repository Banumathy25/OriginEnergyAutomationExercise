const { expect } = require('@playwright/test');
require('dotenv').config();

class BasePage {
  constructor(page) {
    this.page = page;
  }
  async openMerchant(viewport = { width: 1920, height: 1080 }) {
    await this.page.goto(process.env.BASE_URL);
    await this.page.setViewportSize(viewport);

  }

  async openMerchantDesktop() {
    await this.openMerchant({ width: 1920, height: 1080 });
  }

  async openMerchantMobile() {
    await this.openMerchant({ width: 375, height: 667 });
  }
  async waitForVisible(locator, timeout = 18000) {
    const count = await locator.count();
    for (let i = 0; i < count; i++) {
      await expect(locator.nth(i)).toBeVisible({ timeout });
    }
  }
  async wait(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }
  async scrollDown(pixels = 650) {
    await this.page.evaluate((y) => window.scrollBy(0, y), pixels);
  }

  async scrollUp(pixels = 500) {
    await this.page.evaluate((y) => window.scrollBy(0, -y), pixels);
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
  async listOftextValues(locator) {
    await this.waitForVisible(locator);
    const count_elements = await locator.count();
    const elements_array = [];
    for (let i = 0; i < count_elements; i++) {
      const text_val = await locator.nth(i).textContent();
      elements_array.push(text_val.trim());
    }
    return elements_array;
  }

  async scrollToLocator(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.waitFor({ state: 'visible', timeout: 8000 });
  }

  async assertVisible(locator, message = 'Element not visible') {
    await expect(locator, message).toBeVisible();
  }

  async assertHidden(locator, message = 'Element should be hidden') {
    await expect(locator, message).toBeHidden();
  }
  async waitForSelector(locator, timeout = 5000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
  async waitForLoadState(state = 'networkidle', timeout = 5000) {
    await this.page.waitForLoadState(state, { timeout });
  }
  async returnListElements(locator) {
    const eleCount = await locator.count();
    const list = [];
    for (let i = 0; i < eleCount; i++) {
      list.push(locator.nth(i));
    }
    return list;
  }
  // async returnTexOfElements(locator) {
  //   const eleCount = await locator.count();
  //   const textList = [];
  //   for (let i = 0; i < eleCount; i++) {
  //     textList.push(await locator.nth(i).textContent());
  //   }
  //   return textList;
  // }
  async returnTexOfElements(locator) {
    const eleList = await locator.elementHandles();
    const textList = [];
    for (const ele of eleList) {
      const textVal = await ele.textContent();
      textList.push(textVal)
    }
    return textList;
  }
  async implicitWait(timeout = 18000) {
    await this.page.waitForTimeout({ timeout });
  }
  async radioButtonCheck(locator) {
    await this.waitForVisible(locator);
    await locator.check();
    await expect(locator).toBeChecked();
  }
  async radioButtonUncheck(locator) {
    const ele_list = await this.returnListElements(locator);
    for (const each_ele of ele_list) {
      if (await each_ele.isChecked()) {
        await each_ele.uncheck();
      }
    }
  }
  async verifyPlansVisible() {
    await this.scrollDown(800);
    await this.assertVisible(this.planInfoTable)
  }
  async takeScreenshot(name = 'screenshot') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `./screenshots/${name}-${timestamp}.png`;
    await this.page.screenshot({ path, fullPage: true });
    console.log(`📸 Screenshot saved: ${path}`);
    return path;
  }
}
module.exports = { BasePage };
