import { addCss, removeCss } from 'elements-x';
import { animate } from './animate';

const css = `
  x-slides {
    border: 1px solid #CCC;
    display: flex;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  x-slides > * {
    min-width: 100%;
  }
`;

export class XSlides extends HTMLElement {

  constructor(...args) {
    const self = super(...args);
    this._touchSwipeListener = this.touchSwipeListener.bind(this);
    return self;
  }

  connectedCallback() {
    new TouchX(this);
    addCss(this, css);
    
    this.currentNo = this.getAttribute('selected') || 0;
    Array.from(this.children)
      .forEach( (el,index) => el.setAttribute('index', index));

    this.setSlide(this.currentNo);
    window.addEventListener('resize', _ => this.setSlide(this.currentNo, false));
    document.body.addEventListener('x-swipe', this._touchSwipeListener);
  }

  disconnectedCallback() {
    removeCss(this);
    document.body.removeEventListener('x-swipe', this._touchSwipeListener);
  }
  
  animateTo(slideNo) {
    slideNo = (slideNo + this.children.length) % this.children.length;
    const nxtSlide = this.querySelector(`[index="${slideNo}"]`);

    const curScrollLeft = this.scrollLeft;
    const targetScrollLeft = this.getScrollLeft(nxtSlide);
    const diff = targetScrollLeft - curScrollLeft;
    return animate(this, (tf, f) => {
        this.scrollLeft = curScrollLeft + diff * tf;
      });
  }

  touchSwipeListener(event) {
    const {x0, x2, type, speed} = event.detail;

    if (type === 'start') {
      this.dragStartX = this.scrollLeft;
    } else if (type === 'move') {
      this.scrollLeft = this.dragStartX + (x0 - x2);
    } else if (type === 'end') {
      this.dragStartX = undefined;
      const x2v = x2 + (x2-x0)*(1 + speed); // consider speed
      if (Math.abs(x2v - x0) > (this.offsetWidth / 2)) {
        const nextSlide = x2 < x0 ? this.currentNo + 1 : this.currentNo - 1;
        this.animateTo(nextSlide).then(_ => this.setSlide(nextSlide));
      } else {
        this.animateTo(this.currentNo);
      }
    } else if (type === 'cancel') {
      this.dragStartX = undefined;
      this.setSlide(this.currentNo);
    }
  }

  getScrollLeft(slideEl) {
    let [prev, scrollLeft] = [slideEl.previousElementSibling, 0];
    while(prev) {
      scrollLeft += prev.offsetWidth;
      prev = prev.previousElementSibling;
    }
    return scrollLeft;
  }


  setSlide(currentNo) {
    currentNo = (currentNo + this.children.length) % this.children.length;
    this.currentNo = currentNo;
    const currentSlide = this.querySelector(`[index="${currentNo}"]`);
    const {prevSlideNum, nextSlideNum} = this._getNumSiblings(currentSlide);
    const aroundNumToBe = Math.floor(this.children.length / 2);
    if (nextSlideNum > aroundNumToBe) {
      const moves = nextSlideNum - aroundNumToBe; // 9 - 5 = 4
      for (var i =0 ; i < moves; i++) {
        this.insertBefore(this.lastElementChild, this.firstElementChild);
      }
    } else if (prevSlideNum >= aroundNumToBe) {
      const moves = prevSlideNum - aroundNumToBe; // 9 - 5 = 4
      for (var i =0 ; i <= moves; i++) {
        this.insertBefore(this.firstElementChild, null);
      }
    }

    this.scrollLeft =  this.getScrollLeft(currentSlide);
  }

  _getNumSiblings(currentSlide) {
    let [prevSlideNum, nextSlideNum] = [0,0];
    let next = currentSlide.nextElementSibling;
    while(next) {
      nextSlideNum++;
      next = next.nextElementSibling;
    }

    let prev = currentSlide.previousElementSibling;
    while(prev) {
      prevSlideNum++;
      prev = prev.previousElementSibling;
    }

    return {prevSlideNum, nextSlideNum};
  }
}

if (!customElements.get('x-slides')) {
  customElements.define('x-slides', XSlides);
}
