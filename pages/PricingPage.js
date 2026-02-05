const { BasePage } = require('./BasePage');
const { expect } = require('@playwright/test');

class PricingPage extends BasePage {
  constructor(page) {
    super(page);

    this.addressInput = page.locator('#address-lookup');
    this.dropdownOptions = page.locator('ul[role="listbox"] li[role="option"]');
    this.electricityCheckbox = this.page.locator('span[data-id="elc-checkbox-checkbox-base"] input[name="elc-checkbox"]:visible');
    this.planInfoTable = this.page.locator('table[data-id="plan-info-table-desktop"]');

  }

  addressOption(address) {
    return this.page.getByRole('option', { name: address });
  }

  async searchAndSelectAddress(address) {
    // Fill the input
    await this.addressInput.fill(address);
    await this.waitForVisible(this.dropdownOptions);
    const matchingOption = this.dropdownOptions.filter({ hasText: address.split(',')[0] });
    await matchingOption.first().click();
  }

  async uncheckElectricity() {
    await this.scrollUp(800);
    await this.waitForVisible(this.electricityCheckbox);
    await this.electricityCheckbox.first().uncheck();
  }
}

module.exports = { PricingPage };
