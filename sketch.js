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

  image(capture, x, y, w, h);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
