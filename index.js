const puppeteer = require("puppeteer");
const link =
  "https://docs.google.com/forms/d/e/1FAIpQLSdGyBBA_RqhG1zP9crEsyFn9ClUGO42QbBPFymh5grdtPP6ag/viewform";

const xpath = [
  {
    cau1: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[3]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[4]/label',
    ],
  },
  {
    cau2: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/span/div/div[1]/label',
    ],
  },
  {
    cau3: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div[1]/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div[1]/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div[1]/div/span/div/div[3]/label',
    ],
  },
  {
    cau4: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div[1]/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div[1]/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div[1]/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div[1]/div/span/div/div[4]/label',
    ],
  },
  {
    cau5: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[3]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau6: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau7: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau8: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau9: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[3]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau10: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[10]/div/div/div[2]/div/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[10]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau11: [
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[11]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[11]/div/div/div[2]/div/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[11]/div/div/div[2]/div/div/span/div/div[3]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[11]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau12: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[12]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[12]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau13: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[13]/div/div/div[2]/div/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[13]/div/div/div[2]/div/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[13]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[13]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau14: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[14]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[14]/div/div/div[2]/div/div/span/div/div[2]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[14]/div/div/div[2]/div/div/span/div/div[3]/label',
    ],
  },
  {
    cau15: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[15]/div/div/div[2]/div/div[1]/div[2]/textarea',
    ],
  },
  {
    cau16: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[16]/div/div/div[2]/div/div/span/div/div[1]/label',
      // '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[16]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
];

