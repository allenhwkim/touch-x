export class XResizer extends HTMLElement {

  constructor(...args) {
    const self = super(...args);
    this.swipeListener = this._swipeListener.bind(this);  
  }

  connectedCallback() {
    new TouchX(this);
    this.wResizer = this.getAttribute('width') !== null;
    this.hResizer = this.getAttribute('height') !== null;

    this.prevEl = this.previousElementSibling;
    this.nextEl = this.nextElementSibling;

    [this.prevElWidth, this.nextElWidth] = [0, 0];
    [this.prevElHeight, this.nextElHeight] = [0, 0];

    document.addEventListener('x-swipe', this.swipeListener);
  }

  disconnectedCallback() {
    document.removeEventListener('x-swipe', this.swipeListener);
  }

  _swipeListener(event) {
    const {type, touchStaEl, x0, y0, x2, y2} = event.detail;
    if (touchStaEl !== this) return;
    if (type === 'start') {
      this.classList.add('active');
      [this.prevElWidth, this.nextElWidth] = 
        [this.prevEl.offsetWidth, this.nextEl.offsetWidth];
      [this.prevElHeight, this.nextElHeight] = 
        [this.prevEl.offsetHeight, this.nextEl.offsetHeight];
    }
    if (type === 'move') {
      if (this.wResizer) {
        const change = x2 - x0;
        // console.log({change, x0, x2})
        this.prevEl.style.width = 
          (Math.max(this.prevElWidth + change, 20)) + 'px';
        this.nextEl.style.width = 
          (Math.max(this.nextElWidth - change, 20)) + 'px';
      } else if (this.hResizer) {
        const change = y2 - y0;
        this.prevEl.style.height =
          (Math.max(this.prevElHeight + change, 20)) + 'px';
        this.nextEl.style.height = 
          (Math.max(this.nextElHeight - change, 20)) + 'px';
      }
    }
    if (type === 'end') {
      this.classList.remove('active');
    } 
  }
}

if (!customElements.get('x-resizer')) {
  customElements.define('x-resizer', XResizer);
}