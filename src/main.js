import { defineAll } from "elements-x";
import '../lib'; // enables window.TouchX class

import './assets/x-resizer';
import './assets/x-slides';
import './assets/x-draggable';
import './assets/x-sortable';
import './assets/x-drawer';

defineAll();

// use `$` instead of `document.querySelector`
const $ = document.querySelector.bind(document);

(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&');
    }).join('?');
    window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
  }
}(window.location));
 
window.addEventListener('DOMContentLoaded', function() {
  // enable/disable outline for click and tab
  document.body.addEventListener('click', 
    e => document.body.classList.remove('a11y-outline') );
  document.body.addEventListener('keydown', 
    e => (e.key === 'Tab') && document.body.classList.add('a11y-outline') );
  $('#dark-mode-switch').addEventListener('click', event => {
    const theme = $('#dark-mode-switch').getAttribute('aria-checked') === 'true' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
  
  const theme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', theme);
  $('#dark-mode-switch').setAttribute('status', theme === 'dark' ? 'on' : 'off');

  // Hide sidebar for a smaller screen
  if('createTouch' in document || screen.width <= 699) {
    $('#sidebar').classList.add('hidden'); 
    document.body.addEventListener('x-route', _ =>  $('#sidebar').classList.add('hidden')); 
  }

  // Show an error message if not connected to the internet
  // check if there is any element with href="(https:)?//" or src="(https:)?//"
  const headEl = document.querySelector('head');
  const el = headEl.querySelector('[href^="http"], [href^="//"], [src^="http"], [src^="//"]');
  if (el) {
    // if so, make a fetch call to the https://unpkg.com/elements-x
    window.fetch('//unpkg.com/elements-x')
      .then(resp => { 
        !resp.ok && alert('Requires internet connection, but not fully working');
      }).catch(e => {
        // if not successful, show an error message with close button
        alert('Requires internet connection, but not fully working');
      });
  }
});
