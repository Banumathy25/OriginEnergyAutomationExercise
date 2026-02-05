const { BasePage } = require('./BasePage');

class PlanDetailsPage extends BasePage {
  constructor(page) {
    super(page);

  }

  /**
   * Get the current URL of the plan details tab (PDF URL)
   * @returns {string}
   */
  getCurrentUrl() {
    return this.page.url();
  }
}

module.exports = { PlanDetailsPage };
