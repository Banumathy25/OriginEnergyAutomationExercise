const { test, expect } = require('@playwright/test');
const { PricingPage } = require('../pages/PricingPage');
const { PlansPage } = require('../pages/PlansPage');
const { PlanDetailsPage } = require('../pages/PlanDetailsPage');
const { readPdfWithOcr } = require('../utils/helpers');
const { getCurrentUrl } = require('../utils/helpers');
// const { downloadPdfFromUrl } = require('../utils/helpers');
const { downloadPdf } = require('../utils/helpers');
const {extractPdfText} = require('../utils/helpers');


const TEST_ADDRESS = process.env.TEST_ADDRESS;

test.describe('Origin Energy Pricing Flow', () => {
  test('Validate gas plan PDF', async ({ page }) => {
    const pricingPage = new PricingPage(page);
    const plansPage = new PlansPage(page);

    await pricingPage.openMerchant();
    await pricingPage.searchAndSelectAddress(TEST_ADDRESS);
    await pricingPage.verifyPlansVisible();
    await pricingPage.uncheckElectricity();
    await plansPage.verifyPlansVisible();
    const planDetailsPage = await plansPage.openPlanInNewTab(0);
    //   // Save the PDF locally
    // const pdfFilePath = await saveDownload(download, `plan-details-${Date.now()}.pdf`);

    const pdfUrl = planDetailsPage.getCurrentUrl();
    console.log('Current URL:', pdfUrl);
       // Download PDF
    const pdfFilePath = await downloadPdf(page, pdfUrl);

    // Extract text
    const pdfText = await extractPdfText(pdfFilePath);
    console.log('PDF Text:\n', pdfText);
    expect(pdfText).toContain('Estimated gas cost');
  });
});
