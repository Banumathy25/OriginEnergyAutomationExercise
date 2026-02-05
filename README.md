# Origin Energy Pricing Automation

A comprehensive end-to-end test automation framework for the Origin Energy website using **Playwright** with **JavaScript**. This project automates pricing flows, plan validation, PDF processing, and content extraction using advanced OCR and PDF parsing capabilities.

## 🎯 Overview

This automation suite validates the complete user journey on the Origin Energy website, including address search, plan selection, PDF document processing, and content validation. The framework implements the Page Object Model (POM) design pattern for maintainable and scalable test automation.

## ✨ Features

- **End-to-End Testing**: Complete pricing flow automation from address search to plan validation
- **Advanced PDF Processing**: PDF download, text extraction, and OCR-based content validation
- **Page Object Model**: Structured, reusable page objects for maintainable test code
- **Multi-Browser Support**: Cross-browser testing with Chromium and Firefox
- **Robust Selectors**: Reliable element identification with fallback strategies
- **Visual Testing**: Screenshot capture on failures with video recording
- **Parallel Execution**: Optimized test execution with parallel browser instances

## 📁 Project Structure

```
├── pages/                 # Page Object Model implementations
│   ├── BasePage.js       # Base page with common functionality
│   ├── PricingPage.js    # Main pricing page interactions
│   ├── PlansPage.js      # Plans listing and selection
│   └── PlanDetailsPage.js # Individual plan detail handling
├── tests/                # Test specifications
│   ├── origin-pricing.spec.js  # Main pricing flow tests
│   └── basicTests.js     # Basic functionality tests
├── utils/                # Utility functions
│   └── helpers.js        # PDF processing, OCR, and helper functions
├── downloads/            # Downloaded files storage
├── playwright-report/    # Test execution reports
├── test-results/        # Test artifacts and screenshots
├── playwright.config.js # Playwright configuration
└── package.json         # Project dependencies and scripts
```

## 🧪 Test Coverage

### Pricing Flow Validation
- ✅ Address search and selection from dropdown
- ✅ Electricity/gas plan filtering
- ✅ Plan availability verification
- ✅ Plan details navigation in new tabs
- ✅ PDF document download and processing
- ✅ Content extraction with OCR fallback

### PDF Processing Capabilities
- ✅ Direct PDF text extraction using pdf-parse
- ✅ OCR-based text extraction using Tesseract.js
- ✅ PDF to image conversion with pdf2pic
- ✅ Content validation for specific terms (e.g., "Estimated gas cost")

### Technical Features
- ✅ Dynamic dropdown handling
- ✅ Multi-tab navigation management
- ✅ File download verification
- ✅ Error handling and recovery
- ✅ Environment-based configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OriginEnergyAssignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   TEST_ADDRESS=123 Collins St, Melbourne VIC 3000
   ```

### Running Tests

#### Execute all tests
```bash
npx playwright test
```

#### Run specific test file
```bash
npx playwright test tests/origin-pricing.spec.js
```

#### Run in headed mode (visible browser)
```bash
npx playwright test --headed --project=chromium
```

#### Run with specific browser
```bash
npx playwright test --project=firefox
```

#### Generate and view HTML report
```bash
npx playwright show-report
```

#### Debug mode
```bash
npx playwright test --debug
```

## 🔧 Configuration

### Playwright Configuration
- **Timeout**: 60 seconds per test
- **Retries**: 2 retries in CI, 0 locally
- **Browsers**: Chromium (headless), Firefox (headed with download support)
- **Screenshots**: Captured on failure
- **Videos**: Retained on failure
- **Traces**: Available on first retry

### Browser-Specific Settings
- **Firefox**: Configured for PDF downloads with disabled PDF.js
- **Chromium**: Standard desktop configuration
- **Download handling**: Automatic with specified directory

## 🛠 Technical Stack

| Technology | Purpose | Version |
|------------|---------|----------|
| [Playwright](https://playwright.dev/) | Test automation framework | ^1.58.1 |
| [Tesseract.js](https://tesseract.projectnaptha.com/) | OCR text extraction | ^7.0.0 |
| [pdf-parse](https://www.npmjs.com/package/pdf-parse) | PDF text extraction | ^2.4.5 |
| [pdf2pic](https://www.npmjs.com/package/pdf2pic) | PDF to image conversion | ^3.2.0 |
| [pdf-lib](https://pdf-lib.js.org/) | PDF manipulation | ^1.17.1 |
| [pdfjs-dist](https://mozilla.github.io/pdf.js/) | PDF processing | ^5.4.624 |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment configuration | ^16.6.1 |

## 📊 Test Reports

After test execution, detailed reports are available:
- **HTML Report**: `playwright-report/index.html` - Interactive test results
- **Test Artifacts**: `test-results/` - Screenshots, videos, traces
- **Downloads**: `downloads/` - PDF files and other downloads

## ⚠️ Known Limitations

- **PDF Processing**: Success depends on file format and network reliability
- **OCR Accuracy**: Text extraction quality varies with PDF image quality
- **Network Dependencies**: Tests require stable internet connection
- **Timing Sensitivity**: Some tests may be affected by page load times
- **Browser-Specific**: PDF handling differs between browsers

## 🔄 Best Practices

- **Environment Variables**: Use `.env` file for configuration
- **Page Objects**: Follow POM pattern for new page interactions
- **Error Handling**: Implement proper try-catch blocks
- **Cleanup**: Ensure proper resource cleanup after tests
- **Selectors**: Use data attributes or stable selectors when possible

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## 🆘 Troubleshooting

### Common Issues
- **Download failures**: Check download directory permissions
- **OCR errors**: Verify Tesseract.js installation
- **Browser launch issues**: Run `npx playwright install` again
- **Timeout errors**: Increase timeout values in configuration

### Debug Commands
```bash
# Check Playwright installation
npx playwright --version

# List installed browsers
npx playwright list

# Run with debug output
DEBUG=pw:* npx playwright test
```
