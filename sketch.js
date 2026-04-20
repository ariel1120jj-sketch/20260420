let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide(); // 隱藏預設在畫布下方的 HTML 影片元件
}

function draw() {
  background('#e7c6ff');

  let w = windowWidth * 0.6;
  let h = windowHeight * 0.6;
  let x = (windowWidth - w) / 2;
  let y = (windowHeight - h) / 2;

  push(); // 儲存目前的繪圖設定
  translate(x + w, y); // 將座標原點移至影像的右上角
  scale(-1, 1); // 水平翻轉座標軸
  image(capture, 0, 0, w, h); // 在翻轉後的座標系中繪製影像
  pop(); // 還原繪圖設定，避免影響後續繪製的元件
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
