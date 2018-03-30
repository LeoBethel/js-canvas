// var ctx = $('.first-canvas')[0].getContext('2d');
function radians (degrees) {
  return (Math.PI / 180) * degrees;
}

var canvas = document.querySelector(".first-canvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 5;

ctx.fillStyle = "orange";
// ctx.fillRect(x, y, width, height);
ctx.fillRect(0, 0, 30, 30);

ctx.strokeStyle = "rebeccapurple";
// ctx.strokeRect(x, y, width, height);
ctx.strokeRect(40, 40, 30, 30);

ctx.fillStyle = "#61725A";
ctx.fillRect(400, 0, 100, 100);
// clear the bottom left corner
ctx.clearRect(400, 80, 20, 20);
// clear the top right corner
ctx.clearRect(480, 0, 20, 20);

// ctx.arc(x, y, radius, startAngle, endAngle);
ctx.arc(200, 250, 100, 0, radians(360));
ctx.stroke();
ctx.fill();

// ctx.arc(200, 250, 100, radians(90), radians(180));



ctx.globalAlpha = 1;
ctx.fillStyle = "tomato";
ctx.strokeStyle = "#aef345";
ctx.lineWidth = 2;
ctx.font = "40px Baskerville, serif";
ctx.fillText("Hello", 700, 40);
ctx.strokeText("Goodbye", 700, 110);


var prince = new Image();
// "src" is from the HTML file, not the js folder.
prince.src = "./images/prince.gif";

// images take some time to load before we can draw them
prince.onload = function () {
  ctx.globalAlpha = 1;
  // ctx.drawImage(image, x, y, width, height);
  ctx.drawImage(prince, 700, 300, 300, 240);
};

var bg = new Image();
bg.src = "./images/bg.gif";

bg.onload = function () {
  ctx.globalAlpha = 1;
  var myPattern = ctx.createPattern(bg, "repeat");
  ctx.fillStyle = myPattern;
  ctx.arc(500, 300, 150, 0, radians(360));
  ctx.fill();
};


ctx.beginPath();
ctx.fillStyle = "rgb(100, 3, 200)";
ctx.strokeStyle = "rgb(200, 53, 150)";
ctx.globalAlpha = 0.5;
// ctx.moveTo(x, y);
// ctx.lineTo(x, y);
// ctx.arcTo(x, y, radius, startAngle, endAngle);
ctx.moveTo(100, 0);
ctx.lineTo(50, 50);
ctx.lineTo(100, 100);
ctx.fill();
ctx.stroke();
ctx.closePath();
