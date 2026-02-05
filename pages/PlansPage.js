const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');
const { PlanDetailsPage } = require('./PlanDetailsPage');

class PlansPage extends BasePage {
  constructor(page) {
    super(page);
    // Select all rows except the first header row
    this.planRows = this.page.locator('table[data-id="plan-info-table-desktop"] tr:not(:first-child)');
  }

  async verifyPlansVisible() {
    // Check that at least one plan row is visible
    await expect(this.planRows.first()).toBeVisible();
  }

  async openPlanInNewTab(rowIndex = 0) {
    const planLink = this.planRows.nth(rowIndex).locator('a'); // link inside the row
    await this.assertVisible(planLink); // fixed here

    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'), // wait for new tab
      planLink.click() // click opens new tab
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    await new Promise(resolve => setTimeout(resolve, 8000));
    return new PlanDetailsPage(newPage);
  }
}
module.exports = { PlansPage };
