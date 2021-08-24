import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export class TouchX {

  constructor(el) {
    TouchX.els = TouchX.els || [];
    TouchX.els.push(el);
    
    // this happens on global document level. Thus, single pattern!
    // Should happen once though new TouchX() multiple times
    if (TouchX._instance) return;
    TouchX._instance = this;

    this.touchOrgX; this.touchOrgY; // touch original start position 
    this.touchStaX; this.touchStaY; // touch start position
    this.touchEndX; this.touchEndY; // touch start position
    this.touchOrgAt; this.touchStaAt; // touch start time
    this.prevMove; // prev move e.g. TOP RIGHT
    this.prevEndX; this.prevEndY; // previous x/y position

    this.touchStaListener = this._setTouchSta.bind(this);
    this.touchEndListener = this._setTouchEnd.bind(this);
    this.touchMoveListener = this._setTouchMove.bind(this);

    this.isTouchDevice =  (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
    this.events = this.isTouchDevice ? 
      {start: 'touchstart', move: 'touchmove', end: 'touchend'} :
      {start: 'mousedown', move: 'mousemove', end: 'mouseup'};

    document.body.addEventListener(this.events.start, this.touchStaListener, false);
    document.addEventListener(this.events.move, this.touchMoveListener, false);
    document.addEventListener(this.events.end, this.touchEndListener);
    document.addEventListener('mouseleave', _ => this.touchStaAt = 0);
  }

  _fireEvent(detail) {
    const event = new CustomEvent('x-swipe', {bubbles: true, detail});
    document.body.dispatchEvent(event);
  }

  _setTouchSta(e) {
    if (TouchX.els.some(el => el.contains(e.target))) {
      disableBodyScroll(document.body);

      const {clientX, clientY} = this.isTouchDevice ? e.changedTouches[0] : e;
      [this.touchOrgX, this.touchOrgY] = [clientX, clientY];
      this.touchOrgAt = new Date().getTime(); 
      [this.touchStaX, this.touchStaY] = [clientX, clientY];
      [this.touchStaAt, this.touchStaEl] = [new Date().getTime(), e.target];

      this._fireEvent({type:'start', x1: clientX, y1: clientY, touchStaEl: this.touchStaElm, orgEvent: e});
    } else {
      this.reset();
    }
  }

  _setTouchMove(e) {
    if (!this.touchStaEl) return;

    const {clientX, clientY} = this.isTouchDevice ? e.changedTouches[0] : e;
    const [x1,y1,x2,y2] = [this.touchStaX, this.touchStaY, clientX, clientY];

    const [prevX1, prevY1] = [this.prevEndX, this.prevEndY];
    const {xMove, yMove} = this._getDirection(prevX1 || x2, prevY1 || y2, x2, y2);
    const direction = `${xMove} ${yMove}`.trim();
    if ((xMove && yMove) && ( direction !== this.prevMove)) {
      // reset starting x,y point and start time because dragging direction is changed
      [this.touchStaX, this.touchStaY, this.touchStaAt] = 
        [this.prevEndX, this.prevEndY,  new Date().getTime()];
      const [x1,y1] = [this.touchStaX, this.touchStaY];
      const matrix = this._getMatrix(x1, y1, x2, y2);
      this._fireEvent({type:'move', orgEvent: e, ...matrix});
    } else {
      const matrix = this._getMatrix(x1, y1, x2, y2);
      this._fireEvent({type:'move', orgEvent: e, ...matrix});
    }
    (xMove && yMove) && (this.prevMove = direction);
    [this.prevEndX, this.prevEndY] = [x2, y2];
  }

  _setTouchEnd(e) {
    if (!this.touchStaEl) return;
    enableBodyScroll(document.body);

    const {clientX, clientY} = this.isTouchDevice ? e.changedTouches[0] : e;
    [this.touchEndX, this.touchEndY] = [clientX, clientY];
    this.touchEndAt = new Date().getTime();
    const [x1, y1, x2, y2] = [this.touchStaX, this.touchStaY, this.touchEndX, this.touchEndY];
    const matrix = this._getMatrix(x1, y1, x2, y2);

    const {xMove, yMove} = this._getDirection(x1, y1, x2, y2);
    const direction = matrix.distanceX > matrix.distanceY ? xMove: yMove;
    this._fireEvent({type: 'end', direction, orgEvent: e, ...matrix});
    
    this.reset();
  }

  _getDirection(x1, y1, x2, y2) {
    const xMove = x1 === x2 ? '': x1 > x2 ? 'LEFT' : 'RIGHT';
    const yMove = y1 === y2 ? '': y1 > y2 ? 'UP' : 'DOWN';
    return {xMove, yMove};
  }

  _getMatrix(x1, y1, x2, y2) {
    const now = new Date().getTime();
    const [distanceX, distanceY] = [Math.abs(x2 - x1), Math.abs(y2 - y1)];
    const distance = Math.ceil(Math.sqrt(distanceX**2 + distanceY**2));
    const duration = now - (this.touchStaAt || now);
    const speed = distance / duration;

    const [x0, y0, staAt0] = [this.touchOrgX, this.touchOrgY, this.touchOrgAt];
    const [distX0, distY0] = [Math.abs(x2 - x0), Math.abs(y2 - y0)];
    const distance0 = Math.ceil(Math.sqrt(distX0**2 + distY0**2));
    const duration0 = now - (staAt0 || now);
    const speed0 = distance0 / duration0;

    return {
      x0, y0, x1, y1, x2, y2, distanceX, distanceY, 
      distance, duration, speed, distance0, duration0, speed0,
      touchStaEl: this.touchStaEl
    };
  }

  reset() {
    [this.touchStaX, this.touchStaY, this.touchStaAt] = [0, 0, 0];
    [this.touchEndX, this.touchEndY, this.touchEndAt] = [0, 0, 0];
    [this.prevMove, this.prevEndX, this.prevEndY] = ['', 0, 0];
    this.touchStaEl = undefined;
  }
}

window.TouchX = TouchX;