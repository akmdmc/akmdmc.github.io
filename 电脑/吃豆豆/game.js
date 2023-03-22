/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const pacmanFrames = document.getElementById("animations");
const ghostFrames = document.getElementById("ghosts");

let createRect = (x, y, width, height, color) => {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height)
};

let fps = 30;
let oneBlockSize = 20;
let wallColor = "#342DCA";
let wallSpaceWidth = oneBlockSize / 1.5;
let wallOffset = (oneBlockSize - wallSpaceWidth) / 2;
let wallInnerColor = "black";
let foodColor = "#FEB897"
let score = 0;
let pacman;
let ghosts = [];
let ghostCount = 4;
let lives = 3;
let foodCount = 0;

const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_BOTTOM = 1;

//地图 0是无法到达的路，1是墙，2是路
let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
  [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]


let randomTargetsForGhost = [
  {
    x: 1 * oneBlockSize, y: 1 * oneBlockSize
  },
  {
    x: 1 * oneBlockSize, y: (map.length - 2) * oneBlockSize
  },
  {
    x: (map[0].length - 2) * oneBlockSize, y: 1 * oneBlockSize
  },
  {
    x: (map[0].length - 2) * oneBlockSize, y: (map.length - 2) * oneBlockSize
  },
]

let ghostLocation = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 128,
    y: 0,
  },
  {
    x: 0,
    y: 128,
  },
  {
    x: 128,
    y: 128,
  },
]

let createGhosts = () => {
  ghosts = [];
  for (let i = 0; i < ghostCount; i++) {
    let newGhost = new Ghost(
      9 * oneBlockSize + (i % 2 == 0 ? 0 : 1) * oneBlockSize,
      10 * oneBlockSize + (i % 2 == 0 ? 0 : 1) * oneBlockSize,
      oneBlockSize,
      oneBlockSize,
      pacman.speed / 2,
      ghostLocation[i % 4].x,
      ghostLocation[i % 4].y,
      120,
      120,
      6 + i
    )
    ghosts.push(newGhost);
  }
}

//
let createNewPacman = () => {
  pacman = new Pacman(oneBlockSize, oneBlockSize, oneBlockSize, oneBlockSize, oneBlockSize / 5);
}
createNewPacman();
createGhosts();

for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (map[i][j] == 2) {
      foodCount++;
    }
  }
}

window.addEventListener("keydown", (e) => {
  let k = e.keyCode;
  setTimeout(() => {
    if (k == 37 || k == 65) {//左
      pacman.nextDirection = DIRECTION_LEFT;
    }
    else if (k == 38 || k == 87) {//上
      pacman.nextDirection = DIRECTION_UP;
    }
    else if (k == 39 || k == 68) {//右
      pacman.nextDirection = DIRECTION_RIGHT;
    } else if (k == 40 || k == 83) {//下
      pacman.nextDirection = DIRECTION_BOTTOM;
    }
  }, 1)
})
{
var startx, starty;
//获得角度
function getAngle(angx, angy) {
  return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
  var angx = endx - startx;
  var angy = endy - starty;
  var result = 0;

  //如果滑动距离太短
  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
    return result;
  }

  var angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
    result = 1;
  } else if (angle > 45 && angle < 135) {
    result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    result = 3;
  } else if (angle >= -45 && angle <= 45) {
    result = 4;
  }
  return result;
}
//手指接触屏幕
document.addEventListener("touchstart", function (e) {
  startx = e.touches[0].pageX;
  starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener("touchend", function (e) {
  var endx, endy;
  endx = e.changedTouches[0].pageX;
  endy = e.changedTouches[0].pageY;
  var direction = getDirection(startx, starty, endx, endy);
  switch (direction) {
    case 0:
      break;
    case 1:
      pacman.nextDirection = DIRECTION_UP;
      break;
    case 2:
      pacman.nextDirection = DIRECTION_BOTTOM;
      break;
    case 3:
      pacman.nextDirection = DIRECTION_LEFT;
      break;
    case 4:
      pacman.nextDirection = DIRECTION_RIGHT;
      break;
    default:
  }
}, false);
}
//
let gameLoop = () => {
  draw()
  updated()
};

let updated = () => {
  pacman.moveProcess()
  pacman.eat()
  for (let i = 0; i < ghosts.length; i++) {
    ghosts[i].moveProcess()
  }

  if (pacman.checkGhostCollision()) {
    reStartGame()
  }

  if (score >= foodCount) {
    drawWin()
    clearInterval(gameInterval)
  }
};

let drawWin = () => {
  canvasContext.font = "24px Emulogic"
  canvasContext.fillStyle = "white"
  canvasContext.fillText("WIN!", 150, 200)
}

let reStartGame = () => {
  createNewPacman();
  createGhosts();
  lives = lives - 1;
  if (lives == 0) {
    gameover()
  }
}

let drawGameOver = () => {
  canvasContext.font = "24px Emulogic"
  canvasContext.fillStyle = "white"
  canvasContext.fillText("GAME OVER!", 150, 200)
}

let gameover = () => {
  drawGameOver();
  clearInterval(gameInterval);
}

let drawFoods = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] == 2) {
        createRect(j * oneBlockSize + oneBlockSize / 3, i * oneBlockSize + oneBlockSize / 3, oneBlockSize / 3, oneBlockSize / 3, foodColor)
      }
    }

  }
}

let drawScore = () => {
  canvasContext.font = "20px Emulogic"
  canvasContext.fillStyle = "white"
  canvasContext.fillText("Score:" + score, 0, oneBlockSize * (map.length + 1) + 10)
  canvasContext.font = "20px Emulogic"
  canvasContext.fillStyle = "white"
  canvasContext.fillText("Lives:" + lives, 200, oneBlockSize * (map.length + 1) + 10)
}

let drawGhosts = () => {
  for (let i = 0; i < ghosts.length; i++) {
    ghosts[i].draw()
  }
}

let draw = () => {
  createRect(0, 0, canvas.width, canvas.height, "black")
  drawWalls()
  drawFoods()
  pacman.draw();
  drawScore()
  drawGhosts();
};

let gameInterval = setInterval(gameLoop, 1000 / fps);

let drawWalls = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] == 1) { // 说明这个是墙
        createRect(j * oneBlockSize, i * oneBlockSize, oneBlockSize, oneBlockSize, wallColor);
        if (j > 0 && map[i][j - 1] == 1) {
          createRect(j * oneBlockSize, i * oneBlockSize + wallOffset, wallSpaceWidth + wallOffset, wallSpaceWidth, wallInnerColor);
        }
        if (i > 0 && map[i - 1][j] == 1) {
          createRect(j * oneBlockSize + wallOffset, i * oneBlockSize, wallSpaceWidth, wallSpaceWidth + wallOffset, wallInnerColor);
        }
        if (j < map[0].length - 1 && map[i][j + 1] == 1) {
          createRect(j * oneBlockSize + wallOffset, i * oneBlockSize + wallOffset, wallSpaceWidth + wallOffset, wallSpaceWidth, wallInnerColor);
        }
        if (i < map.length - 1 && map[i + 1][j] == 1) {
          createRect(j * oneBlockSize + wallOffset, i * oneBlockSize + wallOffset, wallSpaceWidth, wallSpaceWidth + wallOffset, wallInnerColor);
        }
      }
    }

  }
}