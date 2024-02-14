function rose(theta, n, d, amplitude) {
  var k = n / d;
  var x = amplitude * Math.cos(k * theta) * Math.cos(theta);
  var y = amplitude * Math.cos(k * theta) * Math.sin(theta);
  return { x: x, y: y };
}

function point(x, y, context, isCenter) {
  context.beginPath();

  context.arc(x, y, 1, 0, 2 * Math.PI, true);
  context.stroke();
}

var canvas, context, width, height, nodes;
var t = 0;

function setup() {
  canvas = document.getElementById("rose");
  context = canvas.getContext("2d");
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  context.shadowBlur = 15;
  context.shadowColor = "#fff";

  context.strokeStyle = "#FF007F";
}

function loop() {
  window.requestAnimationFrame(loop);
  width = window.innerWidth;
  height = window.innerHeight;
  centerX = width / 2;
  centerY = height / 2;
  context.translate(width / 2, height / 2);

  var n = 7;
  var d = 2;
  var p = rose(t, n, d, 100.0);

  point(p.x, p.y, context, p.x === centerX && p.y === centerY);

  context.translate(-width / 2, -height / 2);

  t += 0.05;
}

setup();
loop();
