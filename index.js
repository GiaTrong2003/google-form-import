const puppeteer = require("puppeteer");

const xpath = [
  {
    cau1: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[5]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[4]/label',
    ],
  },
  {
    cau2: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/span/div/div[3]/label',
    ],
  },
  {
    cau3: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau4: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau5: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[2]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[5]/div/div/div[2]/div/div/span/div/div[4]/label',
    ],
  },
  {
    cau6: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[6]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau7: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[3]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[1]/label',
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[7]/div/div/div[2]/div/div/span/div/div[2]/label',
    ],
  },
  {
    cau8: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[8]/div/div/div[2]/div/div[1]/div[2]/textarea',
    ],
  },
  {
    cau9: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[9]/div/div/div[2]/div/div/span/div/div[5]/label',
    ],
  },
  {
    cau10: [
      '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[10]/div/div/div[2]/div/div[1]/div[2]/textarea',
    ],
  },
];

const responses = {
  cau8: [
    "Giúp kiểm soát chi tiêu, tránh tình trạng tiêu xài quá mức.",
    "Hỗ trợ xây dựng kế hoạch tài chính dài hạn, tiết kiệm cho tương lai.",
    "Giảm bớt căng thẳng tài chính, giúp người dùng cảm thấy an tâm hơn về tình hình tài chính cá nhân.",
    "Quản lý tài chính cá nhân giúp tôi duy trì sự ổn định tài chính và tránh rơi vào tình trạng nợ nần.",
    "Nó giúp tôi lập kế hoạch chi tiêu hợp lý, tiết kiệm cho các mục tiêu dài hạn như mua nhà hoặc nghỉ hưu.",
    "Quản lý tài chính cá nhân cũng giúp tôi dễ dàng đối phó với những tình huống khẩn cấp mà không phải vay mượn.",
    "Thông qua việc quản lý tài chính, tôi có thể theo dõi và kiểm soát các khoản chi tiêu để không vượt quá ngân sách.",
    "Điều này giúp tôi cảm thấy an tâm hơn về tài chính và giảm căng thẳng liên quan đến tiền bạc.",
  ],
  cau10: [
    "Tính năng phân tích chi tiêu, giúp theo dõi các khoản chi và phân loại chi tiêu hợp lý.",
    "Cảnh báo khi chi tiêu vượt mức dự tính hoặc khi đạt mức mục tiêu tiết kiệm.",
    "Gợi ý cách tiết kiệm, đầu tư hiệu quả.",
    "Ứng dụng nên có tính năng theo dõi chi tiêu, giúp tôi phân loại các khoản chi và dễ dàng kiểm soát tài chính.",
    "Tính năng cảnh báo khi chi tiêu vượt quá ngân sách đã đặt ra hoặc khi gần đạt được mục tiêu tiết kiệm sẽ rất hữu ích.",
    "Ứng dụng nên đưa ra các gợi ý về cách tiết kiệm và đầu tư hiệu quả dựa trên thói quen chi tiêu của tôi.",
    "Có thể kết nối với tài khoản ngân hàng và các dịch vụ thanh toán để tự động cập nhật giao dịch và số dư.",
    "Tính năng phân tích và báo cáo chi tiết giúp tôi nhận ra các thói quen chi tiêu và cải thiện quản lý tài chính cá nhân.",
  ],
};

async function fillForm(page) {
  await page.goto(
    "https://docs.google.com/forms/d/e/1FAIpQLSdmr1bq4OHcLc2q6S-bigTZS0qJeLG2X7c4sxmROuN3CW-vIA/viewform"
  ); // Địa chỉ trang bạn muốn truy cập

  for (let i = 0; i < xpath.length; i++) {
    const currentObj = xpath[i];
    const key = Object.keys(currentObj)[0]; // Lấy key (cau1, cau2, ...)
    const currentXpath = currentObj[key]; // Lấy mảng XPath tương ứng với key
    const responsesForQuestion = responses[key]; // Lấy câu trả lời cho câu hỏi

    // Nếu độ dài của mảng currentXpath lớn hơn 2, chọn ngẫu nhiên một phần tử trong mảng
    const xpathToUse =
      currentXpath.length >= 2
        ? currentXpath[Math.floor(Math.random() * currentXpath.length)] // Chọn ngẫu nhiên
        : currentXpath[0]; // Nếu không, lấy phần tử đầu tiên
    const responseKey = i < 8 ? "cau8" : "cau10"; // Chọn câu trả lời phù hợp cho từng câu hỏi
    //
    const randomIndex = Math.floor(
      Math.random() * responses[responseKey].length
    );

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
            element.value = responses[responseKey]; // Nhập chuỗi vào textarea
            element.dispatchEvent(new Event("input", { bubbles: true })); // Dispatch sự kiện input
          } else if (element.tagName.toLowerCase() === "label") {
            element.click(); // Nếu là <label>, click vào phần tử
          }
        } else {
          console.log("Không tìm thấy phần tử tại XPath:", xpath);
        }
      },
      xpathToUse, // Sử dụng xpath đã chọn ngẫu nhiên
      responsesForQuestion, // Sử dụng câu trả lời cho câu hỏi
      randomIndex // chỉ số (number) ngẫu nhiên tính theo độ dài của mảng responsesForQuestion
    );
  }

  // Sử dụng CSS selector để tìm nút gửi
  const submitButton = await page.$(".uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd");
  if (submitButton) {
    await submitButton.click();
    console.log("Đã nhấn nút gửi");
  } else {
    console.log("Không tìm thấy nút gửi");
  }
}

// Chạy fillForm 15 lần
async function runMultipleTimes() {
  const browser = await puppeteer.launch({ headless: false });
  for (let i = 0; i < 2; i++) {
    console.log(`Chạy lần thứ ${i + 1}`);
    const page = await browser.newPage();
    await fillForm(page);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Chờ 5 giây
    await page.close();
  }
  await browser.close();
}

runMultipleTimes();
