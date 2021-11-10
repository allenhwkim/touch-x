/* global TouchX, WebKitCSSMatrix */
import {setHTML, addCss, removeCss} from 'elements-x';

import { animate } from '../animate';
import css from './x-drawer.css';

export class XDrawer extends HTMLElement {

  constructor(...args) {
    const self = super(...args);
    this.width; this.height;
    this._url = location.href;
    this.classList.remove('x-visible');
    this._docClickListener = this.docClickListener.bind(this);
    this._touchSwipeListener = this.touchSwipeListener.bind(this);
    return self;
  }

  connectedCallback() {
    if (this.getAttribute('desktop') !== null) return;
  
    this.pos = this.getAttribute('right') !== null ? 'RIGHT':
      this.getAttribute('top') !== null ? 'TOP':
        this.getAttribute('bottom')  !== null ? 'BOTTOM': 'LEFT';

    this.handle = document.createElement('div');
    this.handle.classList.add('x-handle');
    this.appendChild(this.handle);

    addCss(this, css);
    [this.width, this.height] = [this.offsetWidth, this.offsetHeight];

    new TouchX(this.handle);
    document.body.addEventListener('x-swipe', this._touchSwipeListener);
    document.body.addEventListener('click', this._docClickListener);

    if (!this.classList.contains('x-visible')) {
      this.style.transform = this._getHideTransform(0,0,1);
    }
  }

  disconnectedCallback() {
    removeCss(this);
    document.body.removeEventListener('x-swipe', this._touchSwipeListener);
    document.body.removeEventListener('click', this._docClickListener);
  }

  _getShowTransform(trX, trY, tfp) { // tfp: timing functioned progress
    const [pos, _width, _height] = [this.pos, this.width, this.height];
    const horizontal = ['LEFT', 'RIGHT'].includes(pos);
    const px = horizontal ? trX * (1 - tfp) : trY * (1 - tfp); // 50 -> 0
    return horizontal ? `translateX(${px}px)` :  `translateY(${px}px)`;
  }

  _getHideTransform(trX, trY, tfp) {  // tfp: timing functioned progress
    const [pos, width, height] = [this.pos, this.width, this.height];
    const horizontal = ['LEFT', 'RIGHT'].includes(pos);
    let px = pos === 'LEFT' ? trX + (width + trX) * tfp * -1 : // 0 -> -100
      pos === 'RIGHT' ? trX + (width + trX) * tfp:             // 0 -> 100
        pos === 'TOP' ? trY + (height + trY) * tfp * -1:         // 0 -> -100
          pos === 'BOTTOM' ? trY + (height + trY) * tfp: '';       // 0 -> 100
    px = pos === 'LEFT' ? Math.max(px, width * -1) :
      pos === 'RIGHT' ? Math.min(px, width) :
        pos === 'TOP' ? Math.max(px, height * -1) :
          pos === 'BOTTOM' ? Math.min(px, height) : undefined;
    return horizontal ? `translateX(${px}px)` :  `translateY(${px}px)`;
  }

  toggle() {
    this.classList.contains('x-visible') ? 
      this.hide('toggle') : this.show('toggle');
  }

  // watch URL change, and if changed, hide side bar
  docClickListener(event) {
    if (this.contains(event.target)) {
      setTimeout(_ => { // give some time to detect url changed
        (this._url !== location.href) && this.hide('url-change');
        this._url = location.href;
      });
    } else if (!this.showHideJustDone) {
      this.hide('document-click');
    }
  }

  touchSwipeListener(event) {
    const {x2, y2, distance0, touchStaEl, direction, type, ..._matrix} = event.detail;
    if (touchStaEl !== this.handle) return;

    if (type === 'move') {
      this.showPartly(this.pos, x2, y2);
    } else if (type === 'end') {
      if (['LEFT', 'RIGHT'].includes(this.pos)) {
        distance0 > (this.width / 2) ?  // if more than half visible
          this.show('drag') : this.hide('drag');
      } else {
        distance0 > (this.height / 2) ?  // if more than half visible
          this.show('drag') : this.hide('drag');
      }
    }
  }

  show(reason) {
    const style = window.getComputedStyle(this);
    const matrix = new WebKitCSSMatrix(style.transform);
    const [trX, trY] = [matrix.m41, matrix.m42];

    this.classList.add('x-visible');
    this.showHideJustDone = true;
    setTimeout(_ => this.showHideJustDone = undefined, 100);

    animate(this, (tfProgress, progress) => {
      const transform = this._getShowTransform(trX, trY, tfProgress);
      this.style.transform = transform;
    }, 250, animate.TIMING_FUNCTIONS.linear);
  }

  showPartly(pos, x2, y2) {
    const [w, h, ww, wh] = 
      [this.width, this.height, window.innerWidth, window.innerHeight];

    this.classList.add('x-visible');
    const transform =
      pos === 'LEFT' ? `translateX(${ Math.min(x2 - w, 0) }px)` :
        pos === 'RIGHT' ? `translateX(${ Math.max(w - (ww - x2), 0) }px)` :
          pos === 'TOP' ? `translateY(${ Math.min(y2 - h, 0) }px)` :
            pos === 'BOTTOM' ? `translateY(${ Math.max(h - (wh - y2), 0) }px)` : '';
    this.style.transform = transform;
  }

  hide(reason) { // swipe left, or url change
    if (!this.classList.contains('x-visible')) return;

    const style = window.getComputedStyle(this);
    const matrix = new WebKitCSSMatrix(style.transform);
    const [trX, trY] = [matrix.m41, matrix.m42];
    
    this.showHideJustDone = true;
    setTimeout(_ => this.showHideJustDone = undefined, 100);

    animate(this, (pct, time) => {
      const transform = this._getHideTransform(trX, trY, pct);
      // console.log ({trX, transform})
      this.style.transform = transform;
    }, 250, animate.TIMING_FUNCTIONS.linear)
      .then(_ =>  this.classList.remove('x-visible'));
  }
}

if (!customElements.get('x-drawer')) {
  customElements.define('x-drawer', XDrawer);
}
