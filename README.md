# touch-x

Drag/Swipe Library For Mobile/Desktop Devices 

Caveat: 
This is currently only focused on single touch and swipe(move) actions.
double tab, zoom, 3 finger actions are not covered with this library.

## Usage with Webpack, Browserify, & Other Bundlers
If you want to use it with a bundler, install `touch-x` with npm:
```
$ npm install touch-x --save-dev
```
Simply import the module into your bundle:
```
import {XTouch} from  'touch-x';
```
## Usage with Browser
```
<script src="//unpkg.com/touch-x"></script>
```

## How to use
Initiate a touch action with `new TouchX(cssSelector)`. 
This will fire a `x-swipe` event when the selected area is touched and moves.

```
new TouchX(document.querySelector('.touch-area'));
document.addEventListener('x-swipe', swipeListener);

function swipeListener(event) {
  const {type, x0, y0, x1, y1, x2, y2, speed, direction, ...matrix} = event.detail;
  if (type === 'start') {
    console.log(event);
  } else if (type === 'move') {
    console.log(event);
  } else if (type === 'end') {
    console.log(event);
  } else if (type === 'cancel') {
    console.log(event);
  }
}
```

### `x-swipe` event detail

| name | description |
| --- | --- |
| type | `x-touch` event type. `start`, `move`, `end` or `cancel` | 
| x0 | touch start x point. |
| y0 | touch start y point.|
| x1 | re-calculated touch start x point. It's reset when touch direction changes. |
| y1 | re-calculated touch start y point. It's reset when touch direction changes. |
| x2 | current touch x point. |
| y2 | current touch y point. |
| distanceX | distance between x1 and x2 |
| distanceY | distance between x1 and x2 |
| distance | distance between (x1, y1) and (x2, y2) |
| duration | touch duration between two points; (x1, y1) and (x2, y2) |
| speed | touch move speed between two points; (x1, y1) and (x2, y2) |
| distance0 | distance between (x0, y0) and (x2, y2) |
| duration0 | touch duration between two points; (x0, y0) and (x2, y2) |
| speed0 | touch move speed between two points; between (x0, y0) and (x2, y2) |
| touchStaEl | the element that touch has started from |
| orgEvent | original event of `touchstart` or `touchmove` or `touchend` |

## Commands For Maintainers

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm start
# build for production with minification
npm run build
```