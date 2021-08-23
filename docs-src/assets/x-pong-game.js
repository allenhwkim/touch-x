export class XPongGame extends HTMLElement {
  constructor(...args) {
    const self = super(...args);

    this.ballSpeed = 4; // starting ball speed, real speed is directionX(Y)

    // computer moving distance by each frame. 
    // the more, the better defender. it can be set by dialog.
    this.computerSpeed = 5;
    // real ball speed. this increases every 10 seconds
    [this.directionX, this.directionY] = [this.ballSpeed, this.ballSpeed];

    [this.computerScore, this.playerScore] = [0, 0];
    [this.computerHit, this.playerHit] = [false, false];
    this.startTimestamp; // used to increase ball speed
    this.touchStart = 0; // used to calculate player moving distance

    this.swipeListener = this._swipeListener.bind(this);
    this.windowResizeListener = this._windowResizeListener.bind(this);
  }

  connectedCallback() {
    this.table = document.querySelector('#table');
    this.ball = document.querySelector('#table #ball');
    this.player = document.querySelector('#player');
    this.computer = document.querySelector('#computer');
    this.touchArea = document.querySelector('#touch-area');
    this.dialog = document.querySelector('#dialog');
    this.ballRadius = parseInt(this.ball.getAttribute('r'));

    const {dialog, touchArea, ballRadius} = this;

    // dialog input and button event listeners
    dialog.querySelector('#computer-speed').addEventListener('change', e => {
      this.computerSpeed = parseInt(e.target.value);
    });
    dialog.querySelector('#exit-button').addEventListener('click', e => {
      dialog.style.display = 'none';
    });
    dialog.querySelector('#start-button').addEventListener('click', e => {
      [this.computerScore, this.playerScore] = [0, 0];
      touchArea.querySelector('.score .player').innerText = 0;
      touchArea.querySelector('.score .computer').innerText = 0;
      dialog.style.display = 'none';
      this.serveBall();
    });

    setTimeout(_ => {
      player.setAttribute('x', 50);
      player.setAttribute('y', table.offsetHeight - ballRadius);
      new TouchX(touchArea);
    }, 200);

    // moves player
    document.body.addEventListener('x-swipe', this.swipeListener);
    // when window resizes, player also needs to be repositioned
    window.addEventListener('resize', this.windowResizeListener);
  }

  disconnectedCallback() {
    document.body.removeEventListener('x-swipe', this.swipeListener);
    window.removeEventListener('resize', this.windowResizeListener);
  }

  // call by requestAnimationFrame(moveBall).
  // . moves ball by directionX(Y)
  // . increase ball speed every 10 seconds
  // . when ball hits barrier it bounces off
  // . when ball is out of table, mark score
  // . when ball moves, computer also moves
  moveBall(timestamp) {
    const {ball, table, touchArea, ballRadius, player, computer, computerSpeed} = this;

    const cx = parseInt(ball.getAttribute('cx'));
    const cy = parseInt(ball.getAttribute('cy'));
    const speedIncrease = Math.floor((timestamp - this.startTimestamp) / 10000);
    if (speedIncrease) {
      this.startTimestamp = timestamp;
      this.directionX += this.directionX > 0 ? 1 : -1;
      this.directionY += this.directionY > 0 ? 1 : -1;
    }

    const leftLimit = ballRadius;
    const rightLimit = table.offsetWidth - ballRadius;

    const [nextCX, nextCY] = [cx + this.directionX, cy + this.directionY];
    if (nextCX < leftLimit || nextCX > rightLimit) {
      this.directionX = -this.directionX;
    }
    if (this.playerHit && this.detectCollision(ball, computer)) {
      this.directionY = -this.directionY;
      [this.computerHit, this.playerHit] = [true, false];
    }
    else if (this.computerHit && this.detectCollision(ball, player)) {
      this.directionY = -this.directionY;
      [this.computerHit, this.playerHit] = [false, true];
    }

    const [xPos, yPos] = [cx + this.directionX, cy + this.directionY];
    if (yPos < 0) { // computer lost
      this.playerScore++;
      touchArea.querySelector('.score .player').innerText = this.playerScore;
      this.serveBall();
    } else if (yPos > table.offsetHeight) { // plaer lost
      this.computerScore++;
      touchArea.querySelector('.score .computer').innerText = this.computerScore;
      this.serveBall();
    } else {
      ball.setAttribute('cx', xPos);
      ball.setAttribute('cy', yPos);
      if (this.playerHit) {
        const computerPos = parseInt(computer.getAttribute('x'));
        const computerMove = xPos > computerPos ? computerSpeed : -computerSpeed;
        computer.setAttribute('x', computerPos + computerMove);
      }
      requestAnimationFrame(this.moveBall.bind(this));
    }
  }

  // returns if ball and paddle collides or not
  detectCollision(ball, paddle) {
    const cx = parseInt(ball.getAttribute('cx'));
    const cy = parseInt(ball.getAttribute('cy'));
    const r = parseInt(ball.getAttribute('r'));
    const [x1, y1, w1, h1] = [cx - r, cy - r, r * 2, r * 2];

    const x2 = parseInt(paddle.getAttribute('x'));
    const y2 = parseInt(paddle.getAttribute('y'));
    const w2 = parseInt(paddle.getAttribute('width'));
    const h2 = parseInt(paddle.getAttribute('height'));

    const colliding = x1 < (x2 + w2) && (x1 + w1) > x2 &&
      y1 < (y2 + h2) && (y1 + h1) > y2;
    return colliding;
  }

  // show a dialog with message to (re)start the game
  confirmDialog(message) {
    const {dialog, computerScore, playerScore} = this;

    const startButton = dialog.querySelector('#start-button');
    const startText = computerScore + playerScore === 0 ? 'Start' : 'Restart';
    startButton.innerText = startText;
    dialog.querySelector('#message').innerText = message;
    dialog.style.display = 'block';
  }

  // starts the game
  serveBall() {
    const {playerScore, computerScore, ballSpeed, ballRadius, table, computer, ball} = this;

    if (playerScore >= 7 || computerScore >= 7) {
      const msg = playerScore >= 7 ? 'You Win !!!' : 'Computer Win :(';
      if (!this.confirmDialog(msg))
        return;
    }
    const rand = ballRadius +
      Math.floor((table.offsetWidth - ballRadius) * Math.random());
    computer.setAttribute('x', rand - 40);
    ball.setAttribute('cy', ballRadius + 10);
    ball.setAttribute('cx', rand);

    this.computerHit = true;
    this.startTimestamp = performance.now();
    [this.directionX, this.directionY] = [ballSpeed, ballSpeed];
    setTimeout(this.moveBall.bind(this), 3000);
  }

  _swipeListener(event) {
    const { x0, x2, type } = event.detail;
    if (type === 'start') {
      this.touchStart = parseInt(this.player.getAttribute('x'));
    }
    else if (type === 'move') {
      let x = this.touchStart + (x2 - x0);
      x = x < 0 ? 0 : x;
      x = x > this.table.offsetWidth - 80 ? this.table.offsetWidth - 80 : x;
      this.player.setAttribute('x', x);
    }
  }

  _windowResizeListener(event) {
    this.player.setAttribute('y', this.table.offsetHeight - this.ballRadius);
  }
}

if (!customElements.get('x-pong-game')) {
  customElements.define('x-pong-game', XPongGame);
}
