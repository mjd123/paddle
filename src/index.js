import Paddle from './paddle.js';
import Ball from './ball.js';
import Move from './move.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle, ctx);

new Move(paddle);

function gameLoop() {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    paddle.draw(ctx);

    ball.update();
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
