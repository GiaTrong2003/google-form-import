# Project Documentation

## Overview

This project uses Puppeteer to automate form submissions on a Google Form.

## Files

- `submit-form.js`: Contains the script to automate form submissions using Puppeteer.

## Usage

1. Install dependencies:
    ```sh
    npm install
    ```

2. Run the script:
    ```sh
    node submit-form.js
    ```

## Code Snippet

Here is a snippet from :

```javascript
const puppeteer = require("puppeteer");

const xpath = [
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[3]/label',
  // ...
];

const responses = {
  cau8: [
    "Giúp kiểm soát chi tiêu, tránh tình trạng tiêu xài quá mức.",
    "Hỗ trợ xây dựng kế hoạch tài chính dài hạn, tiết kiệm cho tương lai.",
    // ...
  ],
};