const puppeteer = require("puppeteer");

const xpath = [
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[3]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div/span/div/div[2]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div/span/div/div[1]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[1]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[1]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[2]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div[1]/div[2]/textarea',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[5]/label',
  '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[10]/div/div/div[2]/div/div[1]/div[2]/textarea',
  '//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div[1]/div/span',
];

const responses = {
  cau8: [
    "Giúp kiểm soát chi tiêu, tránh tình trạng tiêu xài quá mức.",
    "Hỗ trợ xây dựng kế hoạch tài chính dài hạn, tiết kiệm cho tương lai.",
    "Giảm bớt căng thẳng tài chính, giúp người dùng cảm thấy an tâm hơn về tình hình tài chính cá nhân.",
  ],
  cau10: [
    "Tính năng phân tích chi tiêu, giúp theo dõi các khoản chi và phân loại chi tiêu hợp lý.",
    "Cảnh báo khi chi tiêu vượt mức dự tính hoặc khi đạt mức mục tiêu tiết kiệm.",
    "Gợi ý cách tiết kiệm, đầu tư hiệu quả.",
  ],
};

async function fillForm() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://docs.google.com/forms/d/e/1FAIpQLSdmr1bq4OHcLc2q6S-bigTZS0qJeLG2X7c4sxmROuN3CW-vIA/viewform"
  );

  for (let i = 0; i < xpath.length; i++) {
    const currentXpath = xpath[i];
    const responseKey = i < 8 ? "cau8" : "cau10"; // Chọn câu trả lời phù hợp cho từng câu hỏi

    // Tìm phần tử theo XPath và điền thông tin vào form
    await page.evaluate(
      (xpath, responses, responseKey) => {
        const result = document.evaluate(
          xpath,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        const element = result.singleNodeValue;

        if (element) {
          // Kiểm tra nếu phần tử là <textarea> và nhập văn bản vào đó
          if (element.tagName.toLowerCase() === "textarea") {
            const randomIndex = Math.floor(
              Math.random() * responses[responseKey].length
            );
            element.value = responses[responseKey][randomIndex]; // Nhập chuỗi vào textarea
            element.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch sự kiện input
          } else if (element.tagName.toLowerCase() === "label") {
            element.click(); // Nếu là <label>, click vào phần tử
          }
        } else {
          console.log("Không tìm thấy phần tử tại XPath:", xpath);
        }
      },
      currentXpath,
      responses,
      responseKey
    );
  }

  // Tìm nút gửi và nhấn vào đó
  //   const submitButton = await page.$('span[jsname="V67aGc"]'); // Dùng selector CSS thay cho XPath
  //   if (submitButton) {
  //     await submitButton.click();  // Nhấn nút gửi
  //     console.log('Đã nhấn nút gửi');
  //   } else {
  //     console.log('Không tìm thấy nút gửi');
  //   }

  // Sử dụng CSS selector để tìm nút gửi
  const submitButton = await page.$(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd");
  if (submitButton) {
    await submitButton.click();
    console.log("Đã nhấn nút gửi");
  } else {
    console.log("Không tìm thấy nút gửi");
  }

  //   await browser.close();  // Bạn có thể bỏ comment để đóng browser sau khi điền form xong
}

// Gọi hàm để thực thi
fillForm();
