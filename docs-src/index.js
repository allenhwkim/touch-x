// import 'elements-x';
// import { TouchX } from '../src';

window.$ = document.querySelector.bind(document);

// enable/disable outline for click and tab
document.body.addEventListener('click', 
  e => document.body.classList.remove('a11y-outline') );
document.body.addEventListener('keydown', 
  e => (e.key === 'Tab') && document.body.classList.add('a11y-outline') );

window.addEventListener('DOMContentLoaded', function() {
});
 