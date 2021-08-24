/**
 * This is for those who wants to run build with webpack
 * 
 * To build with webpack, run
 * 
 *   $ npm install -D @babel/core babel-loader clean-webpack-plugin copy-webpack-plugin \
 *     html-webpack-plugin http-server webpack webpack-cli webpack-dev-server
 *   $ webpack --config docs-src/webpack.config.js
 * 
 * To run webpack-dev-server with webpack
 * 
 *   $ webpack serve --config docs-src/webpack.config.js --mode=development --open
 * 
 */
import 'elements-x';
import '../src'; // enables window.TouchX class

import './assets/x-resizer';
import './assets/x-slides';
import './assets/x-draggable';
import './assets/x-sortable';
import './assets/x-drawer';