const responses = {
  cau15: [
    "Giao diện trang chủ cần trực quan hơn để người dùng dễ tìm kiếm dịch vụ.",
    "Nên bổ sung bộ lọc theo giá, loại dịch vụ và địa điểm để khách hàng dễ dàng chọn lựa.",
    "Cần cải thiện tốc độ tải trang, đặc biệt trên thiết bị di động.",
    "Nên có phần đánh giá và bình luận từ khách hàng để tăng độ tin cậy.",
    "Cần bổ sung tính năng đặt lịch hẹn linh hoạt theo từng khung giờ.",
    "Thiếu thông tin chi tiết về nhân viên giúp việc, cần thêm hồ sơ năng lực.",
    "Nên có phần giới thiệu ngắn gọn về quy trình làm việc để khách hàng dễ hiểu.",
    "Thanh toán trực tuyến chưa hỗ trợ nhiều phương thức, nên bổ sung thêm.",
    "Cần có chính sách hoàn tiền rõ ràng khi có vấn đề với dịch vụ.",
    "Tính năng chat giữa khách hàng và nhân viên giúp việc cần cải thiện giao diện.",
    "Thiếu hướng dẫn sử dụng cho người mới, có thể thêm video demo.",
    "Trang web chưa hỗ trợ đa ngôn ngữ, nên có tiếng Anh và tiếng Việt.",
    "Cần tối ưu hiển thị trên mobile, hiện tại một số phần bị vỡ giao diện.",
    "Nên có thông báo nhắc nhở khi sắp đến lịch hẹn với nhân viên giúp việc.",
    "Chưa có chương trình khuyến mãi hoặc mã giảm giá cho khách hàng mới.",
    "Tính năng tìm kiếm chưa chính xác, cần cải thiện thuật toán lọc dữ liệu.",
    "Thiết kế form đăng ký phức tạp, cần đơn giản hóa cho trải nghiệm tốt hơn.",
    "Cần tích hợp bản đồ để hiển thị vị trí của nhân viên giúp việc gần nhất.",
    "Thiếu điều khoản sử dụng rõ ràng, cần bổ sung trên trang web.",
    "Nên có chính sách bảo hiểm hoặc cam kết an toàn cho khách hàng.",
    "Hỗ trợ khách hàng chưa có phản hồi nhanh, cần cải thiện dịch vụ chăm sóc.",
    "Nên có tính năng gợi ý dịch vụ theo lịch sử đặt trước của khách hàng.",
    "Thiếu báo cáo tổng quan về số lượng đơn hàng, doanh thu cho quản trị viên.",
    "Cần bổ sung tính năng chia sẻ đánh giá lên mạng xã hội để tăng độ phủ sóng.",
    "Hệ thống đăng nhập chưa hỗ trợ đăng nhập bằng Google hoặc Facebook.",
  ],
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fillForm(page) {
  await page.goto(link);

  for (let i = 0; i < xpath.length; i++) {
    const currentObj = xpath[i];
    const key = Object.keys(currentObj)[0];
    const currentXpath = currentObj[key];
    const responsesForQuestion = responses[key];

    // Select a random XPath if multiple are available
    const xpathToUse =
      currentXpath.length >= 2
        ? currentXpath[Math.floor(Math.random() * currentXpath.length)]
        : currentXpath[0];

    // Fix: Use proper response key based on the question
    const randomResponse =
      key === "cau15" && responsesForQuestion
        ? responsesForQuestion[
            Math.floor(Math.random() * responsesForQuestion.length)
          ]
        : null;

    // Fill the form with selected response
    await page.evaluate(
      (xpath, response) => {
        const result = document.evaluate(
          xpath,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const element = result.singleNodeValue;

        if (element) {
          if (element.tagName.toLowerCase() === "textarea" && response) {
            element.value = response;
            element.dispatchEvent(new Event("input", { bubbles: true }));
          } else if (element.tagName.toLowerCase() === "label") {
            element.click();
          }
        } else {
          console.log("Element not found at XPath:", xpath);
        }
      },
      xpathToUse,
      randomResponse
    );

    // Add a small delay between interactions to appear more human-like
    await delay(300);
  }

  // Improved submit button detection
  const submitSelectors = [
    ".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd",
    "span.NPEfkd.RveJvd.snByac",
    'div[role="button"][jsname="M2UYVd"]',
    ".freebirdFormviewerViewNavigationSubmitButton",
  ];

  let submitButton = null;

  // Try each selector until we find the button
  for (const selector of submitSelectors) {
    submitButton = await page.$(selector);
    if (submitButton) break;
  }

  // Try XPath approach if CSS selectors fail
  if (!submitButton) {
    const submitXPaths = [
      '//span[contains(text(), "Submit")]',
      '//span[contains(text(), "Gửi")]',
      '//div[@role="button"][contains(., "Submit")]',
    ];

    for (const xpathSelector of submitXPaths) {
      const elements = await page.$x(xpathSelector);
      if (elements.length > 0) {
        submitButton = elements[0];
        break;
      }
    }
  }

  if (submitButton) {
    console.log("Submit button found, clicking...");
    await submitButton.click();
    await delay(200);
  } else {
    console.log("Submit button not found. Trying alternative method...");
    await page.keyboard.press("Enter");
    await delay(200);
  }
}

// Run form submissions with improved error handling
async function runMultipleTimes(count = 30) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-extensions", "--disable-gpu"],
      defaultViewport: { width: 1280, height: 800 },
    });

    let successCount = 0;

    for (let i = 0; i < count; i++) {
      console.log(`Run ${i + 1}/${count}`);
      const page = await browser.newPage();

      try {
        // Set timeout for navigation to detect stuck pages
        page.setDefaultNavigationTimeout(30000);

        // Block unnecessary resources to improve speed
        await page.setRequestInterception(true);
        page.on("request", (request) => {
          const resourceType = request.resourceType();
          if (
            resourceType === "image" ||
            resourceType === "font" ||
            resourceType === "media"
          ) {
            request.abort();
          } else {
            request.continue();
          }
        });

        await fillForm(page);
        successCount++;

        // Random delay between form submissions (1-5 seconds)
        const randomWait = 1000 + Math.floor(Math.random() * 4000);
        await new Promise((resolve) => setTimeout(resolve, randomWait));
      } catch (error) {
        console.error(`Error in run ${i + 1}:`, error.message);
      } finally {
        await page.close();
      }
    }

    console.log(
      `Completed ${successCount}/${count} successful form submissions.`
    );
  } catch (error) {
    console.error("Browser initialization error:", error);
    await browser.close();
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Allow customizing number of submissions through command line argument
const submissionCount = process.argv[2] ? parseInt(process.argv[2]) : 30;
runMultipleTimes(submissionCount);
