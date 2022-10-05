/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const collisionCanvas = document.getElementById('collisionCanvas');
const ctxcollisionCanvas = collisionCanvas.getContext('2d');
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

let score = 0;
let gameOver = false;
ctx.font = '50px Impact'

let timeToNextRaven = 0;
let ravenInterval = 500; //间隔多久出现怪
let lastTime = 0;

let ravens = [];
class Raven {
    constructor() {
        this.spriteWidth = 573;
        this.spriteHeight = 523;
        this.sizeModifier = Math.random() * 0.4 + 0.15
        this.width = this.spriteHeight * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x = -this.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;
        this.markedForDeletion = false;
        //动画精灵表
        this.image = new Image();
        this.image.src = './小狗多种动作.png';
        this.frame = 0;
        this.timeSinceFlap = 0;
        this.flapInterval = 100 * (this.directionX / 8); // 小狗动作的快慢
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
        this.color = `rgb(${this.randomColors[0]},${this.randomColors[1]},${this.randomColors[2]})`;
    }
    updated(deltatime) {
        if (this.y < 0 || this.y > canvas.height - this.height) {
            this.directionY = this.directionY * -1;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.x > canvas.width) {
            this.markedForDeletion = true;
            gameOver = true;
        }
        this.timeSinceFlap += deltatime;
        if (this.timeSinceFlap > this.flapInterval) {
            this.frame > 5 ? this.frame = 0 : this.frame++;
            this.timeSinceFlap = 0;
        }
    }
    draw() {
        ctxcollisionCanvas.fillStyle = this.color;
        ctxcollisionCanvas.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.frame * this.spriteWidth, this.spriteHeight * 3, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

let explosions = [];
class Explosion {
    constructor(x, y, size) {
        this.size = size;
        this.spriteWidth = 330.5;
        this.spriteHeight = 220.2;
        this.width = this.size;
        this.height = this.size;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = './爆炸.png';
        this.frame = 0;
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.sound = new Audio();
        this.sound.src = './小小杰丶 - 你干嘛~哎哟.mp3';
        this.markedForDeletion = false;
    }
    async updated(deltatime) {
        if (this.frame === 0) {
            this.sound.play();
        }
        this.timeSinceLastFrame += deltatime;
        if (this.timeSinceLastFrame > this.frameInterval) {
            this.frame++;
            this.timeSinceLastFrame = 0;
            if (this.frame > 5) {
                this.markedForDeletion = true;
            }
        }
        setTimeout(() => {
            this.sound.pause()
        }, 3000)
    }
    draw() {
        ctx.drawImage(this.image, 0, this.frame * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}


function drawScore() {
    ctx.fillStyle = 'black';
    ctx.fillText('score:' + score, 50, 75);
    ctx.fillStyle = 'white';
    ctx.fillText('score:' + score, 50, 80)
}

function drawGameOver() {
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText('your score is ' + score, canvas.width / 2, canvas.height / 2);
    ctx.fillStyle = 'white';
    ctx.fillText('your score is ' + score, canvas.width / 2, canvas.height / 2 + 5);
    const btn = document.createElement('button');
    btn.innerHTML = '重新开始';
    btn.addEventListener('click', function() {
        location.reload();
    })
    document.querySelector('body').appendChild(btn);
}

window.addEventListener('click', function(e) {
    const detectPixelColor = ctxcollisionCanvas
        .getImageData(e.x, e.y, 1, 1);
    console.log(detectPixelColor);
    const pc = detectPixelColor.data;
    ravens.forEach(raven => {
        if (raven.randomColors[0] === pc[0] && raven.randomColors[1] === pc[1] && raven.randomColors[2] === pc[2]) {

            raven.markedForDeletion = true;
            score++;
            explosions.push(new Explosion(raven.x, raven.y, raven.width))
        }
    })
})

function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxcollisionCanvas.clearRect(0, 0, canvas.width, canvas.height);
    let deltatime = timeStamp - lastTime;
    lastTime = timeStamp;
    timeToNextRaven += deltatime;
    if (timeToNextRaven > ravenInterval) {
        ravens.push(new Raven());
        timeToNextRaven = 0;
        ravens.sort(function(a, b) {
            return a.width - b.width;
        })
    }
    drawScore();
    [...ravens, ...explosions].forEach(oj => oj.updated(deltatime));
    [...ravens, ...explosions].forEach(oj => oj.draw());
    ravens = ravens.filter(ob => !ob.markedForDeletion);
    explosions = explosions.filter(ob => !ob.markedForDeletion);
    if (!gameOver) requestAnimationFrame(animate);
    else {
        drawGameOver();
    }
}

setTimeout(function() {
    animate(0);
}, 2000)