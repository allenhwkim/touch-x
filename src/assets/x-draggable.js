import { addCss, removeCss } from 'elements-x';
/* global TouchX */

const css = `
  x-draggable { user-select: none; }
  .x-drop-active { box-shadow: 0 0 16px orange; transform: scale(1.05); }
`;

export class XDraggable extends HTMLElement {

  constructor(...args) {
    const self = super(...args);
    this.dragClone;
    this.onDrop = _ => 1;
    this._touchSwipeListener = this.touchSwipeListener.bind(this);
    return self;
  }

  connectedCallback() {
    const selector = this.getAttribute('drop-zone');
    this.dropZones = selector && Array.from(document.querySelectorAll(selector));

    console.log(selector, this.dropZones);
    Array.from(this.children).forEach(el => {
      el.classList.add('x-draggable');
      new TouchX(el);
    });
    addCss(this, css);
    document.body.addEventListener('x-swipe', this._touchSwipeListener);
  }

  disconnectedCallback() {
    removeCss(this);
    document.body.removeEventListener('x-swipe', this._touchSwipeListener);
  }

  touchSwipeListener(event) {
    const {x1, y1, x2, y2, touchStaEl, type} = event.detail;
    const [w, h] = [touchStaEl.offsetWidth, touchStaEl.offsetHeight];

    if (type === 'start') {
      touchStaEl.style.opacity = .5;
      touchStaEl.classList.add('x-active');
      if (touchStaEl.classList.contains('x-draggable')) {
        this.dragClone = touchStaEl.cloneNode(true);
        this.dragClone.style.position = 'absolute';
        console.log({x1, y1, w, h});
        this.dragClone.style.left = `${x1 - w/2}px`;
        this.dragClone.style.top = `${y1 - h/2}px`;
        this.dragClone.style.width = `${w}px`;
        this.dragClone.style.height = `${h}px`;
        this.dragClone.addEventListener('contextmenu', e => e.preventDefault());
        document.body.appendChild(this.dragClone);
      }
    } else if (type === 'move' && this.dragClone) {
      this.dragClone.style.opacity = 1;
      this.dragClone.style.left = `${x2 - w/2}px`;
      this.dragClone.style.top = `${y2 - h/2}px`;
      const dropZoneEl = this.onDropZone(x2 - w/2, y2 - h/2);
      if (dropZoneEl && !dropZoneEl.contains(touchStaEl)) {
        dropZoneEl.classList.add('x-drop-active');
      } else {
        this.dropZones.forEach(el => el.classList.remove('x-drop-active'));
      }
    } else if (type === 'end') {
      const dropZoneEl = this.onDropZone(x2 - w/2, y2 - h/2);
      if (dropZoneEl && this.onDrop({dropZoneEl, ...event.detail})) {
        dropZoneEl.appendChild(touchStaEl);
      }
      this.dropZones.forEach(el => el.classList.remove('x-drop-active'));

      touchStaEl.style.opacity = null;
      touchStaEl.classList.remove('x-active');
      this.reset();
    } else if (type === 'cancel') {
      touchStaEl.style.opacity = null;
      touchStaEl.classList.remove('x-active');
      this.reset();
    }
  }

  reset() {
    this.dragClone && document.body.removeChild(this.dragClone);
    this.dragClone = undefined;
  }

  onDropZone(px, py) {
    if (!this.dropZones) return;
    const found = this.dropZones.find(el => {
      const {x, y, width, height} = el.getBoundingClientRect();
      return x <= px &&  y <= py &&
        px <= x + width && py <= y + height;
    });
    return found;
  }


}

if (!customElements.get('x-draggable')) {
  customElements.define('x-draggable', XDraggable);
}
