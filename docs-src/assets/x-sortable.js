import { addCss, removeCss } from 'elements-x';

const css = `
  x-sortable { user-select: none; position: relative;}
  x-sortable > *, x-sortable li { cursor: grab; position: relative; }
  x-sortable.x-active .x-target:after { 
    content: ''; height: 2px; display: block; background: #AAA; 
    position: absolute; inset: auto 0 -4px 0;
  }
  x-sortable .x-cloned { position: absolute; pointer-events: none; display: none; }
`;

export class XSortable extends HTMLElement {

  constructor(...args) {
    const self = super(...args);
    this._touchSwipeListener = this.touchSwipeListener.bind(this);
    return self;
  }

  connectedCallback() {
    addCss(this, css);
    new TouchX(this);
    document.body.addEventListener('x-swipe', this._touchSwipeListener);
  }

  disconnectedCallback() {
    removeCss(this);
    document.body.removeEventListener('x-swipe', this._touchSwipeListener);
  }

  touchSwipeListener(event) {
    const {type, x2, y2, touchStaEl} = event.detail;

    if (type === 'start') {
      touchStaEl.style.opacity = .5;
      this.classList.add('x-active');

      this.clonedEl = touchStaEl.cloneNode(touchStaEl, true);
      this.clonedEl.classList.add('x-cloned');
      this.clonedEl.style.width = `${touchStaEl.offsetWidth}px`;
      this.appendChild(this.clonedEl);
    } else if (type === 'move') {
      this.querySelector('.x-target')?.classList.remove('x-target');
      this.target = document.elementFromPoint(x2, y2);
      this.target?.classList.add('x-target');
      this._setClonedElPos(x2, y2);
    } else if (type === 'end') {
      if (this.target && this.contains(this.target)) {
        try {
          this.target.insertAdjacentElement('afterend', touchStaEl)
        } catch(e) {}
      }
      touchStaEl.style.opacity = null;
      this.classList.remove('x-active');
      this.clonedEl.remove();
    } else if (type === 'cancel') {
      touchStaEl.style.opacity = null;
      this.classList.remove('x-active');
      this.clonedEl.remove();
    }
  }

  _setClonedElPos(x2, y2) {
    this.clonedEl.style.top = `${y2 - this.offsetTop + window.scrollY }px`;
    this.clonedEl.style.left = `${x2 - this.offsetLeft}px`;
    this.clonedEl.style.display = 'block';
  }
}

if (!customElements.get('x-sortable')) {
  customElements.define('x-sortable', XSortable);
}