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
    let newPage;

    try {
      // Wait for popup and click the link simultaneously
      [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        planLink.click(),
      ]);  // Wait for new page to load
      await newPage.waitForLoadState('domcontentloaded');

      // Optional: wait a bit for PDF to start loading
      await new Promise(resolve => setTimeout(resolve, 2000));

    } catch (err) {
      // Take screenshot if anything fails
      await this.takeScreenshot('openPlanInNewTab-failed');
      throw err; // re-throw so test still fails
    }
    return new PlanDetailsPage(newPage);
  }
}
module.exports = { PlansPage };
