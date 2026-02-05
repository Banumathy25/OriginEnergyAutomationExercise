# Use official Playwright image (with browsers preinstalled)
FROM mcr.microsoft.com/playwright:focal

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project
COPY . .

# Optional: Set Playwright to run in headless mode (recommended for CI/Docker)
ENV PLAYWRIGHT_HEADLESS=true

# Run tests by default
CMD ["npx", "playwright", "test"]

