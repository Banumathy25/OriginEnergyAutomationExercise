# Origin Energy Pricing Automation

A robust end-to-end test automation framework for the Origin Energy website using **Playwright** (JavaScript). This project automates pricing flows, plan validation, PDF processing, and content extraction with advanced OCR and PDF parsing.

---

## 🎯 Overview

This suite validates the complete user journey on the Origin Energy website: address search, plan selection, PDF download, and content validation. It uses the Page Object Model (POM) for maintainable, scalable automation.

---

## ✨ Features

- **End-to-End Testing**: Automates pricing flow from address search to plan validation
- **Advanced PDF Processing**: Download, extract, and validate PDF content (text & OCR)
- **Page Object Model**: Structured, reusable page objects
- **Multi-Browser Support**: Chromium & Firefox
- **Robust Selectors**: Reliable element identification
- **Visual Testing**: Screenshots/videos on failure
- **Parallel Execution**: Fast, parallel browser runs
- **Docker Support**: (If using Docker, see below)

---

## 📁 Project Structure

```
├── pages/                 # Page Object Model implementations
│   ├── BasePage.js        # Base page with common functionality
│   ├── PricingPage.js     # Main pricing page interactions
│   ├── PlansPage.js       # Plans listing and selection
│   └── PlanDetailsPage.js # Individual plan detail handling
├── tests/                 # Test specifications
│   ├── origin-pricing.spec.js  # Main pricing flow tests
│   └── basicTests.js      # Basic functionality tests
├── utils/                 # Utility functions
│   └── helpers.js         # PDF processing, OCR, and helpers
├── downloads/             # Downloaded files storage
├── playwright-report/     # Test execution reports
├── test-results/          # Test artifacts (screenshots, videos, traces)
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies and scripts
├── Dockerfile             # (Optional) Docker container definition
├── docker-compose.yml     # (Optional) Docker Compose setup
└── README.md              # Project documentation
```

---

## 🧪 Test Coverage

### Pricing Flow Validation
- Address search and selection
- Electricity/gas plan filtering
- Plan availability verification
- Plan details navigation (new tabs)
- PDF download and processing
- Content extraction with OCR fallback

### Technical Features
- Dynamic dropdown handling
- Multi-tab navigation
- File download verification
- Error handling and recovery
- Environment-based configuration

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OriginEnergyAutomationExercise
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

- **All tests:**
  ```bash
  npx playwright test
  ```
- **Specific test file:**
  ```bash
  npx playwright test tests/origin-pricing.spec.js
  ```
- **Headed mode:**
  ```bash
  npx playwright test --headed --project=chromium
  ```
- **Specific browser:**
  ```bash
  npx playwright test --project=firefox
  ```
- **HTML report:**
  ```bash
  npx playwright show-report
  ```
- **Debug mode:**
  ```bash
  npx playwright test --debug
  ```

#### (Optional) Running with Docker
If you wish to run tests in a containerized environment:
```bash
docker-compose up --build
```

---

## 🔧 Configuration

- **Timeout:** 60s per test
- **Retries:** 2 (CI), 0 (local)
- **Browsers:** Chromium (headless), Firefox (headed, PDF download support)
- **Screenshots/Videos:** On failure
- **Traces:** On first retry
- **Download handling:** Automatic, specified directory

---

## 🛠 Technical Stack

| Technology     | Purpose                    | Version   |
|---------------|----------------------------|-----------|
| Playwright    | E2E test automation        | ^1.58.1   |
| dotenv        | Manage environment config  | ^16.6.1   |

---

## 📊 Test Reports

- **HTML Report:** `playwright-report/index.html`
- **Artifacts:** `test-results/` (screenshots, videos, traces)
- **Downloads:** `downloads/` (PDFs, etc.)
- **Screenshots:** `screenshots/` (captured on failures)

---

## ⚠️ Known Limitations

- PDF processing depends on file/network reliability
- OCR accuracy varies with PDF quality
- Requires stable internet connection
- Some tests are timing-sensitive
- PDF handling differs by browser

---

## 🔄 Best Practices

- Use `.env` for configuration
- Follow POM for new page objects
- Use try-catch for error handling
- Clean up resources after tests
- Prefer stable selectors (data attributes)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License. See [package.json](package.json) for details.

---

## 🆘 Troubleshooting

- **Download failures:** Check download directory permissions
- **OCR errors:** Verify Tesseract.js installation
- **Browser launch issues:** Run `npx playwright install` again
- **Timeout errors:** Increase timeout in config

### Debug Commands
```bash
npx playwright --version         # Check Playwright version
npx playwright list              # List installed browsers
DEBUG=pw:* npx playwright test   # Run with debug output
```
