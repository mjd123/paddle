export default class Move {
    constructor(paddle) {
        this.speed = 20;
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 37:
                    if (paddle.position.x >= 0) {
                        paddle.position.x += -this.speed;
                    }

                    break;

                case 39:
                    if (paddle.position.x + paddle.width <= paddle.gameWidth) {
                        paddle.position.x += this.speed;
                    }
                    break;
            }
        });
    }
}
