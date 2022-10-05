/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width =600;
const CANVAS_HEIGHT = canvas.height = 400;
const HOUR_HAND_LENGTH = 20;    //时针长度
const MINUTE_HAND_LENGTH = 30;  //分针长度
const SECOND_HAND_LENGTH = 45;  //秒针长度
const RADIUS = 100;             //时针半径
const img = document.querySelector("#bg")

//画圆
function drawCircle(length = RADIUS,color = 'rgb(57, 106, 147)'){
    ctx.save();
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.arc(CANVAS_WIDTH/2,CANVAS_HEIGHT/2,length,0,2*Math.PI)
    ctx.fillStyle = color
    ctx.fill()
    ctx.restore()
}

//画数字
function drawNumber(num){
    ctx.save();
    let offsetAngele = num*5/60*2*Math.PI;
    let offsetX = Math.cos(offsetAngele)*(RADIUS-32);
    let offsetY = Math.sin(offsetAngele)*(RADIUS-32);
    //阴影
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 1;
    ctx.shadowColor = 'black';
    //字体样式
    ctx.fillStyle = "white"
    ctx.font = "24px Arial";   //设置文本样式，大小，字体
    ctx.textAlign="center";         //文本对齐方式，start、end
    ctx.textBaseline = "middle";    //上下对齐方式，top、middle、bottom
    ctx.fillText(num,CANVAS_WIDTH/2+offsetY,CANVAS_HEIGHT/2-offsetX);
    ctx.restore()
}

//画指针
// 时间，指针长度，指针开始位置百分比（0~1）
function drawHand(time,handLength=RADIUS,begin=0,color = 'white'){
    ctx.save()
    let offsetAngele = time/60*2*Math.PI;
    let offsetX = Math.cos(offsetAngele)*handLength;
    let offsetY = Math.sin(offsetAngele)*handLength;
    ctx.strokeStyle = color
    ctx.moveTo(CANVAS_WIDTH/2+offsetY*begin,CANVAS_HEIGHT/2-offsetX*begin);
    ctx.lineTo(CANVAS_WIDTH/2+offsetY,CANVAS_HEIGHT/2-offsetX);
    ctx.stroke()
    ctx.restore();
}

//写Logo
function drawLogo(){
    ctx.save()
    //阴影
    // ctx.shadowOffsetX = 1;
    // ctx.shadowOffsetY = 3;
    // ctx.shadowBlur = 1;
    // ctx.shadowColor = 'black';
    //字体样式
    ctx.fillStyle = "black"
    ctx.font = "18px Bradley Hand ITC";   //设置文本样式，大小，字体
    ctx.textAlign="center";         //文本对齐方式，start、end
    ctx.textBaseline = "middle";    //上下对齐方式，top、middle、bottom
    ctx.fillText('By  akmdmc',CANVAS_WIDTH/2+220,CANVAS_HEIGHT/2+170)
    ctx.restore();
}

function draw(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.save();
    //背景
    // ctx.drawImage(img,0,4,CANVAS_WIDTH,CANVAS_WIDTH,0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    //画圆
    drawCircle(RADIUS*1.1,'rgb(7, 17, 24)')//外圆
    drawCircle() //内圆
    //画指针
    const data = new Date();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let second = data.getSeconds();
    drawHand(hour*5,HOUR_HAND_LENGTH,-0.3);//时针
    drawHand(minute,MINUTE_HAND_LENGTH,-0.3);//分针
    drawHand(second,SECOND_HAND_LENGTH,-0.4);//秒针
    //画数字
    for (let i = 1; i <= 12; i++) {
        drawNumber(i)
    }
    //画圆盘细条点缀
    for (let i = 1; i <= 60; i++) {
        drawHand(i,RADIUS*0.95,0.9,'black')
        if(i%5 === 0){
            drawHand(i,RADIUS*0.95,0.85,'black')
        }
    }
    //写文字
    drawLogo()
    requestAnimationFrame(draw);
}
draw()