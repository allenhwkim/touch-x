const DRAW_FUNCTIONS = {
  fadeIn: function(tf, _) { this.style.opacity = tf; },
  fadeOut: function(tf, _) { this.style.opacity = 1-tf; },
  slideIn: function(tf, _) { _draw(this, `translateX(${-100+tf*100}%)`, tf); },
  slideInLeft: function(tf, _) { _draw(this, `translateX(${-100+tf*100}%)`, tf); },
  slideOutLeft: function(tf, _) { _draw(this, `translateX(${-1*tf*100}%)`, 1-tf); },
  slideInRight: function(tf, _) { _draw(this, `translateX(${100 - tf*100}%)`, tf); },
  slideOut: function(tf, _) { _draw(this, `translateX(${1*tf*100}%)`, 1-tf); },
  slideOutRight: function(tf, _) { _draw(this, `translateX(${1*tf*100}%)`, 1-tf); },
  slideInDown: function(tf, _) { _draw(this, `translateY(${-100+tf*100}%)`, tf); },
  slideOutUp: function(tf, _) { _draw(this, `translateY(${-1*tf*100}%)`, 1-tf); },
  slideInUp: function(tf, _) { _draw(this, `translateY(${100 - tf*100}%)`, tf); },
  slideOutDown: function(tf, _) { _draw(this, `translateY(${1*tf*100}%)`, 1-tf); },
  zoomIn: function(tf, _) { _draw(this, `scale(${tf})`, tf); },
  zoomOut: function(tf, _) { _draw(this, `scale(${1-tf})`, 1-tf); },
  rotateIn: function(tf, _) { _draw(this, `rotate(${-180 + tf * 180}deg)`, tf); },
  rotateOut: function(tf, _) { _draw(this, `rotate(${tf * 180 * -1}deg)`, 1-tf); }
};

function _draw(el, transform, opacity) {
  el.style.transform = transform; 
  el.style.opacity = opacity;
}

const TIMING_FUNCTIONS = {
  linear: n => n,
  easeIn: n => Math.pow(n, 1.675),
  easeOut: n => 1 - Math.pow(1 - n, 1.675),
  easeInOut: n => .5*(Math.sin((n - .5)*Math.PI) + 1),
  inExpo: n => 0 == n ? 0 : Math.pow(1024, n - 1),
  outExpo: n => 1 == n ? n : 1 - Math.pow(2, -10 * n),
  inOutExpo: n => {
    if (0 == n) return 0;
    if (1 == n) return 1;
    if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
    return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
  },
  bounceEaseOut: function(n) {
    function bounce(n) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) { /* eslint no-constant-condition: 0 */
        if (n >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * n) / 4, 2) + Math.pow(b, 2);
        }
      }
    }
    return 1 - bounce(1 - n);
  }
};

function _cssAnimate(el, draw, duration, timing) {

  const htmlEl = document.documentElement;
  if (timing) {
    const timingFunc = timing.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
    htmlEl.style.setProperty('--animation-timing-function', timingFunc);
  }
  if (duration) {
    htmlEl.style.setProperty('--animation-duration', duration + 'ms');
  }
  const drawClass = draw.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();

  const durationProp = getComputedStyle(document.documentElement)
    .getPropertyValue('--animation-duration') || '250ms';
  if (drawClass.match(/^expand-/)) { // width / height animation by pushing contents
    el.className.split(' ').filter(klass => klass.match(/^x-expand/))
      .forEach(klass => el.classList.remove(klass));
    return new Promise(resolve => {
      el.classList.add(`x-${drawClass}`, 'x-hidden');
      setTimeout(_ => resolve(), 100);
    }).then(_ => new Promise(resolve => {
      el.classList.remove('x-hidden');
      setTimeout(_ => resolve(), parseInt(durationProp));
    }));
  } else {
    el.className.split(' ').filter(klass => klass.match(/^x-expand/))
      .forEach(klass => el.classList.remove(klass));
    el.classList.add(`x-${drawClass}`);
    return new Promise(resolve => {
      setTimeout(_ => {
        el.classList.remove(`x-${drawClass}`);
        resolve();
      }, parseInt(durationProp));
    });
  }
}

function _jsAnimate(el, draw, duration, timing) {
  // save parent position, then set parent position relative, height as it is
  duration = duration || 250;
  const drawFn = draw || DRAW_FUNCTIONS.fadeIn;
  const timingFn = timing || TIMING_FUNCTIONS.linear;

  const start = performance.now();
  return new Promise(function(resolve) {
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      (timeFraction > 1) && (timeFraction = 1);
      drawFn.bind(el)(timingFn(timeFraction), timeFraction);
      timeFraction < 1 ? requestAnimationFrame(animate) : resolve(true);
    });
  });
}

export function animate(el, draw, duration, timing) {
  if (typeof draw === 'string') {
    return _cssAnimate(el, draw, duration, timing);
  } else if (typeof draw === 'function') {
    return _jsAnimate(el, draw, duration, timing);
  }
}
animate.TIMING_FUNCTIONS = TIMING_FUNCTIONS;
animate.DRAW_FUNCTIONS = DRAW_FUNCTIONS;
