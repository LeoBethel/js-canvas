// new Pipe(0, 0, 20, 80)
function Pipe (myX, myY, myW, myH) {
  this.x = myX;
  this.y = myY;
  this.width = myW;
  this.height = myH;
}

Pipe.prototype.drawMe = function () {
  ctx.fillStyle = "#057e04";
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

function getTop (obj) {
  return obj.y;
}
function getBottom (obj) {
  return obj.y + obj.height;
}
function getLeft (obj) {
  return obj.x;
}
function getRight (obj) {
  return obj.x + obj.width;
}

function collision (objA, objB) {
  return getBottom(objA) >= getTop(objB)    &&
         getTop(objA)    <= getBottom(objB) &&
         getRight(objA)  >= getLeft(objB)   &&
         getLeft(objA)   <= getRight(objB);
}

function pipeCollision () {
  var hasCollided = false;

  allPipes.forEach(function (onePipe) {
    if (collision(celine, onePipe)) {
      hasCollided = true;
    }
  });

  return hasCollided;
}

// -----------------------------------------------------------------------------

var canvas = document.querySelector(".first-canvas");
// adjust canvas size to window size
canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 120;

var ctx = canvas.getContext("2d");

var celineImage = new Image();
celineImage.src = "./images/celine.gif";
var celine = {
  x: 0,
  y: canvas.height / 2,
  width: 150,
  height: 84,
  drawMe: function () {
    ctx.drawImage(celineImage, this.x, this.y, this.width, this.height);
  }
};

var allPipes = [
  new Pipe(300, 0, 30, 200),
  new Pipe(550, canvas.height-200, 30, 200),
  new Pipe(800, 0, 30, 300),
  new Pipe(1050, canvas.height-250, 30, 250),
  new Pipe(1300, 0, 30, 350),
];

function updateStuff () {
  // clear old drawings from the entire canvas before drawing again
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  celine.drawMe();
  allPipes.forEach(function (onePipe) {
    onePipe.x -= 2;
    onePipe.drawMe();

    // if pipe width is 30, reset when x = -30 (off screen)
    if (onePipe.x <= -onePipe.width) {
      onePipe.x = canvas.width;
    }
  });

  // don't continue the animation if there is a collision
  if (pipeCollision()) {
    return;
  }

  // update again as soon as the browser will allow
  requestAnimationFrame(function () {
    updateStuff();
  });
}

// start the drawing loop
updateStuff();

// -----------------------------------------------------------------------------

var body = document.querySelector("body");
body.onkeydown = function () {
  // stop celine from moving if she has collided
  if (pipeCollision()) {
    return;
  }

  switch (event.keyCode) {
    case 32: // space bar
    case 87: // W key (90 for French keyboards)
    case 38: // up arrow
      celine.y -= 5;
      break;

    case 65: // A key (81 for French keyboards)
    case 37: // left arrow
      celine.x -= 5;
      break;

    case 83: // S key
    case 40: // down arrow
      celine.y += 5;
      break;

    case 68: // D key
    case 39: // right arrow
      celine.x += 5;
      break;
  }
};
