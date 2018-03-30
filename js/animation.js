var canvas = document.querySelector(".first-canvas");
var ctx = canvas.getContext("2d");

var prince = new Image();
// "src" is from the HTML file, not the js folder.
prince.src = "./images/prince.gif";
// images take some time to load before we can draw them
prince.onload = function () {
  // more stuff here later...
};

var princeX = 0;

var ghostImage = new Image();
ghostImage.src = "./images/ghost.gif";

var ghost = {
  x: 0,
  y: 200,
  width: 200,
  height: 150,
  drawMe: function () {
    ctx.drawImage(ghostImage, this.x, this.y, this.width, this.height);
  }
};

// setInterval(function () {
// }, 1000 / 60);

function updateStuff () {
  princeX += 1;
  if (princeX >= 1000) {
    princeX = -300;
  }

  ctx.clearRect(0, 0, 1000, 500);
  ctx.drawImage(prince, princeX, 0, 300, 240);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "deeppink";
  ctx.strokeRect(princeX, 0, 300, 240);

  ghost.drawMe();

  requestAnimationFrame(function () {
    updateStuff();
  });
}
updateStuff();


// -----------------------------------------------------------------------------


var body = document.querySelector("body");
body.onkeydown = function () {
  switch (event.keyCode) {
    case 32: // space bar
    case 87: // W key (90 for French keyboards)
    case 38: // up arrow
      ghost.y -= 5;
      break;

    case 65: // A key (81 for French keyboards)
    case 37: // left arrow
      ghost.x -= 5;
      break;

    case 83: // S key
    case 40: // down arrow
      ghost.y += 5;
      break;

    case 68: // D key
    case 39: // right arrow
      ghost.x += 5;
      break;
  }

  if (ghost.x >= 1000) {
    ghost.x = -ghost.width;
  }
};
