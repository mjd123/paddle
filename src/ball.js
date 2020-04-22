export default class Ball {
    constructor(gameWidth, gameHeight, paddle, ctx) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: Math.floor(Math.random() * Math.floor(600)),
            y: 10
        };
        this.speed = { x: 3, y: 3 }; // how many pixels to move
        this.size = 16;
        this.paddle = paddle;
        this.ctx = ctx;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(time) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.y <= 0) {
            this.speed.y = -this.speed.y;
        }
        if (this.position.x + this.size > this.gameWidth || this.position.x <= 0) {
            this.speed.x = -this.speed.x;
        }

        if (
            this.position.x <= this.paddle.position.x + this.paddle.width &&
            this.position.x >= this.paddle.position.x &&
            this.position.y - this.size > this.paddle.position.y - this.paddle.height
        ) {
            console.log('x');

            this.speed.y = -this.speed.y;
        }
        //reset
        if (this.position.y + this.size > this.gameHeight) {
            this.position = {
                x: Math.floor(Math.random() * Math.floor(600)),
                y: 10
            };
        }
    }
}
