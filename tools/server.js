const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

const __basename = path.dirname(__dirname);

const port = 8000;

function startDevServer() {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    const livereload = require('easy-livereload');
    app.use(
      livereload({
        watchDirs: [path.join(__basename, 'static'), path.join(__basename, 'dist')],
        port: process.env.LIVERELOAD_PORT || 35729
      })
    );
  }

  app.use(express.static(path.resolve(__basename, 'static')));
  app.use(express.static(path.resolve(__basename, 'dist')));
  app.use('/lib', express.static(path.resolve(__basename, 'fla')));
  app.use('/images', express.static(path.resolve(__basename, 'fla/images')));

  /*=============proxy start==============*/
  // (() => {
  //   const proxy_options_mock = {
  //     target: `http://127.0.0.1:${port}/`,
  //     secure: false,
  //     changeOrigin: true,
  //     ws: true,
  //     ignorePath: false,
  //     pathRewrite: {
  //       '^/api_mock': ''
  //     }
  //   };
  //   const webProxyMock = proxy(proxy_options_mock);
  //   app.use('/api_mock/*', webProxyMock);
  // })();
  // =======

  app.listen(port, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Dev server listening at http://localhost:${port}/`);
  });
}

startDevServer();
