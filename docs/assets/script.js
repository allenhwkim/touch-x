// use `$` instead of `document.querySelector`
window.$ = document.querySelector.bind(document);

// enable/disable outline for click and tab
document.body.addEventListener('click', 
  e => document.body.classList.remove('a11y-outline') );
document.body.addEventListener('keydown', 
  e => (e.key === 'Tab') && document.body.classList.add('a11y-outline') );

window.addEventListener('DOMContentLoaded', function() {
});

// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
// This script checks to see if a redirect is present in the query string,
// converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
// from : https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
// to :   https://username.github.io/repo-name/one/two?a=b&c=d#qwe
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))
 