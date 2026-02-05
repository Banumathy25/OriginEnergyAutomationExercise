const fs = require('fs');
const path = require('path');
const https = require('https');
const Tesseract = require('tesseract.js');
const { fromPath } = require('pdf2pic'); // ✅ import fromPath for pdf2pic
// Import this before requiring "pdf-parse"
const pdfParseModule = require('pdf-parse'); // ✅ require
const pdfParse = pdfParseModule.default || pdfParseModule; // handle default export
const pdfjsLib = require('pdfjs-dist');

/**
 * Generate random email
 */
function generateRandomEmail() {
  return `user_${Date.now()}@testmail.com`;
}

/**
 * Generate random string
 */
function generateRandomString(len = 8) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Pause for given seconds
 */
function pause(seconds = 2) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

/**
 * Get current URL from a Playwright page
 */
function getCurrentUrl(page) {
  return page.url();
}

/**
 * Download PDF from a URL via Playwright page and extract text to .txt
 * @param {import('@playwright/test').Page} page
 * @param {string} pdfUrl
 * @returns {Promise<string>} path to the .txt file
 */
async function downloadPdf(page, url) {
  const response = await page.request.get(url);
  if (!response.ok()) throw new Error(`Failed to download PDF: ${response.status()} ${url}`);

  const buffer = await response.body();
  const downloadsDir = path.resolve('downloads');
  if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir);

  const filePath = path.join(downloadsDir, `plan-details-${Date.now()}.pdf`);
  fs.writeFileSync(filePath, buffer);
  console.log('PDF downloaded at:', filePath);
  return filePath;
}

async function extractPdfText(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(item => item.str).join(' ');
    fullText += text + '\n';
  }
  return fullText;
}


module.exports = {
  generateRandomEmail,
  generateRandomString,
  pause,
  getCurrentUrl,
  extractPdfText,
  downloadPdf
};
