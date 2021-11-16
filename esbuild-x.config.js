/* global module, require */
const open = require('open');
const esbuildX = require('esbuild-x');
const rimraf = require('rimraf').sync;
const { minifyHtmlPlugin, minifyCssPlugin } = esbuildX.plugins;
const { copy, injectEsbuildResult, runStaticServer, watchAndReload } = esbuildX.postBuilds;

const config = {};

/**
 * write github pages to docs folder
 */
config.build = {
  entryPoints: ['./src/main.js'],
  outdir: 'docs',
  plugins: [minifyCssPlugin, minifyHtmlPlugin],
  preBuilds: [ function clear() {rimraf('docs')} ], 
  postBuilds: [ 
    copy('src/**/!(*.js) docs'),
    injectEsbuildResult(),
  ]
};

/**
 * run src directory as a static server
 */
config.serve = {
  entryPoints: ['src/main.js'],
  loader: { '.html': 'text', '.css': 'text' },
  write: false,
  postBuilds: [
    copy('src/**/!(*.js) dist'),
    injectEsbuildResult(),
    runStaticServer('dist'),
    watchAndReload(['src', 'lib']),
    _ => open('http://localhost:9100/')
  ]
};

/**
 * write npm module to dist directory
 */
config.lib = {
  entryPoints: ['lib/index.js'],
  entryNames: '[name]',
  outdir: 'dist',
  bundle: true,
  metafile: true,
  write: true,
  minify: false,
  format: 'esm',
  target: ['es2019'],
  sourcemap: false,
  postBuilds: [
    async function(_, result) {
      let text = await esbuildX.analyzeMetafile(result.metafile, {verbose: true});
      console.log(text);
    }
  ]
};

module.exports = config;
